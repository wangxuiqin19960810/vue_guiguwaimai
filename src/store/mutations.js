/* 
包含n个直接更新状态数据的方法
*/
import {
    RECEIVE_ARRDESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-types'

export default {
    [RECEIVE_ARRDESS](state,address){
        state.address = address
    },
    [RECEIVE_CATEGORYS](state,categorys){
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state,shops){
        state.shops = shops
    }
}