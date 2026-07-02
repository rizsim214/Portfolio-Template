<script setup lang="ts"></script>

<template>
  <div class="min-h-[calc(100vh-64px)] bg-linear-to-br from-black via-gray-900 to-black">
    <div class="max-w-4xl mx-auto px-6 sm:px-12 py-20">
      <!-- Page title -->
      <div class="pb-12">
        <h1 class="text-5xl sm:text-6xl font-bold text-white mb-4">About Me</h1>
        <div class="h-1 w-20 bg-linear-to-r from-green-500 to-green-600 rounded"></div>
      </div>

      <!-- About content -->
      <div class="space-y-8">
        <div class="bg-white/5 border border-white/10 rounded-lg p-8">
          <h2 class="text-2xl font-bold text-white mb-4">Software Engineer</h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            With 3+ years of professional experience in software development, I have honed my skills
            in building scalable, maintainable web applications using modern technologies and best practices.
          </p>
          <p class="text-gray-300 leading-relaxed">
            I'm passionate about mentoring junior developers, contributing to open-source projects,
            and staying updated with industry trends to deliver cutting-edge solutions.
          </p>
        </div>

        <!-- Skills section -->
        <div>
          <h2 class="text-2xl font-bold text-white pb-6 pt-4">Core Skills</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h3 class="text-lg font-semibold text-green-400 mb-3">Frontend Development</h3>
              <p class="text-gray-400 text-sm">Vue 3, React, Javascript/TypeScript, Tailwind CSS, Vite</p>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h3 class="text-lg font-semibold text-green-400 mb-3">Backend Development</h3>
              <p class="text-gray-400 text-sm">PHP, Java, MySQL, PostgreSQL, Relational Databases, Pest PHP, MUnit</p>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h3 class="text-lg font-semibold text-green-400 mb-3">DevOps & Cloud</h3>
              <p class="text-gray-400 text-sm">Docker Containerization, Render, Supabase, Vercel</p>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h3 class="text-lg font-semibold text-green-400 mb-3">Tools & Practices</h3>
              <p class="text-gray-400 text-sm">Git, Github, GitLab, Code Review, Agile Methodologies, RESTful API</p>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h3 class="text-lg font-semibold text-green-400 mb-3">AI-Assisted Development</h3>
              <p class="text-gray-400 text-sm">Codex-first development workflows, AI-assisted implementation, debugging,
                refactoring, and code generation</p>
            </div>
          </div>
        </div>

        <!-- Experience timeline -->
        <div>
          <h2 class="text-2xl font-bold text-white pb-6 pt-4">Professional Experience</h2>
          <div class="space-y-8">
            <div class="border-l-4 border-green-500 pl-6">
              <h3 class="text-xl font-bold text-white">Software Engineer</h3>
              <div class="flex flex-col pb-1">
                <small class="text-green-400 font-medium text-md">SeedTech Philippines Inc.</small>
                <p class="text-gray-500 text-sm italic">2022 — Present</p>
              </div>
              <p class="text-gray-300 leading-relaxed">
                Worked across legacy systems and greenfield applications, improving maintainability, performance, and
                delivery reliability. Built new web applications from the ground up, contributed to scalable feature
                development, and strengthened software quality through unit tests and integration tests.
              </p>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>
