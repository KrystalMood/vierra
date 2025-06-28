<script setup>
import certifications from "@/data/certifications";
</script>

<template>
  <section
    class="py-24 lg:py-32 bg-white flex flex-col items-center justify-center gap-16"
  >
    <div
      class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center gap-6"
    >
      <h2 class="font-serif text-4xl md:text-5xl font-bold">
        Our Certifications
      </h2>
      <p class="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto text-center">
        Third-party verified standards that validate our commitment to
        sustainability
      </p>
    </div>

    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center"
    >
      <div
        v-for="cert in certifications"
        :key="cert.id"
        class="text-center group flex flex-col items-center gap-4"
      >
        <div
          class="w-20 h-20 bg-[#F8F5F2] rounded-full flex items-center justify-center mx-auto group-hover:bg-[#B89B74] transition-colors"
        >
          <i
            class="material-icons text-4xl leading-none flex items-center justify-center text-[#1A1A1A] group-hover:text-white transition-colors"
            >{{ cert.icon }}</i
          >
        </div>
        <div class="flex flex-col gap-1">
          <h4 class="text-sm font-semibold leading-tight">{{ cert.name }}</h4>
          <p class="text-xs text-[#1A1A1A]/60 leading-snug">
            {{ cert.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
