import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageNotFound from '@/pages/PageNotFound'

Vue.use(Router)

function loadPage (page) {
  return () => import(/* webpackChunkName: "page-[request]" */ `@/pages/Page${page}Setup.vue`)
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/account',
      name: 'account',
      component: loadPage('Account')
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: loadPage('AppointmentReminder')
    },
    {
      path: '/recall',
      name: 'recall',
      component: loadPage('Recall')
    },
    {
      path: '/reactivation',
      name: 'reactivation',
      component: loadPage('Reactivation')
    },
    {
      path: '/scheduling',
      name: 'scheduling',
      component: loadPage('Scheduling')
    },
    {
      path: '/survey',
      name: 'survey',
      component: loadPage('Survey')
    },
    {
      path: '*',
      name: 'notFound',
      component: PageNotFound
    }
  ],
  mode: 'history'
})
export default router
