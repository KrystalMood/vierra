<script setup>
import takeActions from "@/data/takeActions";
</script>

<template>
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col gap-8">
      <div class="flex flex-col gap-8">
        <h2 class="font-serif text-4xl md:text-5xl font-bold">
          Join the <em class="italic">Movement</em>
        </h2>
        <p class="text-xl leading-relaxed text-[#1A1A1A]/80">
          Sustainability is a collective effort. Here's how you can be part of
          the solution.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="action in takeActions"
          :key="action.id"
          class="text-center p-6 border border-[#D1D5DB] rounded-lg hover:border-[#B89B74] transition-colors"
        >
          <div class="flex flex-col gap-4">
            <i class="material-icons w-12 h-12 text-[#B89B74] mx-auto mb-4">
              {{ action.icon }}
            </i>
            <h3 class="font-serif text-xl font-semibold mb-3">
              {{ action.title }}
            </h3>
            <p class="text-sm text-[#1A1A1A]/70 mb-4">
              {{ action.description }}
            </p>
            <button class="text-[#B89B74] text-sm font-medium hover:underline">
              {{ action.cta }}
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          class="bg-[#B89B74] text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-[#A08A6D] transition-colors"
        >
          Shop Sustainably
        </button>
        <button
          class="border border-[#1A1A1A] px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-[#1A1A1A] hover:text-white transition-colors"
        >
          Subscribe to Updates
        </button>
      </div>
    </div>
  </section>
</template>
