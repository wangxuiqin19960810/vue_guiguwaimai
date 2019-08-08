<template>
  <div>
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.showFooter===true"/>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
      components:{
          FooterGuide
      },
    mounted(){
      this.$store.dispatch('getAddress')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
