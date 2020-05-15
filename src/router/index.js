import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout"),
    children: [
      // dashboard
      {
        path: "/",
        redirect: "/dashboard/analysis"
      },
      {
        path: "/dashboard",
        name: "dashboard",
        redirect: "/dashboard/analysis",
        meta: { icon: "dashboard", title: "仪表盘" },
        component: { render: h => h("router-view") },
        children: [
          {
            path: "analysis",
            name: "Analysis",
            meta: { title: "分析页" },
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "../views/dashboard/Analysis"
              )
          }
        ]
      },
      // list
      {
        path: "/list",
        name: "list",
        redirect: "/list/basic-list",
        component: { render: h => h("router-view") },
        meta: { title: "列表页", icon: "table", permission: ["table"] },
        children: [
          {
            path: "basic-list",
            name: "BasicList",
            component: () => import("@/views/list/BasicList"),
            meta: { title: "标准列表", keepAlive: true, permission: ["table"] }
          }
        ]
      },
      // forms
      {
        path: "/form",
        name: "form",
        redirect: "/form/basic-form",
        component: { render: h => h("router-view") },
        meta: { title: "表单页", icon: "form", permission: ["form"] },
        children: [
          {
            path: "basic-form",
            name: "BasicForm",
            component: () => import("@/views/form/BasicForm"),
            meta: { title: "基础表单", keepAlive: true, permission: ["form"] }
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
