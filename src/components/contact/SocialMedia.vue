<script setup>
    import socialMedia from '@/data/contact/socialMedia';
</script>

<template>
  <section class="py-24 lg:py-32 bg-[#1A1A1A] text-white flex items-center justify-center">
    <div
      class="max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-12"
    >
      <div class="flex flex-col items-center gap-6">
        <h2 class="font-serif text-4xl md:text-5xl font-bold">
          Follow Our <em class="italic">Journey</em>
        </h2>
        <p class="text-lg text-white/80 max-w-2xl mx-auto">
          Stay connected with us on social media for behind-the-scenes content,
          sustainability updates, and styling inspiration.
        </p>
      </div>

      <div class="flex justify-center gap-8">
        <a
          v-for="social in socialMedia"
          :key="social.id"
          href="#"
          class="group flex flex-col items-center gap-3"
        >
          <div
            class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#B89B74] transition-colors"
          >
            <i
              class="material-icons group-hover:text-white transition-colors flex items-center justify-center"
            >
              {{ social.icon }}
            </i>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-sm">{{ social.name }}</span>
            <span class="text-xs text-white/60">{{ social.followers }}</span>
          </div>
        </a>
      </div>

      <div class="text-center flex flex-col items-center gap-4">
        <p class="text-white/60">Use our hashtag to be featured</p>
        <p class="font-serif text-2xl text-[#B89B74]">#VierraStyle</p>
      </div>
    </div>
  </section>
</template>
