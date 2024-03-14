// 工厂模式
// 在js中，工厂模式的表现形式就是一个调用即可返回新对象的函数
function FoodFactory(name, price) {
    return {
        name,
        price
    }
}   
const f1 = FoodFactory('apple', 1.5);
const f2 = FoodFactory('banana', 2.0);
// 构造函数
function Food(name, price) {
    this.name = name;
    this.price = price;
}
const f3 = new Food('orange', 2.5);

// 1. vue3-createApp:将全局改变vue实例的行为，移到vue实例上
// 2. axios-create:基于自定义配置新建实例