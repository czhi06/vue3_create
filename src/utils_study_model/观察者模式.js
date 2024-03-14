// 观察者模式
//在对象之间定义一个一对多的依赖，当一个对象状态改变的时候，所有依赖的对象都会自动收到通知
window.addEventListener('load',()=>{console.log('load触发1')})
window.addEventListener('load',()=>{console.log('load触发2')})
window.addEventListener('load',()=>{console.log('load触发3')})
export default {
    data(){
        return {
            message:'hello world'
        }
    },
    watch:{
        message(newVal,oldVal){
            console.log('message变化了')
        }
    }
}