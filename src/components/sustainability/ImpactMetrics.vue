<script setup>
import impactMetrics from "@/data/sustainability/impactMetrics";
</script>

<template>
  <section
    class="py-24 lg:py-32 bg-[#1A1A1A] flex flex-col items-center justify-center text-white"
  >
    <div
      class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center gap-16"
    >
      <div class="text-center flex flex-col items-center justify-center gap-6">
        <h2 class="font-serif text-4xl md:text-5xl font-bold">
          Measuring Our <em class="italic">Impact</em>
        </h2>
        <p class="text-lg text-white/80 max-w-2xl mx-auto">
          Transparency is key to accountability. Here's how we're making a
          difference.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-stretch">
        <div
          v-for="metric in impactMetrics"
          :key="metric.id"
          class="flex flex-col text-center gap-4 h-full"
        >
          <div class="font-serif text-4xl md:text-5xl font-bold text-[#B89B74]">
            {{ metric.value }}
          </div>
          <div class="text-sm uppercase tracking-wide text-white/60">
            {{ metric.label }}
          </div>
          <div class="flex-grow">
            <p class="text-sm text-white/80 line-clamp-3 overflow-hidden">{{ metric.description }}</p>
          </div>
          <div class="mt-auto pt-4">
            <div class="flex items-center justify-center gap-2">
              <div class="w-full bg-white/20 rounded-full h-2">
                <div
                  class="bg-[#B89B74] h-2 rounded-full transition-all duration-1000"
                  :style="{ width: `${metric.progress}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <button
          class="border border-white px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-white hover:text-[#1A1A1A] transition-colors"
        >
          Download Full Impact Report
        </button>
      </div>
    </div>
  </section>
</template>
