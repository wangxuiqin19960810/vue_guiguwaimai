/* 
vuex最核心的管理对象
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
//声明使用vue的vuex插件
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})