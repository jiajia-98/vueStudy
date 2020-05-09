<template>
    <div>
        <div class="title">{{message}}</div>
        <button>按钮</button>
        <div>{{name}}</div>
        <Cpn/>
    </div>
</template>

<script>
import Cpn from './Cpn.vue'
    export default {
        components:{
            Cpn
        },
        data() {
            return {
                message: 'hello jiajia',
                name: 'djj'
            }
        },
        methods: {
            btnClick() {
                console.log(11);
            }
        }
    }
</script>

<style scoped>
.title{
    color:#fff
}
</style>