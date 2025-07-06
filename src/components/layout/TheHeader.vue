<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref, onMounted, onUnmounted, computed } from "vue";

const route = useRoute();
const isSearchOpen = ref(false);
const searchQuery = ref("");
const searchContainer = ref(null);

const scrollY = ref(0);
const isScrolling = ref(false);
let timeoutId = null;

const headerClass = computed(() => {
  return scrollY.value > 10
    ? "bg-white/95 backdrop-blur-md shadow-sm"
    : "bg-transparent";
});

function onScroll() {
  scrollY.value = window.scrollY;

  isScrolling.value = true;
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    isScrolling.value = false;
  }, 50);
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  window.addEventListener("click", handleClickOutside);
  scrollY.value = window.scrollY;
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("click", handleClickOutside);
  clearTimeout(timeoutId);
});

const vFocus = {
  mounted: (el) => el.focus(),
};

function handleSearch() {
  if (searchQuery.value.trim()) {
    console.log("Search query:", searchQuery.value);
  }
  isSearchOpen.value = false;
  searchQuery.value = "";
}

function handleClickOutside(e) {
  if (searchContainer.value && !searchContainer.value.contains(e.target)) {
    isSearchOpen.value = false;
  }
}
</script>

<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 flex items-center justify-center w-full',
      'transition-all duration-300',
      headerClass,
    ]"
  >
    <div class="container max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-3 items-center h-16">
        <RouterLink
          to="/"
          class="flex items-center gap-2 font-serif text-2xl font-bold tracking-wide hover:text-[#B89B74] transition-colors"
          :class="{ 'text-white': scrollY <= 10 }"
        >
          <img
            src="/logo.png"
            alt=""
            class="w-10 h-10 rounded-lg object-cover transition-opacity duration-300"
          />
          Vierra's
        </RouterLink>
        <nav class="hidden md:flex gap-8 justify-self-center">
          <RouterLink
            to="/collections"
            class="text-sm font-medium hover:text-[#B89B74] transition-colors"
            :class="{
              'text-[#B89B74]': route.path === '/collections',
              'text-white': scrollY <= 10,
            }"
            >Collections</RouterLink
          >
          <RouterLink
            to="/about"
            class="text-sm font-medium hover:text-[#B89B74] transition-colors"
            :class="{
              'text-[#B89B74]': route.path === '/about',
              'text-white': scrollY <= 10,
            }"
            >About</RouterLink
          >
          <RouterLink
            to="/sustainability"
            class="text-sm font-medium hover:text-[#B89B74] transition-colors"
            :class="{
              'text-[#B89B74]': route.path === '/sustainability',
              'text-white': scrollY <= 10,
            }"
            >Sustainability</RouterLink
          >
          <RouterLink
            to="/contact"
            class="text-sm font-medium hover:text-[#B89B74] transition-colors"
            :class="{
              'text-[#B89B74]': route.path === '/contact',
              'text-white': scrollY <= 10,
            }"
            >Contact</RouterLink
          >
        </nav>
        <div class="flex items-center gap-4 justify-self-end">
          <div class="relative flex items-center" ref="searchContainer">
            <input
              v-if="isSearchOpen"
              v-model="searchQuery"
              type="text"
              placeholder="Search..."
              class="absolute right-full mr-2 top-1/2 -translate-y-1/2 w-56 bg-white border border-[#D1D5DB] rounded-md px-3 py-1.5 focus:outline-none focus:border-[#9CA3AF] transition-colors"
              @keyup.enter="handleSearch"
              @keyup.esc="isSearchOpen = false"
              ref="searchInput"
              v-focus
            />
            <button
              @click="isSearchOpen = !isSearchOpen"
              class="p-2 hover:text-[#B89B74] transition-colors"
              :class="{ 'text-white': scrollY <= 10 }"
            >
              <i class="material-icons flex items-center justify-center">{{
                isSearchOpen ? "close" : "search"
              }}</i>
            </button>
          </div>
          <button
            class="p-2 hover:text-[#B89B74] transition-colors"
            :class="{ 'text-white': scrollY <= 10 }"
          >
            <i
              class="material-icons w-5 h-5 flex items-center justify-center text-[20px]"
              >shopping_bag</i
            >
          </button>
          <button
            class="md:hidden p-2"
            :class="{ 'text-white': scrollY <= 10 }"
          >
            <i
              class="material-icons w-5 h-5 flex items-center justify-center text-[20px]"
              >menu</i
            >
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
