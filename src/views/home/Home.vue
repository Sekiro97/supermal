<template>
  <div id="home">
    <!-- 顶部导航条 -->
    <home-nav-bar class="home-nav-bar"/>
    <tab-control v-show="isTabControlFixed" ref="tabControl" class="tab-control" :titles="['流行','最新','精品']" @tabClick="tabClick"/>

    <!-- 滚动组件 -->
    <scroll class="home-content" ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @onScroll="onScroll"
            @onPullingUp="loadMoreData">

      <!-- 轮播图 -->
      <home-swiper class="home-swiper" :banners="banners" @imageLoaded="imageLoaded"/>
      <!-- 推荐 -->
      <home-recommends-show :recommends="recommends" @imageLoaded="imageLoaded"/>
      <!-- 本周流行 -->
      <home-feature-view/>
      <!-- tabcontrol -->
      <tab-control style="margin-top: 20px" ref="scrollTabControl" :titles="['流行','最新','精品']" @tabClick="tabClick"/>
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

  //网络请求
  import {
    getHomeMultidata,
    getHomeGoods
  } from "network/home"

  //工具
  import {
    debounce //防抖函数
  } from "common/utils"

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
        backTopShow: false,
        tabControlOffsetTop: 0, //tabControl 的 OffsetTop 属性
        isTabControlFixed: false
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
    mounted() {
      //图片加载完成的事件监听
      //使用 事件总线 监听事件
      const refresh = debounce(this.$refs.scroll.refresh,50) //生成一个新的函数
      this.$bus.$on('itemImageLoad',() => {
        refresh()
      })
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods:{
      imageLoaded(){
        //轮播图、推荐中的图片加载完毕，计算scroll中tabControl组件的offsetTop属性 （距离顶部的距离）
         console.log(this.$refs.scrollTabControl.$el.offsetTop);
        this.tabControlOffsetTop = this.$refs.scrollTabControl.$el.offsetTop
      },
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

        //同步滚动区域的tabControl以及顶部tabControl的选中状态
        this.$refs.tabControl.setCurrentIndex(index)
        this.$refs.scrollTabControl.setCurrentIndex(index)
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
          this.goods[type].list.push(...res.data.list) //全部加入到list数组中（在原有数组上新加元素）
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        })
      },
      backTopClick(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
      onScroll(position){
        console.log(position);
        let position_y = Math.abs(position.y)

        //判断backtop是否显示
        this.backTopShow = position_y > 1000

        //决定tabControl是否吸顶（position：fixed）
        if(position_y >= this.tabControlOffsetTop){
          this.isTabControlFixed = true
        }
        else{
          this.isTabControlFixed = false
        }
      },
      loadMoreData(){
        //上拉加载更多数据
        this.getHomeGoods(this.currentType)
      }
    }
  }
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.home-nav-bar{
  z-index: 5;
}
.home-tab-control{
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  margin: 0px;
}
.home-content{
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
  z-index: 1;
}
.tab-control{
  position: relative;
  z-index: 5;
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

