import { UPDATE_CHARTOPTION_TASK } from "./EventConstant";

const TaskModule = {
  state: {
    ChartOption_Task: {}
  },
  mutations: {
    [UPDATE_CHARTOPTION_TASK](state, chartOption) {
      state.ChartOption_Task = chartOption;
    }
  },
  actions: {
    updateTaskChartOption({ commit }, chartOption) {
      commit(UPDATE_CHARTOPTION_TASK, chartOption);
    }
  },
  getters: {
    taskChartOption: state => {
      return state.ChartOption_Task;
    }
  }
}

export default TaskModule;
