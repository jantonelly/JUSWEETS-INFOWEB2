<script setup lang="ts">
import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderSection />

  <main>
    <RouterView />
  </main>

  <FooterSection />
</template>

