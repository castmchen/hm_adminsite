import Vue from 'vue'
import Vuex from 'vuex'
import PreminumModule from "./module/PreminumModule"
import ResourceModule from "./module/ResourceModule"
import TaskModule from "./module/TaskModule"
import RobotModule from "./module/RobotModule"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    PreminumModule,
    ResourceModule,
    TaskModule,
    RobotModule
  }
})

export default store;
