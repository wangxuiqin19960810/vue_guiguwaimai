/* 
包含n个间接更新状态数据的方法
*/
import {
    reqAddress,
    reqCategorys,
    reqShops
} from '../api'

import {
    RECEIVE_ARRDESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-types'

export default {
    /* 
        根据经纬度获取位置详情的异步action
    */
    async getAddress({ commit, state }) {
        const { latitude, longitude } = state
        //调用接口请求函数发送请求
        const result = await reqAddress(longitude, latitude)
        //成功之后提交mutations
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ARRDESS, address)
        }
    },

    /* 
    2、获取食品分类列表
    */
    async getCategorys({ commit },callback) {
        //调用接口请求函数发送请求
        const result = await reqCategorys()
        console.log(result)
        //成功之后提交mutations
        if (result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, categorys)
        }
        //commit执行之后执行callback
         typeof callback === 'function' && callback()
    },
    /* 
    3、根据经纬度获取商铺列表
    */
    async getShops({ commit, state }) {
        const { latitude, longitude } = state
        //调用接口请求函数发送请求
        const result = await reqShops(longitude, { latitude, longitude })
        //成功之后提交mutations
        if (result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, shops)
        }
    }
}