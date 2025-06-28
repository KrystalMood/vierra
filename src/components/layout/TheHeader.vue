<script setup>
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-[#F8F5F2]/95 backdrop-blur-sm border-b border-[#D1D5DB]/30"
  >
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <RouterLink to="/" class="font-serif text-2xl font-bold tracking-wide hover:text-[#B89B74] transition-colors">Vierra's</RouterLink>
        <nav class="hidden md:flex gap-8">
          <RouterLink
            to="#"
            class="text-sm font-medium hover:text-[#B89B74] transition-colors"
            >Collections</RouterLink
          >
          <RouterLink
            to="/about"
            class="text-sm font-medium hover:text-[#B89B74] transition-colors"
            :class="{ 'text-[#B89B74]': route.path === '/about' }"
            >About</RouterLink
          >
          <RouterLink
            to="/sustainability"
            class="text-sm font-medium hover:text-[#B89B74] transition-colors"
            :class="{ 'text-[#B89B74]': route.path === '/sustainability' }"
            >Sustainability</RouterLink
          >
          <RouterLink
            to="/contact"
            class="text-sm font-medium hover:text-[#B89B74] transition-colors"
            :class="{ 'text-[#B89B74]': route.path === '/contact' }"
            >Contact</RouterLink
          >
        </nav>
        <div class="flex items-center gap-4">
          <button class="p-2 hover:text-[#B89B74] transition-colors">
            <i class="material-icons w-5 h-5">search</i>
          </button>
          <button class="p-2 hover:text-[#B89B74] transition-colors">
            <i class="material-icons w-5 h-5">shopping_bag</i>
          </button>
          <button class="md:hidden p-2">
            <i class="material-icons w-5 h-5">menu</i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
