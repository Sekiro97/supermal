<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" title="首页">
        <img slot="tabbar-item-img-normal" src="~assets/img/tabbar/home.svg" width="24" height="24">
        <img slot="tabbar-item-img-activated" src="~assets/img/tabbar/home_active.svg" width="24" height="24">
      </tab-bar-item>
      <tab-bar-item path="/category" title="分类">
        <img slot="tabbar-item-img-normal" src="~assets/img/tabbar/category.svg" width="24" height="24">
        <img slot="tabbar-item-img-activated" src="~assets/img/tabbar/category_active.svg" width="24" height="24">
      </tab-bar-item>
      <tab-bar-item path="/shopcart" title="购物车">
        <img slot="tabbar-item-img-normal" src="~assets/img/tabbar/shopcart.svg" width="24" height="24">
        <img slot="tabbar-item-img-activated" src="~assets/img/tabbar/shopcart_active.svg" width="24" height="24">
      </tab-bar-item>
      <tab-bar-item path="/profile" title="我的">
        <img slot="tabbar-item-img-normal" src="~assets/img/tabbar/profile.svg" width="24" height="24">
        <img slot="tabbar-item-img-activated" src="~assets/img/tabbar/profile_active.svg" width="24" height="24">
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBarItem from "components/common/tabbar/TabBarItem"
import TabBar from "components/common/tabbar/TabBar"
export default {
  name: "MainTabBar",
  components: {
    TabBarItem,
    TabBar
  }
}
</script>

<style scoped>

</style>
