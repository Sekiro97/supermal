<template>
  <div id="home">
    <!-- 顶部导航条 -->
    <home-nav-bar class="home-nav-bar"/>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"/>
    <!-- 推荐 -->
    <home-recommends-show :recommends="recommends"/>
    <!-- 本周流行 -->
    <home-feature-view/>
    <tab-control class="tab-control" :titles="['标题1','标题2','标题3']"/>

    <ul>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li><li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li><li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li><li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li><li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li><li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
    </ul>
  </div>
</template>

<script>
  import HomeNavBar from "components/content/home/HomeNavBar"
  import HomeSwiper from "components/content/home/HomeSwiper" //轮播图
  import HomeRecommendsShow from "components/content/home/HomeRecommendsShow" //推荐
  import HomeFeatureView from "components/content/home/HomeFeatureView" //特性
  import TabControl from "components/content/tabControl/TabControl";

  import {
    getHomeMultidata,
    getHomeGoods
  } from "network/home"

  export default {
    name: "Home",
    components:{
      HomeNavBar,
      HomeSwiper,
      HomeRecommendsShow,
      HomeFeatureView,
      TabControl
    },
    data(){
      return{
        banners: [],
        recommends: [],
        goods: {
          'pop':{page: 0, list:[]},
          'new':{page: 0, list:[]},
          'sell':{page: 0, list:[]}
        }
      }
    },
    created() {
      //请求轮播图和推荐相关的数据
      this.getHomeMultidata()
      //获取商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          //console.log(res);
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.home-nav-bar{
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 1;
}
.tab-control{
  position: sticky;
  top: 44px;
}
</style>

