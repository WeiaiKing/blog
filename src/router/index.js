import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import home from '@/components/home.vue'
import works from '@/components/works.vue'
import about from '@/components/about.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    component: index,
    children: [
        {
            path: 'home',
            component: home
        },
        {
            path: 'works',
            component: works
        },
        {
            path: 'about',
            component: about
        }
    ]
}]
const router = new VueRouter({
    routes
})
export default router