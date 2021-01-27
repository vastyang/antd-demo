<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo">
        <img class="logo-img" src="@/assets/logo.png" />
      </div>
      <!-- 左侧菜单 -->
      <a-menu theme="dark" :default-selected-keys="['1']" :selected-keys="[current]" mode="inline" @click="menuClick">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>仪表盘</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="table" />
          <span>列表页</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="edit" />
          <span>表单页</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <!-- 右侧布局 -->
    <a-layout>
      <!-- 右侧header -->
      <a-layout-header style="background: #fff; padding: 0">
        <div class="title">云五岳</div>
      </a-layout-header>

      <!-- 右侧content -->
      <a-layout-content style="margin: 0 16px">
        <!-- 路由中子组件在这里渲染 -->
        <router-view></router-view>
      </a-layout-content>

      <!-- 右侧footer -->
      <a-layout-footer style="text-align: center">
        云五岳 Copyright
        <a-icon type="copyright" />
        2020
        <span>五岳科技出品</span>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      current: "1"
    };
  },
  methods: {
    menuClick(e) {
      this.current = e.key;
      if (e.key == "1") {
        this.$router.push({ path: "/dashboard/analysis" });
      } else if (e.key == "2") {
        this.$router.push({ path: "/list/basic-list" });
      } else if (e.key == "3") {
        this.$router.push({ path: "/form/basic-form" });
      }
    }
  },
  mounted() {
    let path = this.$route.path;
    console.log(path);
    if (path.indexOf("/dashboard") != -1) {
      this.current = "1";
    } else if (path.indexOf("/list") != -1) {
      this.current = "2";
    } else if (path.indexOf("/form") != -1) {
      this.current = "3";
    }
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
}
.logo-img {
  width: 30px;
}
.title {
  font-size: 20px;
  font-weight: 600;
}
</style>
