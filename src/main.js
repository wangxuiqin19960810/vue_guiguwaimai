/* 
入口js
*/

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import './api'
import store from './store'
import Star from './components/Star/Star.vue'

//全局配置以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false 

//全局注册Header组件
Vue.component('Header',Header)
//全局注册星星组件
Vue.component('Star',Star)

new Vue({
    components:{
        App
    },
    template:'<App/>',
    router,//引入并注册路由器
    store
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
