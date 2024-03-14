//单例模式
// 单例模式：在使用这个模式时，单例对象整个系统需要保证只有一个存在
/**
 * 
 * 1.单例方法：
 * 1.自己实现
 * 2.vant中的toast和notify组件
*/
// 1.定义类
class SingleTon{
    // 2. 添加私有属性(static)
    static instance = null;
    // 添加静态方法
    static getInstance(){
        if(!this.instance){
            this.instance = new SingleTon();
        }
        return this.instance;
    }
}
const s1 = SingleTon.getInstance();
const s2 = SingleTon.getInstance();
//2. 单例的思想：
    //1.vue2的use方法
    //2.vue3中的use方法