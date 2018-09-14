import { UPDATE_CHARTOPTION_RESOURCE } from "./EventConstant";

const ResourceModule = {
  state: {
    ChartOption_Resouce: {}
  },
  mutations: {
    [UPDATE_CHARTOPTION_RESOURCE](state, chartOption) {
      state.ChartOption_Resouce = chartOption;
    }
  },
  actions: {
    updateResourceChartOption({ commit }, chartOption) {
      commit(UPDATE_CHARTOPTION_RESOURCE, chartOption);
    }
  },
  getters: {
    resourceChartOption: state => {
      return state.ChartOption_Resouce;
    }
  }
}

export default ResourceModule;
