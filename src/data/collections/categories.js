import { ref } from 'vue'

export const categories = ref([
    { id: 'all', name: 'All Collections' },
    { id: 'bags', name: 'Bags' },
    { id: 'jewelry', name: 'Jewelry' },
    { id: 'scarves', name: 'Scarves' },
    { id: 'wallets', name: 'Wallets' },
    { id: 'accessories', name: 'Accessories' }
  ])
  
  export const activeCategory = ref('all')
  export const setActiveCategory = (categoryId) => {
    activeCategory.value = categoryId
  }