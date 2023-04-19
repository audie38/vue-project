import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../components/product/ProductList.vue";
import CartList from "../components/cart/CartList.vue";

const routes = [
  {
    path: "/",
    redirect: "/product",
  },
  {
    path: "/product",
    component: ProductList,
  },
  {
    path: "/cart",
    component: CartList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { left: 0, top: 0 };
  },
});

export default router;
