<script setup>
    import DefaultLayout from '@/layouts/DefaultLayout.vue';

    import Hero from '@/components/about/Hero.vue';
    import MissionStatement from '@/components/about/MissionStatement.vue';
    import FounderStory from '@/components/about/FounderStory.vue';
    import ValuesSection from '@/components/about/ValuesSection.vue';
    import ImpactNumbers from '@/components/about/ImpactNumbers.vue';
    import ArtisanImpact from '@/components/about/ArtisanImpact.vue';
    import CallToAction from '@/components/about/CallToAction.vue';
</script>

<template>
    <DefaultLayout>
        <Hero />
        <MissionStatement />
        <FounderStory />
        <ValuesSection />
        <ImpactNumbers />
        <ArtisanImpact />
        <CallToAction />
    </DefaultLayout>
</template>
