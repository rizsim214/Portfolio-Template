<script setup lang="ts">
import PortfolioHeader from '@/components/common/Header/PortfolioHeader.vue'
import PortfolioFooter from '@/components/common/Footer/PortfolioFooter.vue'
</script>

<template>
  <div class="bg-black min-h-screen flex flex-col">
    <PortfolioHeader />
    <div class="flex-1">
      <RouterView />
    </div>
    <PortfolioFooter />
  </div>
</template>

<style scoped>
:deep(html, body) {
  background-color: #000;
}
</style>
