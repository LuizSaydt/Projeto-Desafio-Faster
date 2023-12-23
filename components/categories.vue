<script setup lang="ts">

import { computed, ref, watch } from "vue";

const props = defineProps({
  categories: { type: Array<String>, default: () => [] }
});

const uniqueCategories = computed<Array<String>>(() => {
  const uniqueArray = [...new Set(props.categories)];
  uniqueArray.unshift("todos");
  return uniqueArray;
});

const checked = ref<string[]>(["todos"]);

watch(checked, async (val) => {
  emit("checked", val);
});

const emit = defineEmits<{
  checked: [list: string[]]
}>();

</script>

<template>
  <div class="ml-3 mr-3 md:ml-0 md:mr-0 ">
    <h3 class="mb-3 md:mb-12 text:xl md:text-2xl text-center md:text-left font-semibold text-white">
      Categorias
    </h3>
    <ul class="w-full md:w-64 text-sm font-medium border rounded-lg bg-gray-700 border-gray-600 text-white">
      <li
        v-for="(category, index) in uniqueCategories"
        :key="index"
        class="w-full border-b rounded-t-lg border-gray-600"
      >
        <div class="flex items-center ps-3">
          <input
            :id="'category-checkbox-' + category"
            v-model="checked"
            type="checkbox"
            :value="category"
            class="cursor-pointer w-4 h-4 text-pink-600 rounded focus:ring-pink-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
          >
          <label
            :for="'category-checkbox-' + category"
            class="cursor-pointer w-full py-3 ms-2 text-sm font-medium text-gray-300"
          >{{ category }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>