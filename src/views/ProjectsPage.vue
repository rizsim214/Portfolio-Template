<script setup lang="ts"></script>

<template>
  <div class="min-h-[calc(100vh-64px)] bg-gradient-to-br from-black via-gray-900 to-black">
    <div class="max-w-6xl mx-auto px-6 sm:px-12 py-20">
      <!-- Page title -->
      <div class="pb-12">
        <h1 class="text-5xl sm:text-6xl font-bold text-white pb-4">My Projects</h1>
        <div class="h-1 w-20 bg-gradient-to-r from-green-500 to-green-600 rounded"></div>
      </div>

      <!-- Projects grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Project 1 -->
        <div
          class="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
          <div
            class="h-48 bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center border-b border-white/10">
            <div class="text-6xl">🚀</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2">E-Commerce Platform</h3>
            <p class="text-gray-400 text-sm mb-4">
              A full-stack e-commerce platform with real-time inventory management,
              payment processing, and analytics dashboard.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="inline-block bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">Vue.js</span>
              <span class="inline-block bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">Node.js</span>
              <span
                class="inline-block bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full">PostgreSQL</span>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div
          class="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
          <div
            class="h-48 bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center border-b border-white/10">
            <div class="text-6xl">📊</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2">Analytics Dashboard</h3>
            <p class="text-gray-400 text-sm mb-4">
              Interactive data visualization dashboard with real-time metrics,
              custom reports, and exportable insights.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="inline-block bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">React</span>
              <span class="inline-block bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">Python</span>
              <span class="inline-block bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full">MongoDB</span>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div
          class="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
          <div
            class="h-48 bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center border-b border-white/10">
            <div class="text-6xl">🔐</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2">Task Management App</h3>
            <p class="text-gray-400 text-sm mb-4">
              Collaborative task management application with real-time updates,
              user authentication, and team workspace support.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="inline-block bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">Vue 3</span>
              <span class="inline-block bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">Firebase</span>
              <span class="inline-block bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full">Tailwind</span>
            </div>
          </div>
        </div>

        <!-- Project 4 -->
        <div
          class="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
          <div
            class="h-48 bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center border-b border-white/10">
            <div class="text-6xl">💬</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2">Chat Application</h3>
            <p class="text-gray-400 text-sm mb-4">
              Real-time messaging platform with WebSocket support,
              message history, and typing indicators.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="inline-block bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">React</span>
              <span class="inline-block bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">Socket.io</span>
              <span class="inline-block bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full">Express</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
