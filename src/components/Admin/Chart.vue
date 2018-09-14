<template>
    <Row>
        <i-col :xs="6" :sm="6" :md="6" :lg="6">
          <div style="display:flex">
          <span class="spanTitle">人员折线图</span>
          <dropdownList v-bind:dropdownInfo="dropdownInfo" style="margin-top:auto; margin-left:10px" v-on:dropdown-change="getPeriodArray($event)"></dropdownList>
          </div>
          <myChart style="margin-top:20px" :shape="moduleChartMapping.Preminum.Shape" :module="moduleChartMapping.Preminum.Name"></myChart>
        </i-col>
        <i-col :xs="5" :sm="5" :md="5" :lg="5">
          <span class="spanTitle">资源饼图
          </span>
          <myChart style="margin-top:40px" :shape="moduleChartMapping.Resource.Shape" :module="moduleChartMapping.Resource.Name"></myChart>
        </i-col>
        <i-col :xs="7" :sm="7" :md="7" :lg="7">
          <div style="display:flex">
          <span class="spanTitle">任务折线图</span>
          <dropdownList v-bind:dropdownInfo="dropdownInfo" style="margin-top:auto; margin-left:10px"></dropdownList>
          </div>
          <myChart style="margin-top:20px; margin-left: 30px;" :shape="moduleChartMapping.Task.Shape" :module="moduleChartMapping.Task.Name"></myChart>
        </i-col>
        <i-col :xs="6" :sm="6" :md="6" :lg="6">
          <span class="spanTitle">Robot柱状对比图
            <span class="spanPatch"></span>
          </span>
          <myChart style="margin-top:20px" :shape="moduleChartMapping.Robot.Shape" :module="moduleChartMapping.Robot.Name"></myChart>
        </i-col>
    </Row>
</template>

<script>
import { mapActions } from "vuex";
import DropDownList from "../CommonCluster/DropDownList";
import MyChart from "./Charts/MyChart";
import UserService from "../../services/UserService";
import ResourceService from "../../services/ResourceService";
import TaskService from "../../services/TaskService";
import RobotService from "../../services/RobotService";

const timestampDropDownInfo = {
  DefaultValue: "weeks",
  Items: ["weeks", "seasons", "years"]
};
const moduleChartMapping = {
  Preminum: {
    Name: "preminum",
    Shape: "line"
  },
  Resource: {
    Name: "resource",
    Shape: "pie"
  },
  Task: {
    Name: "task",
    Shape: "line"
  },
  Robot: {
    Name: "robot",
    Shape: "bar"
  }
};
export default {
  data() {
    return {
      dropdownInfo: timestampDropDownInfo,
      moduleChartMapping: moduleChartMapping
    };
  },
  created() {
    this.initPreminumLineChart();
    this.initResourcePieChart();
    this.initTaskLineChart();
    this.initRobotBarChart();
  },
  methods: {
    initResourcePieChart: function() {
      this.updateResourceChartOption(ResourceService.InitChartData());
    },
    initPreminumLineChart: function() {
      this.updatePreminumChartOption(
        this.initChartOption(this.moduleChartMapping.Preminum.Name)
      );
    },
    initTaskLineChart: function() {
      this.updateTaskChartOption(
        this.initChartOption(this.moduleChartMapping.Task.Name)
      );
    },
    initRobotBarChart: function() {
      this.updateRobotChartOption(
        this.initChartOption(this.moduleChartMapping.Robot.Name)
      );
    },
    getPeriodArray: function(currentValue) {
      let result = [];
      switch (currentValue) {
        case "weeks":
          result = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
          break;
        case "seasons":
          result = ["一季度", "二季度", "三季度", "四季度"];
          break;
        case "years":
          let currentYear = new Date().getFullYear();
          result = Array.apply(
            null,
            [currentYear - 3, currentYear - 2, currentYear - 1, currentYear],
            null
          );
          break;
        default:
          return;
      }
      return result;
    },
    initChartOption: function(moduleType, periodType, periodEndTime) {
      let timestampType =
        typeof periodType !== "undefined" && periodType !== ""
          ? periodType
          : this.dropdownInfo.DefaultValue;
      let timestampValue =
        typeof periodEndTime !== "undefined" ? periodEndTime : new Date();

      let period = this.getPeriodArray(timestampType);
      let optionItems = [];
      switch (moduleType) {
        case this.moduleChartMapping.Preminum.Name:
          optionItems = optionItems.concat(
            UserService.initChartData(timestampType, timestampValue)
          );
          break;
        case this.moduleChartMapping.Task.Name:
          optionItems = optionItems.concat(
            TaskService.initChartData(timestampType, timestampValue)
          );
          break;
        case this.moduleChartMapping.Robot.Name:
          optionItems = optionItems.concat(
            RobotService.initChartData(timestampType, timestampValue)
          );
          break;
        default:
          console.error(`the param moduleType ${moduleType} is invalid.`);
          throw new Error(
            `the param moduleType ${moduleType} is invalid in initChartOption method.`
          );
      }

      let optionInfo = {
        OptionTimeStamp: period,
        OptionItems: optionItems
      };
      return optionInfo;
    },
    ...mapActions([
      "updatePreminumChartOption",
      "updateResourceChartOption",
      "updateTaskChartOption",
      "updateRobotChartOption"
    ])
  },
  components: { myChart: MyChart, dropdownList: DropDownList }
};
</script>

<style scoped>
.spanTitle {
  font-size: 18px;
}
.spanPatch {
  font-size: 12px;
}
</style>
