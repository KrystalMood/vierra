<script setup>
import featuredItems from "@/data/collections/featuredItems";
</script>

<template>
  <section
    class="py-16 lg:py-24 bg-white flex flex-col justify-center items-center"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-16">
      <div class="text-center flex flex-col items-center gap-6">
        <h2 class="font-serif text-4xl md:text-5xl font-bold">
          Featured <em class="italic"> Collection </em>
        </h2>
        <p class="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto text-center">
          Our latest seasonal collection, inspired by the natural world and
          crafted with sustainable innovation.
        </p>
      </div>

      <div class="relative w-full">
        <div class="w-full aspect-[16/9] overflow-hidden">
          <img
            src="https://placehold.co/1280x720"
            alt="Featured collection main image"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 gap-4"
        >
          <h3 class="font-serif text-3xl text-white font-bold">
            Terra Collection
          </h3>
          <p class="text-white/90">Inspired by earth's natural textures</p>
          <button
            class="self-start px-6 py-3 bg-white text-[#1A1A1A] text-sm font-medium hover:bg-[#B89B74] hover:text-white transition-colors"
          >
            Explore Collection
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-8">
        <div
          v-for="(item, index) in featuredItems"
          :key="index"
          class="group cursor-pointer flex flex-col gap-1"
        >
          <div class="aspect-square overflow-hidden bg-gray-100">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <h3 class="font-serif text-lg font-medium">
            {{ item.name }}
          </h3>
          <p class="text-sm text-[#1A1A1A]/70">
            {{ item.material }}
          </p>
          <p class="font-medium">${{ item.price.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
