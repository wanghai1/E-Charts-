<template>
  <eCharts
    class="barEchart"
    :options="options"
    :handerClick="handerClick"
  ></eCharts>
</template>

<script>
import eCharts from "./baseEcharts/e-charts";
export default {
  name: "barEcharts",
  props: {
    color: {
      type: Array,
      default: () => {
        return ["#3398DB"];
      }
    },
    data: {
      type: Object,
      default: () => {
        return {
          legend: [],
          series: [],
          xAxis: []
        };
      }
    }
  },
  data() {
    return {};
  },
  components: {
    eCharts
  },
  computed: {
    options() {
      const { color, data } = this;
      const { legend, series, xAxis } = data;

      return {
        color: color,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          containLabel: true,
          formatter: params => {
            // console.log(params);
            let str = params[0].name + "<br/>";
            params.forEach(val => {
              const { marker, seriesName, value } = val;
              // console.log(seriesName);
              str += `${marker} ${seriesName} :  ${value}<br/>`;
            });
            return str;
          }
        },
        grid: {
          left: "10%",
          bottom: "20%",
          right: "4%",
          top: " 8%"
        },
        legend: {
          bottom: "10",
          icon: "react",
          data: legend || ""
        },
        series: series.map((val, i) => ({
          item: "",
          type: val.type,
          name: legend[i] || "",
          data: val.data
        })),
        xAxis: {
          type: "category",
          data: xAxis,
          splitLine: { show: false }
        },
        yAxis: {
          type: "value",
          axisTick: { show: false },
          splitLine: { show: true }
        }
      };
    }
  },
  methods: {
    handerClick(paramas) {
      this.$emit("handerClick", paramas);
    }
  }
};
</script>

<style scoped>
.barEchart {
  width: 100%;
  height: 100%;
}
</style>
