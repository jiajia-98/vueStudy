<template>
    <div id="app">
        <h2>这是APP组件</h2>
        <!-- <div>{{count}}</div>
        <button @click="count++">+</button>
        <button @click="count--">-</button> -->
        

        <hr>
        <h1>这是hello组件</h1>
        <hello-vuex :count1="count"></hello-vuex>

        <hr />
        <h1>这是vuex内容</h1>
        <div>{{$store.state.counter}}</div>
        <h2>{{$store.state.info}}</h2>
        <div>------------modules相关-------------</div>
        <h2>{{$store.state.a.name}}</h2>
        <h2>{{$store.getters.fullName}}</h2>
        <h2>{{$store.getters.fullName2}}</h2>
        <h2>{{$store.getters.fullName3}}</h2>



        <button @click="updatename">同步修改</button>
        <button @click="aupdatename">异步修改</button>

        <div>------------mutations相关-------------</div>
        <button @click="handleAdd">vuex+</button>
        <button @click="handleSub">vuex-</button>
        <button @click="addCount(5)">+5</button>
        <button @click="addCount(8)">+8</button>
        <button @click="addStudent">添加一个学生</button>
        <button @click="updateProp">修改属性同步</button>
        <button @click="aupdateProp">修改属性异步</button>


        <div>------------getters相关-------------</div>
        <h2>{{$store.getters.powerCounter}}</h2>
        <h2>{{$store.getters.more20stu}}</h2>
        <h2>{{$store.getters.more20stulen}}</h2>
        <h2>{{$store.getters.moreagestu(10)}}</h2>
        <h2>{{$store.getters.moreagestu(30)}}</h2>

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
    methods: {
        handleAdd() {
            this.$store.commit('increament')
        },
        handleSub(){
            this.$store.commit('decreament')
        },
        addCount(count) {
            //第一种提交风格 count就是传入的count
            // this.$store.commit('incount',count)
            //第二种提交风格 count是一个对象包含type和count
            this.$store.commit({
                type:'incount',
                count
            })  
        },
        addStudent() {
            let stu = {id:108, name:'dlka',age:42}
            this.$store.commit('addstu',stu)
        },
        updateProp() {
            this.$store.commit('updateInfo')
        },
        aupdateProp() {
            this.$store.dispatch('aUpdateInfo','这是组件传入的payload信息参数').then(res => {
                console.log(res);
                
            })
        },
        updatename() {
            this.$store.commit('updateName','laoli')
        },
        aupdatename() {
            this.$store.dispatch('aUpdateName','dlakjsdfkaj')
        }
    },
};
</script>

<style>
</style>
