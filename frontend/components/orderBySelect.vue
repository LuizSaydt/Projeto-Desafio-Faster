<script setup lang="ts">

import { ref, watch } from "vue";

const order = ref<"asc" | "desc" | "default">("default");

watch(order, async (val) => {
  emit("sorted", val);
});

const emit = defineEmits<{
  sorted: [order: "asc" | "desc" | "default"]
}>();

</script>

<template>
  <div>
    <select
      id="countries"
      v-model="order"
      class=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-pink-500 focus:border-pink-500"
    >
      <option
        selected
        value="default"
        class="checked:bg-blue-500"
      >
        Ordernar por
      </option>
      <option
        value="asc"
        class="checked:bg-blue-500"
      >
        A - Z
      </option>
      <option
        value="desc"
        class="checked:bg-blue-500"
      >
        Z - A
      </option>
    </select>
  </div>
</template>