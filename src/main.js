import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Viser from "viser-vue";
import { Layout } from "ant-design-vue";
import { Menu } from "ant-design-vue";
import { Icon } from "ant-design-vue";
import { Card } from "ant-design-vue";
import { List } from "ant-design-vue";
import { Avatar } from "ant-design-vue";
import { Dropdown } from "ant-design-vue";
import { Progress } from "ant-design-vue";
import { Form } from "ant-design-vue";
import { Button } from "ant-design-vue";
import { Input } from "ant-design-vue";
import { InputNumber } from "ant-design-vue";
import { DatePicker } from "ant-design-vue";
import { TimePicker } from "ant-design-vue";
import { Radio } from "ant-design-vue";
import { Select } from "ant-design-vue";
import { Row } from "ant-design-vue";
import { Col } from "ant-design-vue";
import { Tabs } from "ant-design-vue";

Vue.use(Tabs);
Vue.use(Col);
Vue.use(Row);
Vue.use(Select);
Vue.use(Radio);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Button);
Vue.use(Form);
Vue.use(Progress);
Vue.use(Dropdown);
Vue.use(Avatar);
Vue.use(List);
Vue.use(Card);
Vue.use(Icon);
Vue.use(Menu, Menu.SubMenu);
Vue.use(Layout, Layout.Header, Layout.Content, Layout.Footer, Layout.Sider);
Vue.use(Viser);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
