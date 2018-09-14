<template>
  <div :id="id" :style="{height: heightValue, width: widthValue}" ref="container">
  </div>
</template>
<script>
import * as echarts from "echarts";
import { mapGetters } from "vuex";
import LineChartOption from "../../../model/ChartOption/LineChartOption";
import PieChartOption from "../../../model/ChartOption/PieChartOption";
import BarChartOption from "../../../model/ChartOption/BarChartOption";

export default {
  props: {
    id: {
      type: String,
      default: "container"
    },
    heightValue: {
      type: String,
      default: "360px"
    },
    widthValue: {
      type: String,
      default: "330px"
    },
    shape: {
      type: String,
      default: "line"
    },
    module: {
      type: String,
      default: "preminum"
    }
  },
  data() {
    return {
      chart: null
    };
  },
  computed: {
    ...mapGetters([
      "preminumChartOption",
      "resourceChartOption",
      "taskChartOption",
      "robotChartOption"
    ])
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart: function() {
      let containerEle = this.$refs.container;
      let myChart = echarts.init(containerEle, "light", "svg");
      let option = this.initChartOption(this.shape, this.module);
      myChart.setOption(option);
    },
    initChartOption: function(shape, module) {
      switch (shape) {
        case "line":
          if (module === "preminum") {
            return LineChartOption.InitLineOption(this.preminumChartOption);
          } else if (module === "task") {
            return LineChartOption.InitLineOption(this.taskChartOption);
          } else {
            console.error("there is not valid module type.");
            return null;
          }
        case "bar":
          return BarChartOption.InitBarOption(this.robotChartOption);
        case "pie":
          return PieChartOption.InitPieOption(this.resourceChartOption);
        default:
          return null;
      }
    }
  }
};
</script>

<style scoped>
</style>
