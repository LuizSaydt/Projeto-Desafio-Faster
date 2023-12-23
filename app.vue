<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
  //* Custom google font
  @import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  body {
    //* Aplly a color to all background
    @apply bg-gray-800;

    //* Hide scrollbar on mobile
    @media (max-width: 768px) {
      ::-webkit-scrollbar { display: none; }
    }

    @media (min-width: 768px) {
      //* Custom scrollbar
      * {
        scrollbar-width: thin;
        scrollbar-color: theme("colors.gray.500") theme("colors.gray.800");
      }

      *::-webkit-scrollbar {
        width: 12px;
      }

      *::-webkit-scrollbar-track {
        background: theme("colors.gray.800");
        border-radius: 10px;
      }

      *::-webkit-scrollbar-thumb {
        background-color: theme("colors.gray.500");
        border-radius: 20px;
        border: 3px solid theme("colors.gray.800");
      }
    }
  }
</style>