<template>
  <div id="home">
    <!-- 顶部导航条 -->
    <home-nav-bar/>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"/>
    <!-- 推荐 -->
    <home-recommends-show :recommends="recommends"/>
    <div>aaa</div>
  </div>
</template>

<script>
  import HomeNavBar from "components/content/home/HomeNavBar"
  import HomeSwiper from "components/content/home/HomeSwiper"//轮播图
  import HomeRecommendsShow from "components/content/home/HomeRecommendsShow";

  import {getHomeMultidata} from "network/home"
  export default {
    name: "Home",
    components:{
      HomeNavBar,
      HomeSwiper,
      HomeRecommendsShow
    },
    data(){
      return{
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

