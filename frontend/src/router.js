import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './components/shop-view/views/HomeView.vue';
import RegistrationPage from './components/RegistrationPage.vue';
import UserPage from './components/UserPage.vue';
import SettingsPage from '@/components/SettingsPage.vue';
import LookBookView from '@/components/shop-view/views/LookBookView.vue';
import ShopView from '@/components/shop-view/views/ShopView.vue';
import NewsView from '@/components/shop-view/views/NewsView.vue';
import ContactView from '@/components/shop-view/views/ContactView.vue';
import TermsView from '@/components/shop-view/views/TermsView.vue';

// Importiere die Season-Komponente
import SeasonView from '@/components/shop-view/views/SeasonView.vue';
import ShopItemView from '@/components/shop-view/views/ShopItemView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/register', component: RegistrationPage },
  { path: '/user', component: UserPage },
  { path: '/settings', component: SettingsPage },
  { path: '/look-book', component: LookBookView },
  { path: '/shop', component: ShopView },
  { path: '/news', component: NewsView },
  { path: '/contact', component: ContactView },
  { path: '/terms', component: TermsView },

  // Füge die dynamische Route für Seasons hinzu
  {
    path: '/season/:seasonNumber', // Der Parameter `seasonNumber` wird hier erwartet
    name: 'SeasonView',
    component: SeasonView,
    props: true, // Der Parameter wird als Prop an die Komponente übergeben
  },
  {
    path: '/item/:id', // <<< :id als dynamischer Part!
    name: 'ShopItemView',
    component: ShopItemView,
    props: true, // Übergibt automatisch die id als Prop
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
