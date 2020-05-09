<template>
    <div>
        <h2>我是cpn组件的标题</h2>
        <p>我是cpn组件的内容</p>
        <button>我是cpn组件的按钮</button>
        <div>{{name}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name:'andy'
            }
        }
    }
</script>

<style scoped>

</style>