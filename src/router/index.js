import VueRouter from "vue-router";
// import Login from "../views/Login";
import Checkout from "@/views/Checkout";
import HelloWorld from "@/components/HelloWorld";

const routes = [
  {
    path: "/checkout",
    component: Checkout,
    children: [
      { path: "/checkout/step-1-my-data", component: HelloWorld },
      // { path: "/checkout/step2/:key", component: Checkout },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next();
  } else {
    let token = localStorage.getItem("token");
    if (token == null || token == "") {
      // next("/login");
      // next({path: '/login'})
    } else {
      next();
    }
  }
});

export default router;
