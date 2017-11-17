// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Vuerouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.filter('getWeek', function(value) {
    switch (value) {
        case 0:
            return "周日";
        case 1:
            return "周一";
        case 2:
            return "周二";
        case 3:
            return "周三";
        case 4:
            return "周四";
        case 5:
            return "周五";
        case 6:
            return "周六";
        default:
            return "输入错误";
    }
})

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})