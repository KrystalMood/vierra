<script setup>
import sustainableMaterials from "@/data/sustainableMaterials";
</script>

<template>
  <section
    class="py-24 lg:py-32 bg-white flex flex-col items-center justify-center gap-16 px-4"
  >
    <div
      class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center gap-6"
    >
      <h2 class="font-serif text-4xl md:text-5xl font-bold">
        Sustainable Materials
      </h2>
      <p class="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto">
        Every material we use is carefully selected for its environmental impact
        and ethical sourcing
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
        v-for="material in sustainableMaterials"
        :key="material.id"
        class="text-center group flex flex-col gap-6"
      >
        <div class="aspect-square overflow-hidden rounded-lg bg-gray-100">
          <img
            :src="material.image"
            :alt="material.name"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="font-serif text-xl font-semibold">{{ material.name }}</h3>
          <p class="text-sm text-[#1A1A1A]/60 mb-3">{{ material.source }}</p>
          <p class="text-sm text-[#1A1A1A]/70 leading-relaxed">
            {{ material.benefit }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
