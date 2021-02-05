<template>
	<div class="page">
		<!-- 主页面 -->
		<!-- <div> -->
		<grid-layout
			class="droppable-content"
			ref="gridlayout"
			:layout.sync="layout"
			:col-num="colNum"
			:row-height="rowHeight"
			:is-draggable="true"
			:is-resizable="true"
			:vertical-compact="false"
			:use-css-transforms="false"
			:maxRows="maxRows"
		>
			<!-- <a-icon type="setting" class="setting" /> -->
			<grid-item
				style="touch-action: none"
				:key="item.i"
				v-for="item in layout"
				:x="item.x"
				:y="item.y"
				:w="item.w"
				:h="item.h"
				:i="item.i"
			>
				<span class="text">{{ item.i }}</span>
			</grid-item>
		</grid-layout>
		<!-- </div> -->
		<!-- 右侧拖拽源 -->
		<!-- <div> -->
		<a-tabs default-active-key="1" class="droppable-list">
			<a-tab-pane key="1" tab="2 X 2" class="chart-tab">
				<!-- <div
					@drag="drag"
					@dragend="dragend"
					draggable="true"
					unselectable="on"
				></div> -->
				<v-chart
					class="chart"
					v-for="(chart, index) in allCharts.tab1"
					:key="index"
					:ref="'chartA' + index"
					:options="chart"
					@drag.native="drag"
					@dragend.native="dragend($event, chart)"
					draggable="true"
					unselectable="on"
				/>
			</a-tab-pane>
		</a-tabs>
		<!-- </div> -->
	</div>
</template>

<script>
	/* eslint-disable */
	import { GridLayout, GridItem } from "vue-grid-layout";
	import echarts from "echarts";
	// import "echarts/lib/chart/line";
	// import "echarts/lib/component/polar";

	import allCharts from "./echarts.js";

	let mouseXY = { x: null, y: null };
	let DragPos = { x: null, y: null, w: 2, h: 2, i: null };
	export default {
		components: {
			GridLayout,
			GridItem,
		},
		data() {
			return {
				colNum: 12,
				maxRows: 15,
				rowHeight: 30,
				sample: null,
				layout: [
					{
						x: 0,
						y: 0,
						w: 2,
						h: 2,
						i: "drop",
					},
				],
			};
		},
		computed: {
			allCharts: () => allCharts,
		},
		mounted() {
			this.sample = this.$refs.gridlayout.$children[0].$el;
			this.sample.style.display = "none";
			console.log(this.sample);
			document.addEventListener(
				"dragover",
				function(e) {
					mouseXY.x = e.clientX;
					mouseXY.y = e.clientY;
				},
				false
			);
		},
		methods: {
			drag: function(e) {
				const parentRect = this.$refs.gridlayout.$el.getBoundingClientRect();
				let mouseInGrid = false;
				if (
					mouseXY.x > parentRect.left &&
					mouseXY.x < parentRect.right &&
					mouseXY.y > parentRect.top &&
					mouseXY.y < parentRect.bottom
				) {
					mouseInGrid = true;
				}
				if (mouseInGrid) {
					this.sample.style.display = "block";
					this.$nextTick(() => {
						const x = Math.floor(
							((mouseXY.x - parentRect.left) / (parentRect.right - parentRect.left)) * this.colNum
						);
						const y = Math.floor((mouseXY.y - parentRect.top) / this.rowHeight);
						console.log(x, y);
						this.layout[0].x = x;
						this.layout[0].y = y;
					});
				}
			},
			dragend: function(e, thisChart) {
				this.sample.style.display = "none";
				const index = this.layout.length;
				const option = { ...this.layout[0], i: index };
				console.log(option);
				this.layout.push(option);
				this.$nextTick(() => {
					console.log(this.$refs.gridlayout.$children[index + 1].$el);
					echarts.init(this.$refs.gridlayout.$children[index + 1].$el).setOption(thisChart);
				});
			},
		},
	};
</script>

<style scoped>
	.page {
		display: flex;
	}
	.droppable-list {
		width: 50vw;
		/* height: 100vh; */
		text-align: center;
		/* transition: width 0.4s ease-out; */
	}
	.droppable-content {
		width: 100%;
		height: 100vh !important;
	}
	.vue-grid-layout {
		background: #eee;
	}
	.vue-grid-item:not(.vue-grid-placeholder) {
		/* background: #ccc; */
		border: 1px solid black;
	}
	.vue-grid-item .resizing {
		opacity: 0.9;
	}
	.vue-grid-item .static {
		/* background: #cce; */
	}
	.vue-grid-item .text {
		font-size: 24px;
		text-align: center;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		height: 100%;
		width: 100%;
	}
	.vue-grid-item .no-drag {
		height: 100%;
		width: 100%;
	}
	.vue-grid-item .minMax {
		font-size: 12px;
	}
	.vue-grid-item .add {
		cursor: pointer;
	}
	.vue-draggable-handle {
		position: absolute;
		width: 20px;
		height: 20px;
		top: 0;
		left: 0;
		background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
			no-repeat;
		background-position: bottom right;
		padding: 0 8px 8px 0;
		background-repeat: no-repeat;
		background-origin: content-box;
		box-sizing: border-box;
		cursor: pointer;
	}
	.layoutJSON {
		background: #ddd;
		border: 1px solid black;
		margin-top: 10px;
		padding: 10px;
	}
	.layoutJSON {
		background: #ddd;
		border: 1px solid black;
		margin-top: 10px;
		padding: 10px;
	}
	.columns {
		-moz-columns: 120px;
		-webkit-columns: 120px;
		columns: 120px;
	}

	.setting {
		position: fixed;

		font-size: 30px;
		color: hotpink;
		margin: 40px 40px;
	}

	.echarts {
		order: 1;
		width: 100%;
		/* height: 50px; */
	}
	.chart-tab {
		display: flex;
		flex-direction: column;
	}
</style>
