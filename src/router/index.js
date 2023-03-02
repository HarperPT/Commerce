import VueRouter from "vue-router";
import Checkout from "@/views/Checkout";
import MyData from "@/components/MyData";
import Payment from "@/components/Payment";
import OrderConfirm from "@/components/OrderConfirm";

const routes = [
  {
    path: "/checkout",
    component: Checkout,
    children: [
      { path: "/checkout/step-1-my-data", component: MyData },
      { path: "/checkout/step-2-payment", component: Payment },
      { path: "/checkout/step-3-order-confirmation", component: OrderConfirm },
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
