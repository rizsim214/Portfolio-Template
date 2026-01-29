<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)

const handleSubmit = () => {
  // Here you would typically send the form data to a server
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    formData.value = { name: '', email: '', message: '' }
  }, 3000)
}
</script>

<template>
  <div class="min-h-[calc(100vh-64px)] bg-linear-to-br from-black via-gray-900 to-black">
    <div class="max-w-4xl mx-auto px-6 sm:px-12 py-20">
      <!-- Page title -->
      <div class="pb-8">
        <h1 class="text-5xl sm:text-6xl font-bold text-white mb-4">Get In Touch</h1>
        <div class="h-1 w-20 bg-linear-to-r from-green-500 to-green-600 rounded"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact info -->
        <div>
          <h2 class="text-2xl font-bold text-white pb-4">Let's Connect</h2>
          <div class="space-y-6">
            <div class="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-green-400 mb-2">Email</h3>
              <a href="mailto:sim.rizmichael@gmail.com" class="text-gray-300 hover:text-white transition-colors">
                sim.rizmichael@gmail.com
              </a>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-green-400 mb-2">Location</h3>
              <p class="text-gray-300">Cebu City, Cebu, Philippines</p>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-green-400 mb-2">Social Links</h3>
              <div class="flex gap-x-2">
                <a href="#" class="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <div>
          <form @submit.prevent="handleSubmit" class="bg-white/5 border border-white/10 rounded-lg p-8 space-y-6">
            <div v-if="submitted" class="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
              Thanks for your message! I'll get back to you soon.
            </div>

            <div>
              <label for="name" class="block text-sm font-medium text-white mb-2">Name</label>
              <input id="name" v-model="formData.name" type="text" required
                class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                placeholder="Your name" />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-white mb-2">Email</label>
              <input id="email" v-model="formData.email" type="email" required
                class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                placeholder="your@email.com" />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-white mb-2">Message</label>
              <textarea id="message" v-model="formData.message" required rows="5"
                class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
                placeholder="Your message..."></textarea>
            </div>

            <button type="submit"
              class="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
