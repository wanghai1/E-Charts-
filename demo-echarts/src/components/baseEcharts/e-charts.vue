<template>
  <div class="eCharts">
    <slot></slot>
    <div
      id="echarts"
      :ref="chartkey"
      :data-responsive="responsive"
      :style="{ width: width, height: height }"
    ></div>
  </div>
</template>

<script>
import Echarts from "echarts";
import _ from "lodash";

export default {
  name: "eCharts",
  props: {
    width: {
      type: [String, Number],
      default: "100%"
    },
    height: {
      type: [String, Number],
      default: "100%"
    },
    responsive: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      chartkey: _.uniqueId("echarts_")
    };
  },
  computed: {
    EchartsOptions() {
      const { options } = this;
      return options;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initCharts();
      // console.log(this.EchartsOptions);
      this.echarts.setOption(this.EchartsOptions, true);
      this._resize = _.debounce(() => this.autoResize(), 10);

      if (this.responsive) {
        this.autoResize();
        window.addEventListener("resize", this._resize);
      }
    });
  },
  methods: {
    initCharts() {
      if (this.echarts) {
        this.echarts.clear();
      } else {
        // console.log(this.$refs[this.chartkey]);
        this.echarts = Echarts.init(this.$refs[this.chartkey]);
        this.echarts.on("ckick", params => {
          this.$emit("handerClick", params);
        });
      }
    },
    autoResize() {
      this.echarts.resize();
    }
  },
  watch: {
    responsive(responsive) {
      if (responsive) {
        this.autoResize();
        window.addEventListener("resize", this._resize);
      } else {
        window.removeEventListener("resize", this._resize);
      }
    },
    options(options) {
      this.$nextTick(() => {
        this.echarts.setOption(options, true);
        this.echarts.resize();
      });
    },
    width() {
      this.autoResize();
    },
    height() {
      this.autoResize();
    }
  },
  beforeDestroy() {
    this.echarts.dispose();
    if (this.responsive) {
      window.removeEventListener("resize", this._resize);
    }
  }
};
</script>

<style scoped>
.eCharts {
  width: 100%;
  height: 100%;
}
</style>
