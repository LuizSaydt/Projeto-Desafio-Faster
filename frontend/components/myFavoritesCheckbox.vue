<script setup lang="ts">

import { ref, watch } from "vue";

const value = ref<boolean>(false);

watch(value, async (val) => {
  emit("onlyFavorites", val);
});

const emit = defineEmits<{
  onlyFavorites: [value: boolean]
}>();

</script>

<template>
  <div>
    <input
      id="favoritos-checkbox"
      v-model="value"
      type="checkbox"
      :value="true"
      class="w-4 h-4 text-pink-600 rounded focus:ring-pink-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
    >
    <label
      for="favoritos-checkbox"
      class="w-full py-3 ms-2 text-sm font-medium text-gray-300"
    >Meus Favoritos</label>
  </div>
</template>