import { ref } from "vue";

export const useProductFilters = () => {
  const showFilters = ref(false);
  const selectedFilters = ref([]);
  const activeFilters = ref([]);

  const products = ref([]);
  const sortOption = ref("featured");
  const viewMode = ref("grid");

  const applyFilters = () => {
    activeFilters.value = [...selectedFilters.value];
    showFilters.value = false;
  };

  const clearFilters = () => {
    selectedFilters.value = [];
    activeFilters.value = [];
  };

  const removeFilter = (filter) => {
    activeFilters.value = activeFilters.value.filter((f) => f !== filter);
    selectedFilters.value = selectedFilters.value.filter((f) => f !== filter);
  };

  return {
    showFilters,
    selectedFilters,
    activeFilters,
    products,
    sortOption,
    viewMode,
    applyFilters,
    clearFilters,
    removeFilter,
  };
};
