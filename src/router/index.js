import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/home'
import List from '@/view/list'
import Detail from '@/view/detail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'list',
            path: '/list',
            component: List
        },
        {
            name: 'list/',
            path: '/list/:id',
            component: Detail
        }
    ]
})
