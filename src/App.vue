<template>
	<div class="page">
		<!-- 主页面 -->
		<!-- <div> -->
		<grid-layout
			class="droppable-content"
			ref="gridlayout"
			:layout.sync="layout"
			:col-num="12"
			:row-height="30"
			:is-draggable="true"
			:is-resizable="true"
			:vertical-compact="false"
			:use-css-transforms="false"
		>
			<a-icon type="setting" />
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
		<div class="droppable-list" @drag="drag" @dragend="dragend" draggable="true" unselectable="on">
			<a-tabs default-active-key="1">
				<a-tab-pane key="1" tab="Tab 1"> Content of Tab Pane 1 </a-tab-pane>
				<a-tab-pane key="2" tab="Tab 2" force-render> Content of Tab Pane 2 </a-tab-pane>
				<a-tab-pane key="3" tab="Tab 3"> Content of Tab Pane 3 </a-tab-pane>
			</a-tabs>
		</div>
	</div>
</template>

<script>
	/* eslint-disable */
	import { GridLayout, GridItem } from "vue-grid-layout";
	import * as echarts from "echarts";

	let mouseXY = { x: null, y: null };
	let DragPos = { x: null, y: null, w: 2, h: 2, i: null };
	export default {
		components: {
			GridLayout,
			GridItem,
		},
		data() {
			return {
				layout: [
					// { x: 0, y: 0, w: 2, h: 2, i: "0" },
					// { x: 2, y: 0, w: 2, h: 4, i: "1" },
					// { x: 4, y: 0, w: 2, h: 5, i: "2" },
					// { x: 6, y: 0, w: 2, h: 3, i: "3" },
					// { x: 8, y: 0, w: 2, h: 3, i: "4" },
					// { x: 10, y: 0, w: 2, h: 3, i: "5" },
					// { x: 0, y: 5, w: 2, h: 5, i: "6" },
					// { x: 2, y: 5, w: 2, h: 5, i: "7" },
					// { x: 4, y: 5, w: 2, h: 5, i: "8" },
					// { x: 5, y: 10, w: 4, h: 3, i: "9" },
				],
				echartOption: {
					xAxis: {
						type: "category",
						data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
					},
					yAxis: {
						type: "value",
					},
					series: [
						{
							data: [150, 230, 224, 218, 135, 147, 260],
							type: "line",
						},
					],
				},
				echartOption2: {
					color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
					grid: {
						left: "3%",
						right: "4%",
						bottom: "3%",
						containLabel: true,
					},
					xAxis: [
						{
							type: "category",
							boundaryGap: false,
							data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
						},
					],
					yAxis: [
						{
							type: "value",
						},
					],
					series: [
						{
							name: "Line 1",
							type: "line",
							stack: "总量",
							smooth: true,
							lineStyle: {
								width: 0,
							},
							showSymbol: false,
							areaStyle: {
								opacity: 0.8,
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
									{
										offset: 0,
										color: "rgba(128, 255, 165)",
									},
									{
										offset: 1,
										color: "rgba(1, 191, 236)",
									},
								]),
							},
							emphasis: {
								focus: "series",
							},
							data: [140, 232, 101, 264, 90, 340, 250],
						},
						{
							name: "Line 2",
							type: "line",
							stack: "总量",
							smooth: true,
							lineStyle: {
								width: 0,
							},
							showSymbol: false,
							areaStyle: {
								opacity: 0.8,
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
									{
										offset: 0,
										color: "rgba(0, 221, 255)",
									},
									{
										offset: 1,
										color: "rgba(77, 119, 255)",
									},
								]),
							},
							emphasis: {
								focus: "series",
							},
							data: [120, 282, 111, 234, 220, 340, 310],
						},
						{
							name: "Line 3",
							type: "line",
							stack: "总量",
							smooth: true,
							lineStyle: {
								width: 0,
							},
							showSymbol: false,
							areaStyle: {
								opacity: 0.8,
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
									{
										offset: 0,
										color: "rgba(55, 162, 255)",
									},
									{
										offset: 1,
										color: "rgba(116, 21, 219)",
									},
								]),
							},
							emphasis: {
								focus: "series",
							},
							data: [320, 132, 201, 334, 190, 130, 220],
						},
						{
							name: "Line 4",
							type: "line",
							stack: "总量",
							smooth: true,
							lineStyle: {
								width: 0,
							},
							showSymbol: false,
							areaStyle: {
								opacity: 0.8,
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
									{
										offset: 0,
										color: "rgba(255, 0, 135)",
									},
									{
										offset: 1,
										color: "rgba(135, 0, 157)",
									},
								]),
							},
							emphasis: {
								focus: "series",
							},
							data: [220, 402, 231, 134, 190, 230, 120],
						},
						{
							name: "Line 5",
							type: "line",
							stack: "总量",
							smooth: true,
							lineStyle: {
								width: 0,
							},
							showSymbol: false,
							label: {
								show: true,
								position: "top",
							},
							areaStyle: {
								opacity: 0.8,
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
									{
										offset: 0,
										color: "rgba(255, 191, 0)",
									},
									{
										offset: 1,
										color: "rgba(224, 62, 76)",
									},
								]),
							},
							emphasis: {
								focus: "series",
							},
							data: [220, 302, 181, 234, 210, 290, 150],
						},
					],
				},
				once: true,
			};
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
				if (mouseInGrid === true && this.layout.findIndex((item) => item.i === "drop") === -1) {
					this.layout.push({
						x: (this.layout.length * 2) % (this.colNum || 12),
						y: this.layout.length + (this.colNum || 12), // puts it at the bottom
						w: 2,
						h: 2,
						i: "drop",
					});
				}
				let index = this.layout.findIndex((item) => item.i === "drop");
				if (index !== -1) {
					try {
						this.$refs.gridlayout.$children[this.layout.length].$refs.item.style.display = "none";
					} catch {}
					let el = this.$refs.gridlayout.$children[index];
					el.dragging = {
						top: mouseXY.y - parentRect.top,
						left: mouseXY.x - parentRect.left,
					};
					let new_pos = el.calcXY(mouseXY.y - parentRect.top, mouseXY.x - parentRect.left);
					if (mouseInGrid === true) {
						this.$refs.gridlayout.dragEvent("dragstart", "drop", new_pos.x, new_pos.y, 1, 1);
						DragPos.i = String(index);
						DragPos.x = this.layout[index].x;
						DragPos.y = this.layout[index].y;
					}
					if (mouseInGrid === false) {
						this.$refs.gridlayout.dragEvent("dragend", "drop", new_pos.x, new_pos.y, 1, 1);
						this.layout = this.layout.filter((obj) => obj.i !== "drop");
					}
				}
			},
			dragend: function(e) {
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
				if (mouseInGrid === true) {
					this.$refs.gridlayout.dragEvent("dragend", "drop", DragPos.x, DragPos.y, 1, 1);
					this.layout = this.layout.filter((obj) => obj.i !== "drop");

					this.layout.push({
						x: DragPos.x,
						y: DragPos.y,
						w: 2,
						h: 2,
						i: DragPos.i,
					});
					this.$refs.gridlayout.dragEvent("dragend", DragPos.i, DragPos.x, DragPos.y, 1, 1);
					// try {
					this.$nextTick(() => {
						this.$refs.gridlayout.$children[this.layout.length].$refs.item.style.display = "block";
						// console.log(this.$refs.gridlayout.$children[this.layout.length].$refs.item);
						echarts
							.init(this.$refs.gridlayout.$children[this.layout.length].$refs.item)
							.setOption(this.once ? this.echartOption : this.echartOption2);
						this.once = !this.once;
					});
					// } catch {}
				}
			},
		},
	};
</script>

<style scoped>
	.page {
		display: flex;
	}
	.droppable-list {
		width: 30vw;
		height: 100vh;
		text-align: center;
		background: #fdd;
		border: 1px solid black;
		padding: 10px;
		transition: width 0.4s ease-out;
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
</style>
