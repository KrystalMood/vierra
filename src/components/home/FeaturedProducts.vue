<script setup>
const featuredProducts = [
    {
        id: 1,
        name: 'Product 1',
        image: 'https://placehold.co/500x400',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        price: 100,
    },
    {
        id: 2,
        name: 'Product 2',
        image: 'https://placehold.co/500x400',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        price: 100,
    },
    {
        id: 3,
        name: 'Product 3',
        image: 'https://placehold.co/500x400',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        price: 100,
    }
]
</script>

<template>
    <section class="py-24 lg:py-32 flex flex-col items-center justify-center gap-16 px-4">
        <div class="w-full max-w-3xl px-6 lg:px-8 text-center flex flex-col items-center gap-8">
            <h2 class="font-serif text-4xl md:text-5xl font-bold">
                Featured Pieces
            </h2>
            <p class="text-base md:text-lg text-[#525252]">
                Handpicked selections that embody our commitment to sustainable elegance
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            <div v-for="product in featuredProducts" :key="product.id" class="group cursor-pointer flex flex-col gap-4">
                <div class="aspect-[4/5] mb-6 overflow-hidden bg-gray-100">
                    <img :src="product.image" :alt="product.name"
                        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]">
                </div>
                <div class="flex flex-col gap-2">
                    <h3 class="font-serif text-xl font-semibold">{{ product.name }}</h3>
                    <p class="text-[#1A1A1A]/60 text-sm">{{ product.description }}</p>
                    <p class="font-medium">${{ product.price }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
