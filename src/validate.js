import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/ar';
Vue.use(VeeValidate)

//提示信息本地化
VeeValidate.Validator.localize('zh_CN', {
    messages: zh_CN.messages,
    attributes: {
      name: '用户名',
      phone: '手机号',
      code: '验证码'
    }
})


// 自定义验证规则
VeeValidate.Validator.extend('mobile', {
    //value 就是v-model=phone拿到的输入
    validate: value => /^1\d{10}$/.test(value),
    //验证失败了调用getMessage得到提示文本
    getMessage: field => field + '必须是11位手机号码',
});