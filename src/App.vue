<template>
	<div class="page">
		<grid-layout
			ref="gridlayout"
			class="drappable-content"
			:layout.sync="layout"
			:col-num="6"
			:row-height="30"
			:is-draggable="true"
			:is-resizable="true"
			:vertical-compact="true"
			:use-css-transforms="true"
		>
			<grid-item
				style="touch-action: none"
				v-for="(item, index) in layout"
				:key="index"
				:x="item.x"
				:y="item.y"
				:w="item.w"
				:h="item.h"
				:i="item.i"
			>
			</grid-item>
		</grid-layout>
		<a-tabs :default-active-key="2" class="droppable-list" :tabBarStyle="{ 'margin-bottom': 0 }">
			<a-tab-pane :tab="'2 X' + tabIndex" v-for="tabIndex in 3" :key="tabIndex" class="tabPane">
				<v-chart
					v-for="(chart, index) in allCharts['tab' + tabIndex]"
					:key="index"
					:options="chart.echartOption"
					@drag.native="drag(chart.gridOption)"
					@dragend.native="dragend(chart.echartOption, chart.gridOption)"
					draggable="true"
					unselectable="on"
				/>
			</a-tab-pane>
		</a-tabs>
	</div>
</template>

<script>
	/* eslint-disable */
	import { GridLayout, GridItem } from "vue-grid-layout";
	import echarts from "echarts";

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
				layout: [],
			};
		},
		computed: {
			allCharts: () => allCharts,
		},
		mounted() {
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
			drag: function(gridOption) {
				let parentRect = this.$refs.gridlayout.$el.getBoundingClientRect();
				let mouseInGrid = false;
				if (
					mouseXY.x > parentRect.left &&
					mouseXY.x < parentRect.right &&
					mouseXY.y > parentRect.top &&
					mouseXY.y < parentRect.bottom
				) {
					mouseInGrid = true;
				}
				if (mouseInGrid === true && this.layout.findIndex((item) => item.i === "drop") === -1) {
					this.layout.push({
						x: this.layout.length % (this.colNum || 12),
						y: Math.floor(this.layout.length / (this.colNum || 12)), // puts it at the bottom
						w: gridOption.w,
						h: gridOption.h,
						i: "drop",
					});
				}
				let index = this.layout.findIndex((item) => item.i === "drop");
				if (index !== -1) {
					try {
						// this.$refs.gridlayout.$children[this.layout.length].$refs.item.style.display = "none";
					} catch {}
					let el = this.$refs.gridlayout.$children[index];
					el.dragging = {
						//TODO: 可删除？
						top: mouseXY.y - parentRect.top,
						left: mouseXY.x - parentRect.left,
					};
					let new_pos = el.calcXY(mouseXY.y - parentRect.top, mouseXY.x - parentRect.left);
					if (mouseInGrid === true) {
						this.$refs.gridlayout.dragEvent(
							"dragstart",
							"drop",
							new_pos.x,
							new_pos.y,
							gridOption.h,
							gridOption.w
						);
						DragPos.i = String(index);
						DragPos.x = this.layout[index].x;
						DragPos.y = this.layout[index].y;
					}
					if (mouseInGrid === false) {
						this.$refs.gridlayout.dragEvent(
							"dragend",
							"drop",
							new_pos.x,
							new_pos.y,
							gridOption.h,
							gridOption.w
						);
						this.layout = this.layout.filter((obj) => obj.i !== "drop");
					}
				}
			},
			dragend: function(thisChart, gridOption) {
				let parentRect = this.$refs.gridlayout.$el.getBoundingClientRect();
				let mouseInGrid = false;
				if (
					mouseXY.x > parentRect.left &&
					mouseXY.x < parentRect.right &&
					mouseXY.y > parentRect.top &&
					mouseXY.y < parentRect.bottom
				) {
					mouseInGrid = true;
				}
				if (mouseInGrid === true) {
					this.$refs.gridlayout.dragEvent("dragend", "drop", DragPos.x, DragPos.y, 1, 1);
					this.layout = this.layout.filter((obj) => obj.i !== "drop");
					this.layout.push({
						x: DragPos.x,
						y: DragPos.y,
						w: gridOption.w,
						h: gridOption.h,
						i: DragPos.i,
					});
					this.$refs.gridlayout.dragEvent("dragend", DragPos.i, DragPos.x, DragPos.y, 1, 1);
					this.$nextTick(() => {
						// this.$refs.gridlayout.$children[this.layout.length].$refs.item.style.display = "block";
						const what = this.$refs.gridlayout.$children[
							this.layout.length
						].$refs.item.getBoundingClientRect();
						console.log(what);
						echarts
							.init(this.$refs.gridlayout.$children[this.layout.length].$refs.item)
							.setOption(thisChart);
					});
				}
			},
		},
	};
</script>

<style>
	.vue-grid-item:not(.vue-grid-placeholder) {
		background: #ccc;
		border: 1px solid black;
	}
	.vue-grid-layout {
		background: #eee;
	}
	.page {
		display: flex;
	}
	.droppable-list {
		flex: 1;
		text-align: center;
		height: 100vh;
	}
	.drappable-content {
		flex: 2;
		height: 100vh !important;
	}
	.tabPane {
		display: flex;
		height: 100%;
		width: 100%;
		padding: 0 20px 50px;
		flex-direction: column;
	}
	/*v-echart标签的类*/
	.echarts {
		/* 修改vue-echarts的默认大小 */
		width: 100% !important;
	}
</style>
