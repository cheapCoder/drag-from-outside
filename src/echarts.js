// echarts和vue-grid-layout的配置对象举例
export default {
  tab1: [
    {
      gridOption: {
        w: 2,
        h: 1,
        i: 11,
      },
      echartOption: {
        grid: {
          top: 30,
          bottom: 0,
          left: 20,
          right: 30,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }]
      },
    }, {
      gridOption: {
        w: 2,
        h: 1,
        i: 12,
      },
      echartOption: {
        grid: {
          top: 30,
          bottom: 0,
          left: 20,
          right: 30,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }]
      }
    },
    {
      gridOption: {
        w: 2,
        h: 1,
        i: 13,
      },
      echartOption: {
        xAxis: {
          type: 'category',
          name: 'x',
          splitLine: { show: false },
          data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
        },
        grid: {
          top: 30,
          bottom: 0,
          left: 20,
          right: 30,
          containLabel: true
        },
        yAxis: {
          type: 'log',
          name: 'y',
          minorSplitLine: {
            show: true
          }
        },
        series: [
          {
            name: '3的指数',
            type: 'line',
            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
          },
          {
            name: '2的指数',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
          },
          {
            name: '1/2的指数',
            type: 'line',
            data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512]
          }
        ]
      }
    },
    {
      gridOption: {
        w: 2,
        h: 1,
        i: 14,
      },
      echartOption: {
        grid: {
          top: 30,
          bottom: 0,
          left: 6,
          right: 30,
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      }
    }],
  tab2: [
    {
      gridOption: {
        w: 2,
        h: 2,
        i: 21,
      },
      echartOption: {
        grid: {
          top: 30,
          bottom: 0,
          left: 20,
          right: 30,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }]
      }
    },
    {
      gridOption: {
        w: 2,
        h: 2,
        i: 22,
      },
      echartOption: {
        grid: {
          top: 30,
          bottom: 0,
          left: 20,
          right: 30,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }]
      }
    },
    {
      gridOption: {
        w: 2,
        h: 2,
        i: 23,
      },
      echartOption: {


        grid: {
          top: 30,
          bottom: 0,
          left: 6,
          right: 30,
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      }
    }, {
      gridOption: {
        w: 2,
        h: 2,
        i: 24,
      },
      echartOption: {

        xAxis: {
          type: 'category',
          name: 'x',
          splitLine: { show: false },
          data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
        },
        grid: {
          top: 30,
          bottom: 0,
          left: 20,
          right: 30,
          containLabel: true
        },
        yAxis: {
          type: 'log',
          name: 'y',
          minorSplitLine: {
            show: true
          }
        },
        series: [
          {
            name: '3的指数',
            type: 'line',
            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
          },
          {
            name: '2的指数',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
          },
          {
            name: '1/2的指数',
            type: 'line',
            data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512]
          }
        ]
      }
    },],
  tab3: [
    {
      gridOption: {
        w: 2,
        h: 3,
        i: 31,
      },
      echartOption: {
        grid: {
          top: 30,
          bottom: 0,
          left: 6,
          right: 30,
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      }
    },
    {
      gridOption: {
        w: 2,
        h: 3,
        i: 32,
      },
      echartOption: {
        grid: {
          top: 30,
          bottom: 0,
          left: 20,
          right: 30,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }]
      }
    }, {
      gridOption: {
        w: 2,
        h: 3,
        i: 33,
      },
      echartOption: {

        xAxis: {
          type: 'category',
          name: 'x',
          splitLine: { show: false },
          data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
        },
        grid: {
          top: 30,
          bottom: 0,
          left: 20,
          right: 30,
          containLabel: true
        },
        yAxis: {
          type: 'log',
          name: 'y',
          minorSplitLine: {
            show: true
          }
        },
        series: [
          {
            name: '3的指数',
            type: 'line',
            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
          },
          {
            name: '2的指数',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
          },
          {
            name: '1/2的指数',
            type: 'line',
            data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512]
          }
        ]
      }
    }, {
      gridOption: {
        w: 2,
        h: 3,
        i: 34,
      },
      echartOption: {
        grid: {
          top: 30,
          bottom: 0,
          left: 20,
          right: 30,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }]
      }
    }
  ]
}