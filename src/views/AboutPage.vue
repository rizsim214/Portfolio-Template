<script setup lang="ts"></script>

<template>
  <div class="min-h-[calc(100vh-64px)] bg-gradient-to-br from-black via-gray-900 to-black">
    <div class="max-w-4xl mx-auto px-6 sm:px-12 py-20">
      <!-- Page title -->
      <div class="pb-12">
        <h1 class="text-5xl sm:text-6xl font-bold text-white mb-4">About Me</h1>
        <div class="h-1 w-20 bg-gradient-to-r from-green-500 to-green-600 rounded"></div>
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
              <p class="text-gray-400 text-sm">Vue.js, React, TypeScript, Tailwind CSS, Vite</p>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h3 class="text-lg font-semibold text-green-400 mb-3">Backend Development</h3>
              <p class="text-gray-400 text-sm">Ruby, PHP, Java, MySQL, PostgreSQL, MongoDB</p>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h3 class="text-lg font-semibold text-green-400 mb-3">DevOps & Cloud</h3>
              <p class="text-gray-400 text-sm">Docker, Render, Supabase, AWS, CI/CD Pipelines</p>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h3 class="text-lg font-semibold text-green-400 mb-3">Tools & Practices</h3>
              <p class="text-gray-400 text-sm">Git, , Code Review, Agile Methodologies, RESTful API</p>
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
                Architecting and scaling enterprise-grade applications, driving performance optimizations that enhanced
                system stability and improved client delivery timelines.
              </p>
            </div>

            <div class="border-l-4 border-green-500 pl-6 pt-3">
              <h3 class="text-xl font-bold text-white">Software Engineer</h3>
              <div class="flex flex-col pb-1">
                <small class="text-green-400 font-medium text-md">NexSeed Inc.</small>
                <p class="text-gray-500 text-sm italic">2022</p>
              </div>
              <p class="text-gray-300 leading-relaxed">
                Accelerated the delivery of responsive web features and collaborated in an agile environment to maintain
                high code quality standards across multiple client projects.
              </p>
            </div>
          </div>
        </div>

        <div class="pt-8">
          <h2 class="text-2xl font-bold text-white pb-6">Freelance & Side Initiatives</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div class="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-lg font-bold text-white">Full-Stack Web Developer</h3>
                <span class="text-xs font-semibold bg-green-500/10 text-green-400 px-2 py-1 rounded">Freelance</span>
              </div>
              <p class="text-gray-400 text-sm mb-3">Independent Contractor | 2023 - Present</p>
              <ul class="text-gray-300 text-sm space-y-2 list-disc pl-4">
                <li>Delivered end-to-end web solutions for SMEs, focusing on custom E-commerce and CMS integrations.
                </li>
                <li>Translated complex business requirements into scalable technical architectures using modern stacks.
                </li>
              </ul>
            </div>

            <div class="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-lg font-bold text-white">Lead Developer & Consultant</h3>
                <span class="text-xs font-semibold bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded">LGU
                  Project</span>
              </div>
              <p class="text-gray-400 text-sm mb-3">Barangay Information Office | 2023</p>
              <ul class="text-gray-300 text-sm space-y-2 list-disc pl-4">
                <li>
                  <strong>Digitized manual record-keeping</strong> by developing a centralized Blotter Management
                  System, reducing case retrieval time from hours to seconds.
                </li>
                <li>
                  Implemented <strong>Role-Based Access Control (RBAC)</strong> to ensure data privacy and security for
                  sensitive community legal records.
                </li>
                <li>
                  Designed a user-friendly reporting dashboard that provided Barangay officials with <strong>real-time
                    analytics</strong> on neighborhood incident trends.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
