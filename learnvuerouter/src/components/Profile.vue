<template>
    <div>
        <h2>我是profile组件</h2>
        <div>{{$route.query}}</div>
        <div>{{$route.query.name}}</div>
        <button @click="btnClick">点击按钮</button>
    </div>
</template>

<script>
    export default {
        name:'Profile',
        methods: {
            btnClick() {
                console.log(this.$router);
                console.log(this.$route);
                
            }
        },
        created() {
            console.log('profile 被创建了');     
        },
        destroyed () {
            console.log('profile 被销毁了');
        },
    }
</script>

<style scoped>

</style>