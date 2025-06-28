<script setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
</script>

<template>
    <div class="min-h-screen bg-[#F8F5F2] text-[#1A1A1A]">
        <TheHeader />

        <main class="flex-1">
            <slot />
        </main>

        <TheFooter />
    </div>
</template>