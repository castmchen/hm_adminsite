import { UPDATE_ADMINDATA, UPDATE_USERDATA, UPADTE_CHARTOPTION_PREMINUM } from "./EventConstant";

const PreminumModule = {
  state: {
    AdminData: [],
    UserData: [],
    ChartOption_Preminum: {}
  },
  mutations: {
    [UPDATE_ADMINDATA](state, adminList) {
      state.AdminData = adminList;
    },
    [UPDATE_USERDATA](state, userList) {
      state.UserData = userList;
    },
    [UPADTE_CHARTOPTION_PREMINUM](state, chartOption) {
      state.ChartOption_Preminum = chartOption;
    }
  },
  actions: {
    updateAdminData({ commit }, adminList) {
      commit(UPDATE_ADMINDATA, adminList);
    },
    updateUserData({ commit }, userList) {
      commit(UPDATE_USERDATA, userList);
    },
    updatePreminumChartOption({ commit }, chartOption) {
      commit(UPADTE_CHARTOPTION_PREMINUM, chartOption);
    }
  },
  getters: {
    adminList: state => {
      return state.AdminData;
    },
    getAdminListById: state => id => {
      return state.adminList.find(_ => _.id === id);
    },
    preminumChartOption: state => {
      return state.ChartOption_Preminum;
    }
  }
}

export default PreminumModule;
