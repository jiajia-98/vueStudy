<template>
    <div>
         <tab-bar>
          <tab-bar-item path="/home" activeColor="blue">
              <img slot="item-icon" src="../assets/img/profile.svg" alt="">
              <img slot="item-icon-active" src="../assets/img/home_active.svg" alt="">
              <div slot="item-text">首页</div>
          </tab-bar-item>
          <tab-bar-item path="/category">
              <img slot="item-icon" src="../assets/img/category.svg" alt="">
              <img slot="item-icon-active" src="../assets/img/category_active.svg" alt="">
              <div slot="item-text">分类</div>
          </tab-bar-item>
          <tab-bar-item path="/cart">
              <img slot="item-icon" src="../assets/img/cart.svg" alt="">
              <img slot="item-icon-active" src="../assets/img/cart_active.svg" alt="">
              <div slot="item-text">购物车</div>
          </tab-bar-item>
          <tab-bar-item path="/profile">
              <img slot="item-icon" src="../assets/img/profile.svg" alt="">
              <img slot="item-icon-active" src="../assets/img/profile_active.svg" alt="">
              <div slot="item-text">我的</div>
          </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
    export default {
        name:'MainTabBar',
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>