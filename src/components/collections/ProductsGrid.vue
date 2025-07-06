<script setup>
import { ref, computed } from "vue";
import products from "@/data/collections/products";

defineProps({
  viewMode: {
    type: String,
    default: "grid",
  },
});

const hoveredProduct = ref(null);

const sortedProducts = computed(() => {
  return [...products];
});
</script>

<template>
  <section class="py-16 lg:py-24 flex flex-col justify-center items-center">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-16">
      <!-- Grid View -->
      <div
        v-if="viewMode === 'grid'"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <div
          v-for="product in sortedProducts"
          :key="product.id"
          class="group cursor-pointer flex flex-col gap-4"
          @mouseenter="hoveredProduct = product.id"
          @mouseleave="hoveredProduct = null"
        >
          <div class="relative aspect-[3/4] overflow-hidden bg-gray-100">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div
              v-if="product.sustainabilityBadge"
              class="absolute top-3 left-3 px-2 py-1 bg-[#B89B74]/90 text-white text-xs font-medium rounded-sm"
            >
              {{ product.sustainabilityBadge }}
            </div>
            <div
              v-if="hoveredProduct === product.id"
              class="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <button
                class="px-6 py-2 bg-white text-[#1A1A1A] text-sm font-medium hover:bg-[#B89B74] hover:text-white transition-colors"
              >
                Quick View
              </button>
              <button
                class="px-6 py-2 bg-[#B89B74] text-white text-sm font-medium hover:bg-white hover:text-[#1A1A1A] transition-colors"
              >
                Add to Bag
              </button>
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <h3 class="font-serif text-lg font-medium">{{ product.name }}</h3>
            <p class="text-sm text-[#1A1A1A]/70">{{ product.material }}</p>
            <p class="font-medium">${{ product.price.toFixed(2) }}</p>
            <div class="flex items-center gap-1">
              <div v-for="i in 5" :key="i" class="text-[#B89B74]">
                <i v-if="i <= product.rating" class="material-icons text-xs"
                  >star</i
                >
                <i v-else class="material-icons text-xs text-gray-300"
                  >star_border</i
                >
              </div>
              <span class="text-xs text-[#1A1A1A]/60"
                >({{ product.reviews }})</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- List View -->
      <div v-else class="flex flex-col gap-8">
        <div
          v-for="product in sortedProducts"
          :key="product.id"
          class="flex flex-col md:flex-row gap-6 pb-8 border-b border-[#D1D5DB]/30"
        >
          <div
            class="relative w-full md:w-1/3 aspect-[4/3] overflow-hidden bg-gray-100"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div
              v-if="product.sustainabilityBadge"
              class="absolute top-3 left-3 px-2 py-1 bg-[#B89B74]/90 text-white text-xs font-medium rounded-sm"
            >
              {{ product.sustainabilityBadge }}
            </div>
          </div>
          <div class="flex-1 flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <h3 class="font-serif text-xl font-medium">
                {{ product.name }}
              </h3>
              <p class="text-sm text-[#1A1A1A]/70">{{ product.material }}</p>
              <p class="font-medium">${{ product.price.toFixed(2) }}</p>
              <div class="flex items-center gap-1">
                <div v-for="i in 5" :key="i" class="text-[#B89B74]">
                  <i v-if="i <= product.rating" class="material-icons text-xs"
                    >star</i
                  >
                  <i v-else class="material-icons text-xs text-gray-300"
                    >star_border</i
                  >
                </div>
                <span class="text-xs text-[#1A1A1A]/60"
                  >({{ product.reviews }})</span
                >
              </div>
            </div>
            <p class="text-sm text-[#1A1A1A]/80">
              {{ product.description }}
            </p>
            <div class="mt-auto flex gap-4">
              <button
                class="px-6 py-2 border border-[#1A1A1A] text-sm font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                Quick View
              </button>
              <button
                class="px-6 py-2 bg-[#B89B74] text-white text-sm font-medium hover:bg-[#A08A6D] transition-colors"
              >
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center">
        <div class="inline-flex items-center gap-2">
          <button
            class="w-10 h-10 flex items-center justify-center border border-[#D1D5DB] rounded-full hover:border-[#B89B74] transition-colors"
          >
            <i class="material-icons text-lg">chevron_left</i>
          </button>
          <button
            v-for="page in 5"
            :key="page"
            class="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
            :class="
              page === 1 ? 'bg-[#B89B74] text-white' : 'hover:bg-[#F8F5F2]'
            "
          >
            {{ page }}
          </button>
          <button
            class="w-10 h-10 flex items-center justify-center border border-[#D1D5DB] rounded-full hover:border-[#B89B74] transition-colors"
          >
            <i class="material-icons text-lg">chevron_right</i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
