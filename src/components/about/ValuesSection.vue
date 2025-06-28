<script setup>
const values = [
{
    id: 1,
    icon: 'nature',
    title: 'Sustainability',
    description: 'Every material is ethically sourced and every process is designed to minimize environmental impact while maximizing positive change.'
  },
  {
    id: 2,
    icon: 'build',
    title: 'Craftsmanship',
    description: 'We honor traditional techniques passed down through generations, ensuring each piece carries the soul of its maker.'
  },
  {
    id: 3,
    icon: 'people',
    title: 'Community',
    description: 'Our partnerships with artisan cooperatives create lasting relationships that empower communities and preserve cultural heritage.'
  }
];
</script>

<template>
  <section class="py-24 lg:py-32 flex flex-col items-center justify-center">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-16">
      <div class="text-center flex flex-col gap-6 justify-center items-center">
        <h2 class="font-serif text-4xl md:text-5xl font-bold">Our Value</h2>
        <p class="text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto">
          The principles that guide every decision, every design, and every
          partnership we make.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div
          v-for="value in values"
          :key="value.id"
          class="text-center flex flex-col gap-6 items-center justify-center"
        >
          <div
            class="w-16 h-16 rounded-full bg-[#B89B74] flex items-center justify-center mx-auto"
          >
            <i class="material-icons text-white text-3xl flex items-center justify-center">{{ value.icon }}</i>
          </div>
          <h3 class="font-serif text-2xl font-semibold">{{ value.title }}</h3>
          <p class="text-[#1A1A1A]/70 leading-relaxed">
            {{ value.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
