<script setup></script>

<template>
  <section
    class="py-24 lg:py-32 bg-[#1A1A1A] text-white flex items-center justify-center"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="flex flex-col gap-8">
          <h2 class="font-serif text-4xl md:text-5xl font-bold">
            Our Sustainability <em class="italic">Promise</em>
          </h2>
          <div class="flex flex-col gap-6 text-white/80">
            <p>
              Every piece in our collections is crafted with a commitment to
              environmental stewardship and social responsibility. We believe
              luxury should never come at the expense of our planet or its
              people.
            </p>
            <p>
              From responsibly sourced materials to ethical production
              practices, we ensure that each accessory carries not only beauty
              but also purpose.
            </p>
          </div>

          <div class="flex flex-wrap gap-4">
            <div class="flex items-center gap-2">
              <div
                class="w-10 h-10 rounded-full bg-[#B89B74] flex items-center justify-center"
              >
                <i class="material-icons">eco</i>
              </div>
              <span class="text-sm">Eco-Friendly Materials</span>
            </div>
            <div class="flex items-center gap-2">
              <div
                class="w-10 h-10 rounded-full bg-[#B89B74] flex items-center justify-center"
              >
                <i class="material-icons">autorenew</i>
              </div>
              <span class="text-sm">Circular Design</span>
            </div>
            <div class="flex items-center gap-2">
              <div
                class="w-10 h-10 rounded-full bg-[#B89B74] flex items-center justify-center"
              >
                <i class="material-icons">people</i>
              </div>
              <span class="text-sm">Fair Trade Certified</span>
            </div>
          </div>
          <button
            class="mt-8 px-8 py-3 border border-white text-sm font-medium tracking-wide uppercase hover:bg-white hover:text-[#1A1A1A] transition-colors"
          >
            Learn More
          </button>
        </div>

        <div>
          <img
            src="https://placehold.co/600x500"
            alt="Sustainable production process"
            class="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>
