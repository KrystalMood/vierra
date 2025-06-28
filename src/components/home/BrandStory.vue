<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section
    class="py-24 lg:py-32 bg-white w-full flex justify-center items-center"
  >
    <div class="w-11/12 mx-auto px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        <div class="order-2 lg:order-1 flex flex-col gap-6">
          <h2 class="font-serif text-4xl md:text-5xl font-bold">
            Where Craft Meets
            <br />
            <em class="italic">Conscience</em>
          </h2>
          <div
            class="flex flex-col gap-6 text-lg leading-relaxed text-[#1A1A1A]/80"
          >
            <p>
              Born from a vision to transform the fashion industry, Vierra's
              represents the perfect harmony between timeless design and
              environmental responsibility.
            </p>
            <p>
              Every piece in our collection is meticulously crafted by skilled
              artisans using ethically sourced materials, ensuring that beauty
              never comes at the cost of our planet's wellbeing.
            </p>
            <p>
              We believe that true luxury lies not in excess, but in the
              conscious choice to create something meaningful, lasting, and
              beautiful.
            </p>
          </div>
          <RouterLink
            to="/about"
            class="mt-8 border border-[#1A1A1A] text-center px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            Our Story
          </RouterLink>
        </div>
        <div class="order-1 lg:order-2">
          <img
            src="https://placehold.co/600x500/svg"
            alt="Brand Story"
            class="w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
