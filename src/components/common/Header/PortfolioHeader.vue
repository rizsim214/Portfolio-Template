<script setup lang="ts">
import { RouterLink } from 'vue-router'

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Get In Touch', to: '/contact' },
]
</script>

<template>
  <nav class="sticky top-0 z-50 bg-linear-to-b from-black/80 to-black/60 backdrop-blur-md border-b border-white/5">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 h-20">
      <div class="flex h-full items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center shrink-0">
          <span class="text-2xl font-bold text-white leading-tight">My Portfolio</span>
        </div>

        <!-- Navigation links -->
        <div class="hidden sm:flex items-center gap-4 flex-1 justify-center">
          <RouterLink v-for="item in navigation" :key="item.to" :to="item.to"
            class="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium leading-6"
            active-class="text-white border-b-2 border-green-500 pb-1">
            {{ item.name }}
          </RouterLink>
        </div>

        <!-- Social links -->
        <div class="flex items-center gap-x-4 shrink-0 ml-auto">
          <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" />
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
