<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

const description = ref(`Mid-Level Software Engineer with 3+ years of experience building scalable web applications.
          Passionate about clean code, mentoring junior developers, and exploring new technologies.`)

const profileName = ref('Riz Michael Sim')
</script>


<template>
  <div class="min-h-[calc(100vh-80px)] bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
    <!-- Metallic background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-gray-600 to-black rounded-full blur-3xl">
      </div>
      <div
        class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-gray-700 to-black rounded-full blur-3xl">
      </div>
    </div>

    <!-- Content -->
    <div
      class="relative z-10 flex items-center justify-between px-6 sm:px-12 lg:px-20 py-12 lg:py-20 max-w-8xl mx-auto gap-12">
      <!-- Left section -->
      <div class="flex-1 max-w-lg">
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
          {{ profileName }}
        </h1>

        <p class="text-gray-400 text-base sm:text-lg leading-loose mb-10">
          {{ description }}
        </p>

        <!-- CTA Button -->
        <div class="py-3">
          <RouterLink to="/contact"
            class="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 mb-16 w-full sm:w-auto">
            Let's get started
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </RouterLink>
        </div>

        <!-- Worked with section -->
        <div class="py-2">
          <p class="text-gray-400 text-sm font-semibold mb-4">Worked with technologies like</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3">
            <div
              class="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-4 flex items-center justify-center h-24 border border-white/10">
              <span class="text-gray-400 text-sm font-medium">PHP LARAVEL API</span>
            </div>
            <div
              class="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-4 flex items-center justify-center h-24 border border-white/10">
              <span class="text-gray-400 text-sm font-medium">JAVA SPRINGBOOT</span>
            </div>
            <div
              class="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-4 flex items-center justify-center h-24 border border-white/10">
              <span class="text-gray-400 text-sm font-medium">JS FRAMEWORKS</span>
            </div>
            <div
              class="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-4 flex items-center justify-center h-24 border border-white/10">
              <span class="text-gray-400 text-sm font-medium">RUBY ON RAILS</span>
            </div>
            <div
              class="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-4 flex items-center justify-center h-24 border border-white/10">
              <span class="text-gray-400 text-sm font-medium">MULESOFT API</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right section - Profile Image -->
      <div class="hidden lg:flex flex-1 items-center justify-center">
        <div class="relative">
          <!-- Circular container with gradient border -->
          <div class="w-80 h-80 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 p-2">
            <div
              class="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center border-2 border-white/10">
              <!-- Profile image placeholder -->
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Profile"
                class="w-full h-full object-cover" />
            </div>
          </div>

          <!-- Decorative circles -->
          <div class="absolute -top-4 -right-4 w-32 h-32 border border-green-500/20 rounded-full"></div>
          <div class="absolute -bottom-8 -left-8 w-40 h-40 border border-blue-500/20 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth animations */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }
}

.profile-image {
  animation: float 3s ease-in-out infinite;
}
</style>
