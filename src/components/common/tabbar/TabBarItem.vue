<template>
  <div class="tabbar-item" @click="itemClick">
    <!-- 图片 -->
    <div v-if="isActive" class="tabbar-item-img-activated">
      <slot name="tabbar-item-img-activated"/>
    </div>
    <div v-else class="tabbar-item-img-normal">
      <slot name="tabbar-item-img-normal"/>
    </div>
    <!-- 文字 -->
    <div :style="isActivatedColor" class="tabbar-item-text-activated">
      <slot name="tabbar-item-text"/>
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
    }
  },
  data(){
    return{

    }
  },
  computed:{
    isActive(){
      return true;
    },
    isActivatedColor(){
      return this.isActive ? {color:this.activatedColor}:{}
    }
  },
  methods:{
    itemClick(){
      console.log('testClick');
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
</style>
