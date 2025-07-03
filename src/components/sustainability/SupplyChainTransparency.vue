<script setup>
import supplyChainSteps from "@/data/sustainability/supplyChainSteps";
</script>

<template>
  <section class="py-24 lg:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        <div class="flex flex-col gap-8">
          <h2 class="font-serif text-4xl md:text-5xl font-bold">
            Complete Supply Chain <em class="italic">Transparency</em>
          </h2>
          <p class="text-lg leading-relaxed text-[#1A1A1A]/80 mb-8">
            We believe you have the right to know exactly where and how your
            accessories are made. Our blockchain-powered tracking system allows
            you to trace every product from raw material to your doorstep.
          </p>

          <div class="flex flex-col gap-6">
            <div
              v-for="step in supplyChainSteps"
              :key="step.id"
              class="flex items-center gap-4"
            >
              <div
                class="w-8 h-8 bg-[#B89B74] rounded-full flex items-center justify-center text-white"
              >
                <span class="text-white text-sm font-bold">{{
                  step.step
                }}</span>
              </div>
              <div class="flex flex-col gap-1">
                <h4 class="font-semibold">{{ step.title }}</h4>
                <p class="text-sm text-[#1A1A1A]/70">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://placehold.co/500x600"
            alt="Supply chain transparency"
            class="w-full h-[500px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>
