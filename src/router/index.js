import Vue from "vue";
import Router from "vue-router";
import Meta from 'vue-meta'
Vue.use(Meta)
import { Toast } from 'mint-ui';


import store from '../store'
window.store = store
Vue.use(Router);

const router = new Router({

  mode:'history',
    routes: [
    {
      path: "/",
      component: () => import("@/pages/index/index.vue")
    },
    {
      path: "/create",
      component: () => import("@/pages/create/index.vue"),
      meta:{requiresAuth:true}

    },
    {
      path: "/edit/:blogId",
      component: () => import("@/pages/edit/index.vue"),
      meta:{requiresAuth:true}
    },
    {
      path: "/login",
      component: () => import("@/pages/login/index.vue")
    },
    {
      path: "/regesit",
      component: () => import("@/pages/regesit/index.vue")
    },
    {
      path: "/user/:userId",
      component: () => import("@/pages/user/index.vue")
    },
    {
      path: "/my",
      component: () => import("@/pages/my/index.vue"),
      meta:{requiresAuth:true}

    },
    {
      path: "/detail/:blogId",
      component: () => import("@/pages/detail/index.vue")
    },
  ]
});

router.beforeEach((to,from,next)=>{
  if (to.matched.some(record=> record.meta.requiresAuth)){
    store.dispatch('checkLogin').then(isLogin=>{
      if(!isLogin){
        Toast({
          message: "需要登录才能操作",
          position: 'top',
          duration: 2000
        });
        next({
          path:"/login",
          query:{redirect:to.fullPath}

        })
      }else{
        next()
      }
    }
    )
  }else{
    next()
  }
})

export default router
