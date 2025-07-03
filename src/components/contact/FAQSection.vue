<script setup>
import { ref } from "vue";
import faqs from "@/data/contact/faq";

const openFaq = ref(null);

const toggleFaq = (id) => {
  openFaq.value = openFaq.value === id ? null : id;
};
</script>

<template>
  <section class="py-24 lg:py-32 flex items-center justify-center">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col gap-16 w-full">
      <div class="text-center flex flex-col gap-6">
        <h2 class="font-serif text-4xl md:text-5xl font-bold">
          Frequently Asked Questions
        </h2>
        <p class="text-lg text-[#1A1A1A]/70">
          Quick answers to common questions. Can't find what you're looking for?
          Contact us directly.
        </p>
      </div>

      <div class="flex flex-col gap-6">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="border border-[#D1D5DB] rounded-lg overflow-hidden w-full"
        >
          <button
            @click="toggleFaq(faq.id)"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#F8F5F2] transition-colors"
          >
            <span class="text-sm font-medium">{{ faq.question }}</span>
            <i
              class="material-icons w-5 h-5 transition-transform duration-200"
              :class="{ 'rotate-180': openFaq === faq.id }"
            >expand_more</i>
          </button>
          <div
            v-show="openFaq === faq.id"
            class="px-6 pb-4 text-[#1A1A1A]/70 leading-relaxed"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
