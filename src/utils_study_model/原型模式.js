// 原型模式
// 原型模式是创建型模式的一种，其特点在于通过复制一个已经存在的实例来返回新的实例，而不是新建实例。
const food = {
    name:'apple',
    eat(){
        console.log(`${this.name} is delicious`);
    }
}
const f1 = Object.create(food);