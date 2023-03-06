import VueRouter from "vue-router";
import { ROUTE } from "@/models/constant";
import Checkout from "@/views/Checkout";
import NotFound from "@/views/NotFound";
import MyData from "@/components/MyData";
import Payment from "@/components/Payment";
import OrderConfirm from "@/components/OrderConfirm";

const routes = [
  {
    path: "/checkout",
    component: Checkout,
    children: [
      {
        name: ROUTE.MY_DATA,
        path: "/checkout/step-1-my-data",
        component: MyData,
      },
      {
        name: ROUTE.PAYMENT,
        path: "/checkout/step-2-payment",
        component: Payment,
      },
      {
        name: ROUTE.ORDER_CONFIRM,
        path: "/checkout/step-3-order-confirmation",
        component: OrderConfirm,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const activeIndex = router.app.$store.getters["step/activeIndex"];
  const toIndex = routes[0].children.findIndex(
    (child) => child.name == to.name
  );
  if (activeIndex != toIndex) {
    localStorage.setItem("token", "");
  }

  let token = localStorage.getItem("token");
  const isAuthenticated = token != null && token != "";
  router.app.$store
    .dispatch("loadConfigI18n")
    .then(function () {
      if (to.name !== ROUTE.MY_DATA && !isAuthenticated) {
        next({ name: ROUTE.MY_DATA });
      } else {
        next();
      }
    })
    .catch(() => console.log("getI18nData-error"));
});

export default router;
