<script setup>
    import DefaultLayout from '@/layouts/DefaultLayout.vue';

    import Hero from '@/components/collections/Hero.vue';
    import CategoryNavigation from '@/components/collections/CategoryNavigation.vue';
    import FilterAndSort from '@/components/collections/FilterAndSort.vue';
    import ProductsGrid from '@/components/collections/ProductsGrid.vue';
    import FeaturedCollection from '@/components/collections/FeaturedCollection.vue';
    import SustainabilityCommitment from '@/components/collections/SustainabilityCommitment.vue';
    import Newsletter from '@/components/collections/Newsletter.vue';
</script>

<template>
    <DefaultLayout>
        <Hero />
        <CategoryNavigation />
        <FilterAndSort />
        <ProductsGrid />
        <FeaturedCollection />
        <SustainabilityCommitment />
        <Newsletter />
    </DefaultLayout>
</template>
