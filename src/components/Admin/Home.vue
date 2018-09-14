<template>
    <div class="demo-split" style="height:86vh">
        <Split v-model="split2" mode="vertical">
            <div slot="top" class="demo-split-pane">
                <row type="flex">
                    <i-col span="6">
                        <card dis-hover>
                            <p slot="title">人员管理</p>
                            <router-link :to="{name: 'Preminum'}">管理员</router-link>
                            <br>
                            <router-link :to="{name: 'User'}">用户</router-link>
                        </card>
                    </i-col>
                    <i-col span="6">
                        <card dis-hover>
                            <p slot="title">资源管理</p>
                            <router-link :to="{name: 'Video'}">小视频</router-link>
                            <br>
                            <router-link :to="{name: 'Joke'}">段子</router-link>
                            <br>
                            <router-link :to="{name: 'Posts'}">推送文章</router-link>
                        </card>
                    </i-col>
                    <i-col span="6">
                        <card dis-hover>
                            <p slot="title">任务管理</p>
                            <router-link :to="{name: 'CompelateTask'}">完成Task</router-link>
                            <br>
                            <router-link :to="{name: 'RunningTask'}">执行中Task</router-link>
                            <br>
                            <router-link :to="{name: 'PrepearTask'}">待执行Task</router-link>
                            <br>
                            <router-link :to="{name: 'ErrorTask'}">异常Task</router-link>
                        </card>
                    </i-col>
                    <i-col span="6">
                        <card dis-hover>
                            <p slot="title">Robot管理</p>
                            <router-link :to="{name: 'Dating'}">小约们</router-link>
                            <br>
                            <router-link :to="{name: 'Fishing'}">小钓们</router-link>
                        </card>
                    </i-col>
                </row>
            </div>
            <div slot="bottom" class="demo-split-pane">
                <chart></chart>
            </div>
        </Split>
    </div>
</template>
<script>
import Chart from "./Chart.vue";

export default {
  data() {
    return {
      split2: 0.3
    };
  },
  components: { chart: Chart }
};
</script>
<style>
.demo-split {
  border: 1px solid #dcdee2;
}

.demo-split-pane {
  padding: 10px;
}
</style>
