<template>
    <div class="layout">
        <breadcrumb :style="{margin: '16px 0'}">
            <breadcrumb-item :class="{'handStyle': childRouterName != ''}" @click.native="RedirectTo('Admin')">管理页面</breadcrumb-item>
            <breadcrumb-item v-if="childRouterName != ''">{{childRouterName}}</breadcrumb-item>
        </breadcrumb>
        <layout>
            <sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                <i-menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                  <!-- 人员管理 -->
                    <submenu name="person_manage">
                        <template slot="title">
                            <icon type="md-person"></icon>
                            <span>人员管理</span>
                        </template>
                    <menu-item id="admin_page" name="admin_page" @click.native="RedirectTo('Preminum')">
                          <icon type="ios-person"></icon>
                          <span>管理员</span>
                    </menu-item>
                    <menu-item id="user_page" name="user_page" @click.native="RedirectTo('User')">
                          <icon type="ios-people"></icon>
                          <span>用户</span>
                    </menu-item>
                  </submenu>
                  <!-- 资源管理 -->
                    <submenu name="source_manage">
                        <template slot="title">
                            <icon type="ios-folder-open"></icon>
                            <span>资源管理</span>
                        </template>
                    <menu-item id="video_page" name="video_page" @click.native="RedirectTo('Video')">
                        <icon type="ios-videocam"></icon>
                        <span>小视频</span>
                    </menu-item>
                    <menu-item id="joke_page" name="joke_page" @click.native="RedirectTo('Joke')">
                        <icon type="ios-happy"></icon>
                        <span>段子</span>
                    </menu-item>
                    <menu-item id="posts_page" name="posts_page" @click.native="RedirectTo('Posts')">
                        <icon type="ios-redo"></icon>
                        <span>推送文章</span>
                    </menu-item>
                  </submenu>
                  <!-- 任务管理 -->
                  <submenu name="task_manage">
                        <template slot="title">
                            <icon type="ios-apps"></icon>
                            <span>任务管理</span>
                        </template>
                    <menu-item id="taskcompelate_page" name="taskcompelate_page" @click.native="RedirectTo('CompelateTask')">
                        <icon type="ios-bus-outline"></icon>
                        <span>完成</span>
                    </menu-item>
                    <menu-item id="taskrunning_page" name="taskrunning_page" @click.native="RedirectTo('RunningTask')">
                        <icon type="ios-bus"></icon>
                        <span>执行中</span>
                    </menu-item>
                    <menu-item id="taskprepear_page" name="taskprepear_page" @click.native="RedirectTo('PrepearTask')">
                        <icon type="md-bus"></icon>
                        <span>待执行</span>
                    </menu-item>
                    <menu-item id="taskerror_page" name="taskerror_page" @click.native="RedirectTo('ErrorTask')">
                        <icon type="ios-bug"></icon>
                        <span>异常Task</span>
                    </menu-item>
                  </submenu>
                  <!-- 机器人管理 -->
                  <submenu name="robot_manage">
                        <template slot="title">
                            <icon type="logo-android"></icon>
                            <span>Robot管理</span>
                        </template>
                    <menu-item id="robot1_page" name="robot1_page" @click.native="RedirectTo('Dating')">
                        <icon type="ios-ionitron"></icon>
                        <span>小约们</span>
                    </menu-item>
                    <menu-item id="robot2_page" name="robot2_page" @click.native="RedirectTo('Fishing')">
                        <icon type="ios-ionitron-outline"></icon>
                        <span>小钓们</span>
                    </menu-item>
                  </submenu>
                </i-menu>
                <div slot="trigger"></div>
            </sider>
            <layout class="layout-content">
                <i-content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
                    <router-view></router-view>
                </i-content>
            </layout>
        </layout>
    </div>
</template>

<script>
import menuArray from "../model/MenuModel";

export default {
  data() {
    return {
      isCollapsed: false,
      childRouterName: ""
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    RedirectTo: function(routerName) {
      this.$router.replace({ name: routerName });
      for (var menuGroup of menuArray) {
        if (
          menuGroup[routerName] != null &&
          menuGroup[routerName] !== undefined
        ) {
          this.childRouterName = menuGroup[routerName];
          return;
        }
      }
      this.childRouterName = "";
    }
  },
  created() {
    if (!this.childRouterName) {
      this.$router.replace({ name: "Admin" });
    }
  }
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.layout-content {
  min-height: 90vh;
  border-top: 1px solid #dcdee2;
}

.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}

.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}

.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}

.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}

a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
}

a:hover {
  color: rgba(255, 255, 255, 0.7);
}

.router-link-active {
  text-decoration: none;
}

.handStyle {
  cursor: pointer;
}
</style>
