import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2d2cdd37 = () => interopDefault(import('..\\resources\\nuxt\\pages\\recover.vue' /* webpackChunkName: "pages_recover" */))
const _973242c2 = () => interopDefault(import('..\\resources\\nuxt\\pages\\signin.vue' /* webpackChunkName: "pages_signin" */))
const _6e0595d6 = () => interopDefault(import('..\\resources\\nuxt\\pages\\signup.vue' /* webpackChunkName: "pages_signup" */))
const _867aef54 = () => interopDefault(import('..\\resources\\nuxt\\pages\\success.vue' /* webpackChunkName: "pages_success" */))
const _6bea0465 = () => interopDefault(import('..\\resources\\nuxt\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/recover",
    component: _2d2cdd37,
    name: "recover"
  }, {
    path: "/signin",
    component: _973242c2,
    name: "signin"
  }, {
    path: "/signup",
    component: _6e0595d6,
    name: "signup"
  }, {
    path: "/success",
    component: _867aef54,
    name: "success"
  }, {
    path: "/",
    component: _6bea0465,
    name: "index"
  }, {
    path: "/__laravel_nuxt__",
    component: _6bea0465,
    name: "__laravel_nuxt__"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
