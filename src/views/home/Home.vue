<template>
  <div id="home">
    <!-- 顶部导航条 -->
    <home-nav-bar class="home-nav-bar"/>
    <!-- 滚动组件 -->
    <scroll class="home-content" ref="scroll" :probe-type="3" @onScroll="onScroll">
      <!-- 轮播图 -->
      <home-swiper class="home-swiper" :banners="banners"/>
      <!-- 推荐 -->
      <home-recommends-show :recommends="recommends"/>
      <!-- 本周流行 -->
      <home-feature-view/>
      <!-- tabcontrol -->
      <tab-control class="home-tab-control" :titles="['流行','最新','精品']" @tabClick="tabClick"/>
      <!-- 展示商品信息 -->
      <goods-list class="home-goodslist" :goods="showGoods"/>
    </scroll>

    <!-- 在组件中监听点击事件不能使用@click 要使用@click.native -->
    <transition name="back-top-animation">
      <back-top class="home-back-top" @click.native="backTopClick" v-show="backTopShow"/>
    </transition>
  </div>
</template>

<script>
  import HomeNavBar from "views/home/childComponents/HomeNavBar"
  import HomeSwiper from "views/home/childComponents/HomeSwiper" //轮播图
  import HomeRecommendsShow from "views/home/childComponents/HomeRecommendsShow" //推荐
  import HomeFeatureView from "views/home/childComponents/HomeFeatureView" //特性
  import TabControl from "components/content/tabControl/TabControl"
  import GoodsList from "components/content/goodsList/GoodsList" //商品列表
  import Scroll from "components/common/scroll/Scroll" //滚动组件
  import BackTop from "components/content/backTop/BackTop"
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
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return{
        banners: [],
        recommends: [],
        goods: {
          'pop':{page: 0, list:[]},
          'new':{page: 0, list:[]},
          'sell':{page: 0, list:[]}
        },
        currentType: 'pop',
        backTopShow: false
      }
    },
    created() {
      //请求轮播图和推荐相关的数据
      this.getHomeMultidata()
      //获取商品数据
      this.getHomeGoods('pop') //流行商品数据
      this.getHomeGoods('new') //最新商品数据
      this.getHomeGoods('sell') //精品商品数据
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods:{
      tabClick(index){
        switch (index){
          case 0: //潮流
            this.currentType = 'pop'
            break;
          case 1: //最新
            this.currentType = 'new'
            break;
          case 2: //精品
            this.currentType = 'sell'
            break;
        }
      },
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          console.log(res)
          this.goods[type].list.push(...res.data.list) //全部加入到list数组中（在原有数组上新加元素）
          this.goods[type].page += 1
        })
      },
      backTopClick(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
      onScroll(position){
        let position_y = Math.abs(position.y)
        if(position_y > 1000){
          this.backTopShow = true
        }
        else{
          this.backTopShow = false
        }
      }
    }
  }
</script>

<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav-bar{
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 5;
}
.home-tab-control{
  position: sticky;
  top: 0px;
  z-index: 1;
}
.home-content{
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.back-top-animation-enter{
  opacity: 0;
}
.back-top-animation-enter-active{
  transition: opacity 0.5s;
}
.back-top-animation-leave-to{
  opacity: 0;
}
.back-top-animation-leave-active{
  transition: opacity 0.5s;
}
</style>

