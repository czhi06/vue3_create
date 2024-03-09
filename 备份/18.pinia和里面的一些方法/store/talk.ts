import  { defineStore} from 'pinia'
import { reactive } from 'vue'
// export const useTalkStore = defineStore('talk',{
//     // 真正储存数据的地方
//     state(){
//         return {
//             talkList: localStorage.getItem('talkList' as string) || []
//         }
//     }
// }) 

export const useTalkStore = defineStore('talk',()=>{
    const talkList = reactive(JSON.parse(localStorage.getItem('talkList') as string) || [])
}) 