import Vue from 'vue'
import Router from 'vue-router'
// Page content
import Page1 from '@/components/Page1'
import Home from '@/components/Home'
import Auth from '@/components/Auth.vue';
import AuthSuccess from '@/components/AuthSuccess.vue';

// Fallback page
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Auth', component: Auth },
    { path: '/auth', component: Auth },
    { path: '/success', component: AuthSuccess },
    { path: '/page-1', name: 'Page 1', component: Page1 },
    { path: '**', name: 'PageNotFound', component: PageNotFound }
  ]
})