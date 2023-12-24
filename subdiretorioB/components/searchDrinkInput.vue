<script setup lang="ts">

import { ref, watch } from "vue";

const searchInput = ref<string>("");

watch(searchInput, async (val) => {
  emit("search", val);
});

const emit = defineEmits<{
  search: [filter: string]
}>();

</script>

<template>
  <div>
    <label
      for="default-search"
      class="mb-2 text-sm font-medium sr-only text-white"
    >Pesquisar</label>
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          class="w-4 h-4 text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        id="default-search"
        v-model="searchInput"
        type="search"
        class="block w-full p-2.5 ps-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-pink-500 focus:border-pink-500"
        placeholder="Pesquisar"
      >
    </div>
  </div>
</template>