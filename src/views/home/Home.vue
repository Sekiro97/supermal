<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :datas="banners"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import HomeSwiper from "components/content/home/homeSwiper/HomeSwiper"//轮播图
  import {getHomeMultidata} from "network/home"
  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper
    },
    data(){
      return{
        banners: [],
        recommend: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.banner = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
.home-navbar{
  color: white;
  background-color: var(--color-tint);
}

</style>
