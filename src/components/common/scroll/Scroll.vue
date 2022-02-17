<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  data(){
    return {
      scroll: null
    }
  },
  props:{
    probeType:{
      type:Number,
      default(){
        return 0
      }
    },
    pullUpLoad:{
      type: Boolean,
      default() {
        return false
      }
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
    })

    //监听滚动
    this.scroll.on('scroll', (position) => {
      this.$emit('onScroll',position)
    })

    this.scroll.on('pullingUp', () =>{
      this.$emit('onPullingUp')
    })
  },
  methods:{
    scrollTo(x,y,time = 500){
      this.scroll.scrollTo(x,y,time)
    },
    refreshScroll(){
      this.scroll.refreshScroll()
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>
