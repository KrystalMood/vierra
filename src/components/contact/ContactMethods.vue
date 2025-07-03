<script setup>
import contactMethods from "@/data/contact/contactMethods";
</script>

<template>
  <section class="py-24 lg:py-32 flex flex-col items-center justify-center">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-16 justify-center items-center">
      <div class="text-center flex flex-col gap-6">
        <h2 class="font-serif text-4xl md:text-5xl font-bold">Get in Touch</h2>
        <p class="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto">
          Choose the way that works best for you. We're committed to responding
          within 24 hours.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        <div
          v-for="method in contactMethods"
          :key="method.id"
          class="text-center p-8 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col gap-6 h-full"
        >
          <div
            class="w-16 h-16 bg-[#B89B74] rounded-full flex items-center justify-center mx-auto"
          >
            <i class="material-icons text-white">{{ method.icon }}</i>
          </div>
          <h3 class="font-serif text-2xl font-semibold">
            {{ method.title }}
          </h3>
          <div class="flex-grow flex flex-col gap-6">
            <p class="text-[#1A1A1A]/70 leading-relaxed">
              {{ method.description }}
            </p>
            <div class="flex flex-col gap-2">
              <p class="font-medium">{{ method.primary }}</p>
              <p v-if="method.secondary" class="text-sm text-[#1A1A1A]/60">
                {{ method.secondary }}
              </p>
            </div>
          </div>
          <button
            class="mt-auto border border-[#B89B74] text-[#B89B74] px-6 py-2 text-sm font-medium tracking-wide uppercase hover:bg-[#B89B74] hover:text-white transition-colors"
          >
            {{ method.cta }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
