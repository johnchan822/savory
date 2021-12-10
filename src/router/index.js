import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/Front.vue'),
    children: [
      {
        name: 'index',
        path: '',
        component: () => import('../views/Front/Index.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/Front/Products.vue'),
      },
      {
        path: 'products/:select',
        component: () => import('../views/Front/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/Front/Product.vue'),
      },
      {
        path: 'aboutus',
        component: () => import('../views/Front/AboutUs.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/Front/Cart.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Notfound',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    children: [
      {
        name: 'Products',
        path: 'products',
        component: () => import('../views/Admin/Products.vue'),
      },
      {
        name: 'Orders',
        path: 'orders',
        component: () => import('../views/Admin/Orders.vue'),
      },
      {
        name: 'Coupons',
        path: 'coupons',
        component: () => import('../views/Admin/Coupons.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),

  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode: 'history',
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
