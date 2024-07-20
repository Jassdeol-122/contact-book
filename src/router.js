import { createRouter, createWebHistory } from 'vue-router';
import HomeContact from './views/HomeContact.vue';
import ViewContact from './views/ViewContact.vue';
import EditContact from './views/EditContact.vue';

const routes = [
  { path: '/', component: HomeContact },
  { path: '/contact/:id', name: 'ViewContact', component: ViewContact },
  { path: '/add', name: 'AddContact', component: EditContact },
  { path: '/edit/:id', name: 'EditContact', component: EditContact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
