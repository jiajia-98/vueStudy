<template>
    <div>
        <h3>这是hellovuex组件</h3>
        <h4>引用app中的count{{count1}}</h4>
        <h4>引用vuex中的counter{{this.$store.state.counter}}</h4>
    </div>
</template>

<script>
    export default {
        props:{
            count1:Number
        }
    }
</script>

<style scoped>

</style>