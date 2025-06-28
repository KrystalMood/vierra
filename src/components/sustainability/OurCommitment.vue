<script setup>
const items = [
  {
    id: 1,
    value: "2030",
    title: "Carbon Neutral",
    description: "Complete carbon neutrality across our entire supply chain",
  },
  {
    id: 2,
    value: "100%",
    title: "Sustainable Materials",
    description: "Only organic, recycled, or responsibly sourced materials",
  },
  {
    id: 3,
    value: "Zero",
    title: "Waste to Landfill",
    description: "Circular design principles in every product we create",
  },
];
</script>

<template>
  <section class="py-24 lg:py-32 flex flex-col items-center justify-center">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col gap-12">
      <div class="flex flex-col gap-6">
        <h2 class="font-serif text-4xl md:text-5xl font-bold">
          Our <em class="italic">Commitment</em>
        </h2>
        <p class="texl-xl md:text-2xl leading-relaxed text-[#1A1A1A]/80">
          We believe that beautiful fashion should never come at the expense of
          our planet or its people. Every choice we make is guided by our
          responsibility to create positive change.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="item in items"
          :key="item.id"
          class="text-center flex flex-col items-center gap-4"
        >
          <div class="text-4xl font-serif font-bold text-[#B89B74]">
            {{ item.value }}
          </div>
          <div class="text-lg font-medium text-[#1A1A1A]">
            {{ item.title }}
          </div>
          <div class="text-base text-[#1A1A1A]/80">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
