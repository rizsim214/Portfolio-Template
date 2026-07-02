<script setup lang="ts">
import beirsHomeImage from '@/assets/images/beirs-home.png'
import stbcPortalHomeImage from '@/assets/images/stbc-portal-home.png'
</script>

<template>
  <div class="min-h-[calc(100vh-64px)] bg-linear-to-br from-black via-gray-900 to-black">
    <div class="max-w-6xl mx-auto px-6 sm:px-12 py-20">
      <!-- Page title -->
      <div class="pb-12">
        <h1 class="text-5xl sm:text-6xl font-bold text-white pb-4">My Personal Projects</h1>
        <div class="h-1 w-20 bg-linear-to-br from-green-500 to-green-600 rounded"></div>
      </div>

      <!-- Projects grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Project 1 -->
        <a href="https://beirs-ims-ui-v1.onrender.com"
          class="group block bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 focus:outline-none focus:ring-2 focus:ring-green-500/70">
          <div
            class="h-48 bg-linear-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center border-b border-white/10">
            <img :src="beirsHomeImage" alt="BEIRS project preview"
              class="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white pb-2">BEIRS - Barangay E-Blotter and Incident Reporting System </h3>
            <p class="text-gray-400 text-sm pb-4">
              A full-stack barangay scope electronic blotter system with real-time in-app & SMS notification,role based
              authentication
              and authorization, barangay certificate request processing, pdf preview generation and analytic dashboard
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="inline-block bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">Vue.js</span>
              <span class="inline-block bg-blue-500/20 text-red-400 text-xs px-3 py-1 rounded-full">Laravel API</span>
              <span
                class="inline-block bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full">PostgreSQL</span>
            </div>
          </div>
        </a>

        <!-- Project 2 -->
        <a href="https://stbc-portal-ui.onrender.com"
          class="group block bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 focus:outline-none focus:ring-2 focus:ring-green-500/70">
          <div
            class="h-48 bg-linear-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center border-b border-white/10">
            <img :src="stbcPortalHomeImage" alt="St. Benedict's Clinic Portal preview"
              class="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white pb-2">St.Benedict's Clinic Portal</h3>
            <p class="text-gray-400 text-sm pb-4">
              A full-stack clinic portal built with Laravel and Vue.js for appointment booking and patient access.
              First-time users create an account while setting their initial appointment, then can book clinic visits,
              download lab results online, work within role-based access control, and receive real-time notifications
              powered by Laravel Reverb.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="inline-block bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">Vue.js</span>
              <span class="inline-block bg-blue-500/20 text-red-400 text-xs px-3 py-1 rounded-full">Laravel</span>
              <span class="inline-block bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full">MySQL</span>
              <span class="inline-block bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">Laravel
                Reverb</span>
            </div>
          </div>
        </a>

      </div>
    </div>
  </div>
</template>
