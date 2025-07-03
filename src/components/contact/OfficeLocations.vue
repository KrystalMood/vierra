<script setup>
import locations from '@/data/contact/locations';
</script>

<template>
  <section class="py-24 lg:py-32 flex items-center justify-center bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full">
      <div class="flex flex-col items-center gap-16">
        <div class="text-center flex flex-col gap-4 max-w-3xl">
          <h2 class="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Our Locations
          </h2>
          <p class="text-lg text-[#1A1A1A]/70">
            Visit us at our studios or partner showrooms around the world.
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          <div
            v-for="location in locations"
            :key="location.id"
            class="text-center p-6 border border-[#D1D5DB] rounded-lg hover:border-[#B89B74] transition-colors flex flex-col gap-4"
          >
            <img
              :src="location.image"
              :alt="location.city"
              class="w-full h-48 object-cover rounded-lg"
            />
            <div class="flex flex-col gap-2">
              <h3 class="font-serif text-xl font-semibold">
                {{ location.city }}
              </h3>
              <p class="text-sm text-[#1A1A1A]/60">{{ location.type }}</p>
            </div>
            <div class="text-sm text-[#1A1A1A]/70 flex flex-col gap-1">
              <p>{{ location.address }}</p>
              <p>{{ location.hours }}</p>
              <p>{{ location.phone }}</p>
            </div>
            <button
              class="text-[#B89B74] text-sm font-medium hover:underline mt-auto pt-2"
            >
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
