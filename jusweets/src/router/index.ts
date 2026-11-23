import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CardapioView from '@/views/CardapioView.vue'
import CarrinhoView from '@/views/CarrinhoView.vue'
import ContatoView from '@/views/ContatoView.vue'
import PromocoesView from '@/views/PromocoesView.vue'
import UnidadesView from '@/views/UnidadesView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/carrinho',
    name: 'Carrinho',
    component: CarrinhoView
  },
  {
    path: '/cardapio',
    name: 'Cardapio',
    component: CardapioView
  },
  {
    path: '/contato',
    name: 'Contato',
    component: ContatoView
  },
  {
    path: '/promocoes',
    name: 'Promocoes',
    component: PromocoesView
  },
  {
    path: '/unidades',
    name: 'Unidades',
    component: UnidadesView
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

export default router
