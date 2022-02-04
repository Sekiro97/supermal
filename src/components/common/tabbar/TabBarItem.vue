<template>
  <div class="tabbar-item" @click="itemClick">
    <!-- 图片 -->
    <div v-if="isActive" class="tabbar-item-img tabbar-item-img-activated">
      <slot name="tabbar-item-img-activated"/>
    </div>
    <div v-else class="tabbar-item-img tabbar-item-img-normal">
      <slot name="tabbar-item-img-normal"/>
    </div>
    <!-- 文字 -->
    <div :style="isActivatedColor" class="tabbar-item-text-activated">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    activatedColor: {
      type: String,
      default : 'red'
    },
    path: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed:{
    isActive(){
      return this.path.indexOf(this.$route.path) != -1;
    },
    isActivatedColor(){
      return this.isActive ? {color:this.activatedColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item-img{
  margin-top: 3px
}
</style>
