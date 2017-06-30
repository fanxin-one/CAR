// 类  链式语法---按步骤执行
class mongo {
    constructor(name) {
        // constructor 构造函数  必须的
        this.name = name;
    }
    aa() {
        console.log(name);
        return this;
    }
    bb() {
        console.log('mmmmmm')
    }
}
// 原生语法  原型链 prototype 

new mongo(123).aa();