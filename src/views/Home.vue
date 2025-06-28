<script setup>
    import DefaultLayout from '../layouts/DefaultLayout.vue';
    
    import Hero from '../components/home/Hero.vue';
    import FeaturedProducts from '../components/home/FeaturedProducts.vue';
    import BrandStory from '../components/home/BrandStory.vue';
    import NewsletterSignup from '../components/home/NewsletterSignup.vue';
</script>

<template>
    <DefaultLayout>
        <Hero />
        <FeaturedProducts />
        <BrandStory />
        <NewsletterSignup />
    </DefaultLayout>
</template>
