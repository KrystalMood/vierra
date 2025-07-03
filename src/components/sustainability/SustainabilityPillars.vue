<script setup>
import sustainabilityPillars from "@/data/sustainability/sustainabilityPillars";
</script>

<template>
 <section class="py-24 lg:py-32 bg-white flex flex-col items-center justify-center gap-12">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center gap-12">
        <div class="text-center flex flex-col items-center justify-center gap-6">
          <h2 class="font-serif text-4xl md:text-5xl font-bold">Our Sustainability Pillars</h2>
          <p class="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto">
            Four foundational principles that guide every aspect of our business
          </p>
        </div>
        
        <div class="flex flex-col items-center justify-center gap-24">
          <div v-for="(pillar, index) in sustainabilityPillars" :key="pillar.id" 
               class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
               :class="{ 'lg:grid-flow-col-dense': index % 2 === 1 }">
            <div class="flex flex-col gap-6" :class="{ 'lg:col-start-2': index % 2 === 1 }">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-[#B89B74] rounded-full flex items-center justify-center">
                  <i class="material-icons w-6 h-6 text-white">{{ pillar.icon }}</i>
                </div>
                <h3 class="font-serif text-3xl md:text-4xl font-bold">{{ pillar.title }}</h3>
              </div>
              <p class="text-lg leading-relaxed text-[#1A1A1A]/80">{{ pillar.description }}</p>
              <ul class="flex flex-col gap-4">
                <li v-for="point in pillar.points" :key="point" class="flex items-start gap-3">
                  <i class="material-icons text-[#B89B74] flex-shrink-0">check</i>
                  <span class="text-[#1A1A1A]/70">{{ point }}</span>
                </li>
              </ul>
            </div>
            <div :class="{ 'lg:col-start-1 lg:row-start-1': index % 2 === 1 }">
              <img 
                :src="pillar.image" 
                :alt="pillar.title"
                class="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
