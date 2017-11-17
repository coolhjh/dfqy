import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import assessCenter from '@/components/assess_center/assessCenter'
import schedule from '@/components/assess_center/schedule'
import assess_list from '@/components/assess_center/assess_list'
Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueResource)


export default new Router({
    routes: [{
            path: '/',
            name: 'assessCenter',
            component: assessCenter,
        },
        {
            path: '/schedule',
            name: 'schedule',
            component: schedule,
        },
        {
            path: '/assess_list',
            name: 'assess_list',
            component: assess_list,
        }
    ]
})