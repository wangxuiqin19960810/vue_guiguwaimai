<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="address.name || '正在定位中...'">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com' + c.image_url" />
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <Shop />
  </section>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import Shop from "../../components/Shop/Shop.vue";
import { mapState } from "vuex";
import "swiper/dist/css/swiper.css";
import chunk from "lodash/chunk";

// 创建swiper对象的时机?   必须在列表页面显示之后
/* 
三种解决方案
  1.watch + nextTick()

*/

export default {
  components: {
    Shop
  },
  async mounted() {
    this.$store.dispatch("getShops");
    //dispatch调用返回的promise在状态更新且界面更新之后才成功
    await this.$store.dispatch("getCategorys");
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });

    // 将函数也是数据,也可用来传递，函数是一等公民
    /* this.$store.dispatch("getCategorys",()=>{//categorys数据数组发生了变化
      this.$nextTick(()=>{
        new Swiper(".swiper-container", {
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      })
    }); */

    /* setTimeout(() => {
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }, 1000); */
  },
  watch: {
    //更新状态数据===》调用监视回调 ===》 异步更新界面
    /* categorys() {//categorys发生了改变，数组数据变了
      this.$nextTick(()=>{
        new Swiper(".swiper-container", {
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      })
    } */
  },
  computed: {
    ...mapState(["address", "categorys"]),

    /* 
      根据一维数组生成二维数组
    */
    categorysArr() {
      return chunk(this.categorys, 8);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

.msite { // 首页
  width: 100%;

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }
}
</style>
