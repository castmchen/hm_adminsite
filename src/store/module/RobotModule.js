import { UPDATE_CHARTOPTION_ROBOT } from "./EventConstant";

const RobotModule = {
  state: {
    ChartOption_Robot: {}
  },
  mutations: {
    [UPDATE_CHARTOPTION_ROBOT](state, chartOption) {
      state.ChartOption_Robot = chartOption;
    }
  },
  actions: {
    updateRobotChartOption({ commit }, chartOption) {
      commit(UPDATE_CHARTOPTION_ROBOT, chartOption);
    }
  },
  getters: {
    robotChartOption: state => {
      return state.ChartOption_Robot;
    }
  }
}

export default RobotModule;
