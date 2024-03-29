/* 
封装的能发ajax请求的函数, 向外暴露的本质是axios
1. 解决post请求携带参数的问题: (axios默认是json), 需要转换成urlencode格式
2. 让请求成功的结果不再是response, 而是response.data的值
3. 统一处理所有请求的异常错误
*/
import axios from 'axios'
import qs from 'qs'//查询字符串解析和字符串化库，增加了一些安全性

//添加请求拦截器(// 在真正发请求前执行一些事情)
// //1. 让post请求的请求体格式为urlencoded格式 a=1&b2
axios.interceptors.request.use(config=>{
    // 得到请求方式和请求体数据
    const {method,data} = config
    if(method.toUpperCase()==='POST'&& data instanceof object){
        //处理post请求, 将data对象转换成query参数格式字符串
        config.data = qs.stringify(data)
    }
    return config

})


//添加响应拦截器(在接收响应之前做一些事情)
// 在请求返回之后且在我们指定的请求响应回调函数之前
/* 
功能1: 让请求成功的结果不再是response, 而是response.data的值
功能2: 统一处理所有请求的异常错误
*/
axios.interceptors.response.use(response=>{
    //返回的结果就会交给我们指定的请求响应的回调
    return response.data
},error=>{
    console.log(error)
    // alert(error.message)
    //返回一个pending状态的promise, 中断promise链
    return new Promise(()=>{})
})

export default axios