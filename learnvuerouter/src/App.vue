<template>
  <div id="app">
    <h1>这是APP组件</h1>
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="/user/+userId" tag="button" replace>用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'djj',age:33,height:1.66}}" tag="button" replace>档案</router-link> -->


    <button @click="homeClick">home</button>
    <button @click="aboutClick">about</button>
    <button @click="userClick">user</button>
    <button @click="profileClick">profile</button>
    <keep-alive exclude="Profile,Home">
      <router-view/>
    </keep-alive>
    
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'jia'
    }
  },
  methods: {
    homeClick() {
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    userClick() {
      this.$router.push('/user/'+this.userId)
    },
    profileClick() {
      this.$router.push({
        path:'/profile',
        query:{
          name:'lei',
          age:18,
          height:1.88
        }
      })
    }
  },
}
</script>

<style>
.router-link-active{
  color:#f00
}
.active{
  color:#f00
}
</style>
