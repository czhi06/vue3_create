// 创建一个路由器，并且暴露出去
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import News from '@/pages/News.vue';
import Detail from '@/pages/Detail.vue';
// 创建路由器
const router = createRouter({
    history:createWebHistory(), // 使用 HTML5 历史模式 路由器的工作模式
    routes:[ // 一个个点路由
        {
            name: '主页',
            path: '/home',
            component: Home
        },
        {
            name: '新闻',
            path: '/news',
            component: News,
            children:[
               {
                path:'detail/:id/:title/:content',
                component:Detail,
                // 第一种写法：将路由收到的所有parmas参数作为props传给路由组件
                // props:true,
                // 第二种写法：函数写法，可以自己决定将什么作为props给路由组件
                props($route){
                    return $route.query;
                }
               }
            ] // 子路由
        },
        {
            name: '关于',
            path: '/about',
            component: About
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})
export default router; // 导出路由器

// history 模式
//优点：URL更加美观不带有#，更接近传统的网站URL
// 缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会有404错误

// hash模式
// 优点：兼容性更好，因为不需要服务器处理路径
// 缺点：URL带有# 不太美观，且在SEO优化方面相对较差。