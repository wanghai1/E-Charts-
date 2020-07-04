<template>
  <Myecharts
    class="barCharts"
    :options="option"
    @handerClick="handerClick"
  ></Myecharts>
</template>

<script>
import Myecharts from "@/components/baseEcharts/e-charts";
import echarts from "echarts";

export default {
  name: "",
  props: {
    color: {
      type: Array,
      default: () => {
        return [];
      }
    },
    data: {
      type: Object,
      default: () => {
        return {
          series: [],
          xAxis: [],
          legend: []
        };
      }
    }
  },
  data() {
    return {};
  },
  components: {
    Myecharts
  },
  computed: {
    option() {
      const { color, data } = this;
      const { legend, series, xAxis } = data;
      return {
        color: color,
        grid: {
          left: "15%",
          top: "10%",
          bottom: "20%"
        },
        legend: {
          bottom: "10",
          icon: "react",
          data: legend || "",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          axisTick: {
            show: false
          },
          data: xAxis,
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#fff"
            }
          }
        },
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed"
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#fff"
              }
            }
          },
          {
            type: "value",
            axisLabel: {
              show: "true",
              formatter: value => {
                return `${value}%`;
              }
            },
            splitLine: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#fff"
              }
            }
          }
        ],
        series: series.map((item, index) => ({
          name: legend[index] || "",
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                1,
                0,
                0,
                1, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                [
                  { offset: 0, color: "rgba(141, 65, 217,1)" },
                  { offset: 0.8, color: "rgba(141, 65, 217,.2)" },
                  { offset: 1, color: "rgba(141, 65, 217,0)" }
                ]
              )
            }
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 1,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "red" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "blue" // 100% 处的颜色
                }
              ]
            },
            opacity: 0.2,
            origin: "start"
          },
          type: item.type,
          data: item.data,
          yAxisIndex: item.yAxisIndex || 0
        }))
      };
    }
  },
  methods: {
    handerClick(params) {
      this.$emit("handerClick", params);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.barCharts {
  width: 100%;
  height: 100%;
}
</style>
