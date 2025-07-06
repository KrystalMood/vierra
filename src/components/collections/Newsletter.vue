<script setup></script>

<template>
  <section class="py-24 lg:py-32 flex items-center justify-center">
    <div
      class="max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col gap-12 items-center justify-center"
    >
      <div class="flex flex-col gap-6">
        <h2 class="font-serif text-4xl md:text-5xl font-bold mb-6">
          Join Our Community
        </h2>
        <p class="text-lg mb-12 text-[#1A1A1A]/80 max-w-2xl mx-auto">
          Subscribe to receive updates on new collections, sustainability
          initiatives, and exclusive offers for our community.
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="max-w-md mx-auto">
        <div class="flex items-center gap-4">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-6 py-4 border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#B89B74] focus:border-transparent"
            required
          />
          <button
            type="submit"
            class="bg-[#B89B74] px-8 py-4 text-sm font-medium tracking-wide uppercase text-white hover:bg-[#A08A6D] transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
