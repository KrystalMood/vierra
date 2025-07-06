<script setup>
import { categories, activeCategory, setActiveCategory } from '@/data/collections/categories'
</script>

<template>
  <section class="py-12 border-b border-[#D1D5D8]/30 flex flex-col justify-center items-center">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex flex-wrap justify-center gap-2 md:gap-8">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="setActiveCategory(category.id)"
          class="px-6 py-3 text-sm font-medium transition-colors"
          :class="
            activeCategory === category.id
              ? 'text-[#B89B74] border-b-2 border-[#B89B74]'
              : 'text-gray-500 hover:text-[#B89B74]'
          "
        >
          {{ category.name }}
        </button>
      </div>
    </div>
  </section>
</template>
