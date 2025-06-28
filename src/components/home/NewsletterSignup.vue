<template>
    <section class="py-24 lg:py-32 bg-[#1A1A1A] text-white w-full flex justify-center items-center">
        <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col gap-6 items-center justify-center">
            <h2 class="font-serif text-4xl md:text-5xl font-bold">
                Stay Connected
            </h2>
            <p class="text-lg mb-12 text-white/80 max-w-2xl mx-auto">
                Be the first to discover new collections, sustainability insights,
                and exclusive access to limited editions.
            </p>
            <form @submit.prevent="" class="max-w-md mx-auto">
                <div class="flex flex-col sm:flex-row gap-4">
                    <input type="email" placeholder="Enter your email"
                        class="flex-1 px-6 py-4 bg-white text-[#1A1A1A] placeholder-[#1A1A1A]/50 focus:outline-none focus:ring-2 focus:ring-[#B89B74]"
                        required />
                    <button type="submit"
                        class="bg-[#B89B74] px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-[#A08A6D] transition-colors whitespace-nowrap">
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>