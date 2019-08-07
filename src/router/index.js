/* 
    创建体格路由器（买一个路由器回家）

*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
//vue声明使用vue-router插件
Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    //配置路由
    routes
})