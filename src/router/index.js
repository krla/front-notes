import Vue from 'vue'
import VueRouter from 'vue-router'
import Notes from '../views/Notes.vue'
import Editor from '../views/NoteEditor.vue'
import Auth from '../views/Auth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/notes',
    name: 'Notes',
    component: Notes,
    beforeEnter (to, from, next) {
      if (!localStorage.getItem("token")) { //eslint-disable-line
        next({
          name: 'Auth'
        })
      } else {
        next()
      }
    }
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor,
    beforeEnter (to, from, next) {
      if (!localStorage.getItem("token")) { //eslint-disable-line
        next({
          name: 'Auth'
        })
      } else {
        next()
      }
    }
  },
  {
    path: '/',
    name: 'Auth',
    component: Auth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
