<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";

import Hero from "@/components/sustainability/Hero.vue";
import OurCommitment from "@/components/sustainability/OurCommitment.vue";
import SustainabilityPillars from "@/components/sustainability/SustainabilityPillars.vue";
import MaterialsAndProcesses from "@/components/sustainability/MaterialsAndProcesses.vue";
import Certifications from "@/components/sustainability/Certifications.vue";
</script>

<template>
  <DefaultLayout>
    <Hero />
    <OurCommitment />
    <SustainabilityPillars />
    <MaterialsAndProcesses />
    <Certifications />
  </DefaultLayout>
</template>
