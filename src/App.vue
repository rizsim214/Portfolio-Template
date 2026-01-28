<script setup lang="ts">
import PortfolioHeader from '@/components/common/Header/PortfolioHeader.vue'
import PortfolioFooter from '@/components/common/Footer/PortfolioFooter.vue'
</script>

<template>
  <PortfolioHeader />
  <div class="wrapper">
    <RouterView />
  </div>
  <PortfolioFooter />
</template>

<style scoped>
.wrapper {
  height: 100vh;
  width: auto;
}
</style>
