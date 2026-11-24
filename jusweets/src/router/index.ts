import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CardapioView from '@/views/CardapioView.vue'
import CarrinhoView from '@/views/CarrinhoView.vue'
import ContatoView from '@/views/ContatoView.vue'
import PromocoesView from '@/views/PromocoesView.vue'
import UnidadesView from '@/views/UnidadesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: CarrinhoView
    },
    {
      path: '/cardapio',
      name: 'cardapio',
      component: CardapioView
    },
    {
      path: '/contato',
      name: 'contato',
      component: ContatoView
    },
    {
      path: '/promocoes',
      name: 'promocoes',
      component: PromocoesView
    },
    {
      path: '/unidades',
      name: 'unidades',
      component: UnidadesView
    }
  ],
})

export default router
