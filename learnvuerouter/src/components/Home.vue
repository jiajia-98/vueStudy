<template>
    <div>
        我是首页
        <hr>
        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/message">消息</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'Home',
        data() {
            return {
                path: '/home/news'
            }
        },
        created () {
            console.log('home被创建了');
        },
        destroyed() {
            console.log('home被销毁了');
        },
        //组件处于活跃状态
        activated() {
            this.$router.push(this.path)
        },
        //组件处于不活跃的状态
        deactivated() {
            
        },
        //组件导航守卫
        beforeRouteLeave (to, from, next) {
            this.path=this.$route.path
            next()
        }
    }
</script>

<style scoped>

</style>