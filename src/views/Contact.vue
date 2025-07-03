<script setup>
    import DefaultLayout from '@/layouts/DefaultLayout.vue';

    import Hero from '@/components/contact/Hero.vue';
    import ContactMethods from '@/components/contact/ContactMethods.vue';
    import ContactForm from '@/components/contact/ContatctForm.vue';
    import FAQSection from '@/components/contact/FAQSection.vue';
    import OfficeLocations from '@/components/contact/OfficeLocations.vue';
    import SocialMedia from '@/components/contact/SocialMedia.vue';
</script>

<template>
    <DefaultLayout>
        <Hero />
        <ContactMethods />
        <ContactForm />
        <FAQSection />
        <OfficeLocations />
        <SocialMedia />
    </DefaultLayout>
</template>
