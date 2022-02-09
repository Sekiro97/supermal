<template>
  <div class="goods-list-item">
    <img :src="good.show.img"/>
    <div class="good-info">
      <p>{{good.title}}</p>
      <span class="price">{{finalPrice}}</span>
      <span class="collect">{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    good:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    finalPrice(){
      return '￥' + this.good.price
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  padding-bottom: 45px;
  width: 48%;
}
.goods-list-item img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.good-info{
  font-size: 13px;
  text-align: center;
}
.good-info p {
  overflow: hidden; /*文字超出范围后不显示*/
  text-overflow: ellipsis; /*规定文字超出范围后以何种字符显示未被显示出来的文字*/
  white-space: nowrap; /*规定在p段落中，文字不换行*/
  margin-bottom: 3px;
}
.good-info .price {
  color: var(--color-high-text);
  margin-right: 25px;
}
.good-info .collect {
  position: relative; /*绝对定位的元素以最近的定位祖先元素为参照物 static 元素会忽略任何 top、bottom、left 或 right 声明*/
}
.good-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 15px;
  height: 15px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}

</style>
