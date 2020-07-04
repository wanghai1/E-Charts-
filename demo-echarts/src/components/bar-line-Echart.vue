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
          xAxias: []
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
      const { legend, series, xAxias } = data;

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
          bottom: "15%",
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
          data: xAxias,
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
    },
    difference(arr) {
      const testArr = [...arguments].slice(1);
      const newArr = [];
      arr.forEach(val => {
        if (!testArr.incloud(val)) newArr.push(val);
      });
      return newArr;
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
