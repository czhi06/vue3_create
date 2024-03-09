import mitt from 'mitt';
// 调用mitt 得到emitter，emitter
const emitter = mitt();

// 绑定事件
emitter.on('my-event', (data: any) => {
    console.log('收到事件', data);
})
// 触发事件
emitter.emit('my-event', { message: 'Hello, world!' });

emitter.all.clear(); // 清空



export default emitter;