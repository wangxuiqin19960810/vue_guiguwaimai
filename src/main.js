/* 
入口js
*/

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import './api'
//全局注册Header组件
Vue.component('Header',Header)
new Vue({
    components:{
        App
    },
    template:'<App/>',
    router//引入并注册路由器
}).$mount('#app')

/* new Vue({
    el:'#app',
    // components:{
    //     App
    // },
    // template:'<App/>'
    //函数接受一个组件返回一个组件标签
    // render:(h)=>h(App)
    // render:createElement=>createElement(App)
}) */
