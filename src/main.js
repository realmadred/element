// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select,Row,Switch,DatePicker,Progress } from 'element-ui';
import App from './App'

Vue.config.productionTip = false;

// Vue.use(ElementUI);
Vue.use(Progress);
Vue.use(DatePicker);
Vue.use(Switch);
Vue.use(Row);
Vue.use(Button) ;
Vue.use(Select);
/* eslint-disabl;e no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
