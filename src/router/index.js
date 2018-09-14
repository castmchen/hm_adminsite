import Vue from 'vue';
import Router from 'vue-router';
import { RouterList } from './RouterList'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: RouterList
})

router.beforeEach((to, from, next) => {
  // window.document.title = to.meta.title;
  window.scrollTo(0, 0);
  next();
})

export default router;
