<template>
    <div>
        <h2>我是用户界面哈哈哈哈哈</h2>
        <h3>{{userId}}</h3>
    </div>
</template>

<script>
    export default {
        name:'User',
        data() {
            return {
            }
        },
        computed: {
            userId() {
                return this.$route.params.userId
            }
        },
    }
</script>

<style scoped>

</style>