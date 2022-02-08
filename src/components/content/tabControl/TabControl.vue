<template>
  <div :style="backgroundColorStyle" class="tab-control">
    <div @click="itemClick(index)" class="tab-control-item" v-for="(item,index) in titles" :class="{isActive:currentIndex == index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type: Array,
      default(){
        return []
      }
    },
    backgroundColor:{
      type:String,
      default(){
        return 'white'
      }
    }
  },
  computed:{
    backgroundColorStyle(){
      return {backgroundColor: this.backgroundColor}
    }
  },
  data(){
    return{
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  margin-top: 10px;
}
.tab-control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
}
.isActive{
  color: var(--color-high-text);
}
.isActive span{
  padding: 5px;
  border-bottom: 3px var(--color-tint) solid;
}
</style>
