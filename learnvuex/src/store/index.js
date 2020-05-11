import Vue from 'vue'
import Vuex from 'vuex'
//安装插件
Vue.use(Vuex)

//创建module模块
const moduleA = {
    state:{
        name:'zhangsan'
    },
    mutations:{
        updateName(state,payLoad) {
            state.name=payLoad
        }
    },
    actions:{
        aUpdateName(context,payLoad) {
            setTimeout(() => {
                context.commit('updateName',payLoad)
            },1000)
        }
    },
    getters:{
        fullName(state) {
            return state.name + '1111'
        },
        fullName2(state,getters) {
            return getters.fullName + '222'
        },
        fullName3(state,getters,rootState) {
            return getters.fullName2 +rootState.info.name
        }
    }
}

//创建对象
const store = new Vuex.Store({
  state: {
    counter: 101,
    students: [{
        id: 101,
        name: 'jiajia',
        age: 18
      },
      {
        id: 102,
        name: 'why',
        age: 28
      },
      {
        id: 103,
        name: 'tony',
        age: 15
      },
      {
        id: 104,
        name: 'andy',
        age: 35
      },
    ],
    info: {
      name: 'jiajia',
      age: 16,
      height: 18
    }
  },
  mutations: {
    increament(state) {
      state.counter++
    },
    decreament(state) {
      state.counter--
    },
    incount(state, payLoad) {
      //第一种风格
      //state.counter += payLoad
      //第二种风格
      state.counter += payLoad.count
    },
    addstu(state, payLoad) {
      state.students.push(payLoad)
    },
    updateInfo(state) {
      // 修改原有属性是响应式的
      state.info.name = 'lilei'
      // 添加新的属性不是响应式的
      // state.info['address']='小店区'
      // 要想要添加属性是响应式 使用Vue.set方法
      // Vue.set(state.info,'address','小店区')
      // 要想删除也是相应式的 使用Vue.delete方法
      // Vue.delete(state.info,'age')
    }
  },
  actions: {
    aUpdateInfo(context, payLoad) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payLoad);
          resolve('异步操作完成返回data')
        }, 1000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter ** 2
    },
    more20stu(state, getters) {
      return state.students.filter(s => s.age > 20)
    },
    more20stulen(state, getters) {
      return getters.more20stu.length
    },
    moreagestu(state) {
      return (age) => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a:moduleA
  }
})

export default store
