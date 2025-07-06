<script setup>
import filterGroups from "@/data/collections/filterGroups";
import { useProductFilters } from "@/composables/useProductFilters";

const {
  showFilters,
  selectedFilters,
  activeFilters,
  products,
  sortOption,
  viewMode,
  applyFilters,
  clearFilters,
  removeFilter,
} = useProductFilters();
</script>

<template>
  <section
    class="flex justify-center items-center py-8 border-b border-[#D1D5DB]/30"
  >
    <div class="w-full max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-4">
          <button
            @click="showFilters = !showFilters"
            class="flex items-center gap-2 text-sm font-medium"
          >
            <i class="material-icons flex items-center justify-center">tune</i>
            <span>Filters</span>
            <i
              class="material-icons flex items-center justify-center transition-transform duration-200"
              :class="{ 'rotate-180': showFilters }"
              >expand_more</i
            >
          </button>

          <div class="hidden md:flex items-center gap-2">
            <span class="text-xs text-[#1A1A1A]/60">Active Filters:</span>
            <div v-if="activeFilters.length > 0" class="flex flex-wrap gap-2">
              <span
                v-for="filter in activeFilters"
                :key="filter"
                class="inline-flex items-center gap-1 px-2 py-1 bg-[#F8F5F2] border border-[#D1D5DB] rounded-full text-xs"
                >{{ filter }}
                <button @click="removeFilter(filter)">
                  <i class="material-icons flex items-center justify-center"
                    >close</i
                  >
                </button>
              </span>
            </div>
            <span v-else class="text-xs text-[#1A1A1A]/60">None</span>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-4">
            <span class="text-sm text-[#1A1A1A]/60"
              >{{ products.length }} products</span
            >
            <div class="flex items-center gap-2">
              <label for="sort" class="text-sm">Sort by:</label>
              <select
                v-model="sortOption"
                id="sort"
                class="text-sm border-none bg-transparent focus:outline-none focus:ring-0"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
            <div class="flex items-center gap-2">
              <button
                @click="viewMode = 'grid'"
                class="p-1"
                :class="
                  viewMode === 'grid' ? 'text-[#B89B74]' : 'text-[#1A1A1A]/60'
                "
              >
                <i class="material-icons">grid_view</i>
              </button>
              <button
                @click="viewMode = 'list'"
                class="p-1"
                :class="
                  viewMode === 'list' ? 'text-[#B89B74]' : 'text-[#1A1A1A]/60'
                "
              >
                <i class="material-icons">list</i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter Panel -->
      <div
        v-show="showFilters"
        class="mt-4 w-full py-6 border-t border-[#D1D5DB]/30 grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        <div
          v-for="(filterGroup, index) in filterGroups"
          :key="index"
          class="flex flex-col gap-4"
        >
          <h3 class="font-medium">{{ filterGroup.name }}</h3>
          <div class="flex flex-col gap-2">
            <div
              v-for="option in filterGroup.options"
              :key="option.value"
              class="flex items-center gap-2"
            >
              <input
                :id="`${filterGroup.id}-${option.value}`"
                type="checkbox"
                :value="option.label"
                v-model="selectedFilters"
                class="w-4 h-4 text-[#B89B74] border-[#D1D5DB] rounded focus:ring-[#B89B74]"
              />
              <label
                :for="`${filterGroup.id}-${option.value}`"
                class="text-sm text-[#1A1A1A]/80"
              >
                {{ option.label }}
              </label>
            </div>
          </div>
        </div>

        <div
          class="md:col-span-4 flex justify-end gap-4 pt-4 border-t border-[#D1D5DB]/30"
        >
          <button
            @click="clearFilters"
            class="px-4 py-2 text-sm text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
          >
            Clear All
          </button>
          <button
            @click="applyFilters"
            class="px-4 py-2 text-sm bg-[#B89B74] text-white hover:bg-[#A08A6D] transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
