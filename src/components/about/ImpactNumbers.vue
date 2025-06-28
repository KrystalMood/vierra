<script setup>
import { ref } from 'vue';

const impactStats = ref([
  {
    id: 1,
    number: "50+",
    label: "Artisan Partners",
    description: "Cooperatives across 12 countries",
  },
  {
    id: 2,
    number: "2,500+",
    label: "Lives Impacted",
    description: "Artisans and their families",
  },
  {
    id: 3,
    number: "95%",
    label: "Sustainable Materials",
    description: "Organic, recycled, or upcycled",
  },
  {
    id: 4,
    number: "0",
    label: "Waste to Landfill",
    description: "Zero-waste production model",
  },
]);
</script>

<template>
  <section class="py-24 lg:py-32 bg-[#1A1A1A] text-white flex flex-col items-center justify-center">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center gap-16">
      <div class="text-center mb-16 flex flex-col items-center justify-center gap-6">
        <h2 class="font-serif text-4xl md:text-5xl font-bold">
          Our <em class="italic">Impact</em>
        </h2>
        <p class="text-lg text-white/80 max-w-2xl mx-auto">
          Numbers that reflect our commitment to positive change in the fashion
          industry.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div v-for="stat in impactStats" :key="stat.id" class="text-center">
          <div
            class="font-serif text-4xl md:text-5xl font-bold text-[#B89B74] mb-2"
          >
            {{ stat.number }}
          </div>
          <div class="text-sm uppercase tracking-wide text-white/60 mb-2">
            {{ stat.label }}
          </div>
          <p class="text-sm text-white/80">{{ stat.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
