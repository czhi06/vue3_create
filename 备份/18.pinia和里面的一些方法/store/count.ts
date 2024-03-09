import  { defineStore} from 'pinia'
export const useStore = defineStore('count',{
    // 真正储存数据的地方
    state(){
        return {
            sum:8,
            name:'张三',
            age:18
        }
    },
    getters:{
        bigSum: (state) => state.sum * 10,
    }
}) 