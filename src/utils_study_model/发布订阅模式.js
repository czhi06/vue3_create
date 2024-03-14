// 发布订阅模式
//发布订阅模式和观察者模式类似，区别是：一个有中间商(发布订阅模式)一个没有中间商(观察者模式)
class Emitter {
    #hanlders = {
        // 事件名 = [callback,callback]
    }
    $on(event,callback){
        if(!this.#hanlders[event]){
            this.#hanlders[event] = [];
        }
        this.#hanlders[event].push(callback);
    }
    /**
     * 触发事件：
     * 2.1接收不定长参数
     * 2.2循环触发事件
     */
    // 2.1接收不定长参数
    $emit(event,...args){
        // 2.2 循环触发事件
        const funcs = this.#hanlders[event] || [];
        funcs.forEach(func=>{
            func(...args);
        })
    }
    $off(event){
        this.#hanlders[event] = [];
    }
    /**
     * 
     * @param {调用$on注册时间} event 
     * @param {事件内调用$off} callback 
     */
    $once(event,callback){
        // 4.1调用$on注册事件
        this.$on(event,(...args)=>{
         callback(...args)
         // 4.2事件内调用$off
         this.$off(event)   
        })
    }
}