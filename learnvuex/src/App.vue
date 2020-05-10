<template>
    <div id="app">
        <h2>这是APP组件</h2>
        <div>{{count}}</div>
        <button @click="count++">+</button>
        <button @click="count--">-</button>
        <hr>
        <h1>这是hello组件</h1>
        <hello-vuex :count1="count"></hello-vuex>

        <hr />
        <h1>这是vuex内容</h1>
        <div>{{$store.state.counter}}</div>
        <button>vuex+</button>
        <button>vuex-</button>

    </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
export default {
    name: "App",
    components:{
      HelloVuex
    },
    data() {
        return {
            count: 0
        };
    },
};
</script>

<style>
</style>
