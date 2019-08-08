/* 
包含n个请求接口函数的模块
函数的返回值是promise对象

*/
import ajax from './ajax'

const BASE = '/api'
/* eslint-disable no-console */
/* 
1、根据经纬度获取位置详情
*/
export const reqAddress = (longitude,latitude) => ajax({
    method:'GET',
    url:BASE + `/position/${latitude},${longitude}`
})

/* 
2、获取食品分类列表
*/

export const reqCategorys = () => ajax.get(BASE + '/index_category')

/* 
3、根据经纬度获取商铺列表
*/
export const reqShops = ({latitude,longitude})=>ajax({
    method:'GET',
    url:BASE + '/shops',
    params:{
        latitude,
        longitude
    }
})

