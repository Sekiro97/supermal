<template>
  <div>
    <tab-bar>
      <tab-bar-item path="">
        <img slot="tabbar-item-img-normal" src="@/assets/img/tabbar/home.svg" width="24" height="24"/>
        <img slot="tabbar-item-img-activated" src="@/assets/img/tabbar/home_active.svg" width="24" height="24"/>
        <span slot="tabbar-item-text">首页</span>
      </tab-bar-item>

      <tab-bar-item/>
      <tab-bar-item/>
      <tab-bar-item/>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "@/components/common/tabbar/TabBar"
  import TabBarItem from "@/components/common/tabbar/TabBarItem"
  export default {
    name: "Home",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>


</style>
