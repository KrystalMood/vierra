<script setup>
import { ref } from "vue";

const artisans = ref([
  {
    id: 1,
    name: "Mateo",
    location: "Peru",
    story:
      "High in the Andes, Mateo hand-looms ethically sourced alpaca fibers, preserving a tradition passed down through generations.",
    image: "https://placehold.co/400x400",
  },
  {
    id: 2,
    name: "Nguyen",
    location: "Vietnam",
    story:
      "Nguyen carves intricate wooden homewares from reclaimed teak, turning discarded timber into timeless art.",
    image: "https://placehold.co/400x400",
  },
  {
    id: 3,
    name: "Lucía",
    location: "Spain",
    story:
      "Lucía hand-stitches vegetable-tanned leather goods in her small Seville studio, blending heritage craft with modern flair.",
    image: "https://placehold.co/400x400",
  },
]);
</script>

<template>
  <section
    class="py-24 lg:py-32 bg-white flex flex-col items-center justify-center"
  >
    <div
      class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center gap-12"
    >
      <div class="text-center flex flex-col items-center justify-center gap-8">
        <h2 class="font-serif text-4xl md:text-5xl font-bold">
          Meet Our Artisans
        </h2>
        <p class="text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto">
          The talented hands and creative minds behind every Vierra's piece.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div
          v-for="artisan in artisans"
          :key="artisan.id"
          class="text-center flex flex-col items-center justify-center gap-6"
        >
          <div
            class="aspect-square overflow-hidden rounded-full mx-auto w-48 h-48"
          >
            <img
              :src="artisan.image"
              :alt="artisan.name"
              class="w-full h-full object-cover rounded-l"
            />
          </div>
          <div class="flex flex-col items-center justify-center gap-2">
            <h3 class="font-serif text-2xl font-semibold">
              {{ artisan.name }}
            </h3>
            <p class="text-[#B89B74] text-sm mb-3">{{ artisan.location }}</p>
            <p class="text-[#1A1A1A]/70 text-sm leading-relaxed">
              {{ artisan.story }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
