<template>
  <div class="home-swiper">
    <!-- 轮播图组件 -->
<!--    <swiper>-->
<!--      <swiper-item v-for="item in banners">-->
<!--        <a :href="item.link">-->
<!--          <img :src="item.image" />-->
<!--        </a>-->
<!--      </swiper-item>-->
<!--    </swiper>-->

    <swiper :options="swiperOptions" ref="mySwiper">
      <swiper-slide v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" width="100%" @load="finishLoad"/>
        </a>
      </swiper-slide>

      <!-- 分页组件 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
//import {Swiper, SwiperItem} from "components/common/swiper"
import {Swiper, SwiperSlide} from "vue-awesome-swiper"
export default {
  name: "HomeSwiper",
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    // Swiper,
    // SwiperItem
    Swiper,
    SwiperSlide
  },
  data(){
    return {
      swiperOptions:{
        loop:true,
        speed:1000,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: false,
          dynamicBullets:false
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        effect: 'slide'
      }
    }
  },
  methods:{
    finishLoad(){
      this.$emit('imageLoaded')
    }
  }
}
</script>

<style scoped>

</style>
