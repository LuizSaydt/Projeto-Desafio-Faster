<script setup lang="ts">

import { ref } from "vue";
import { navigateTo, useFetch } from "#app";

// eslint-disable-next-line no-undef
definePageMeta({
  layout: "minimal"
});

const fullName = ref<string>();
const username = ref<string>();
const password = ref<string>();

const signUp = async () => {
  useFetch<string>("api/auth/sign-up", {
    method: "POST",
    body: {
      fullName: fullName.value,
      username: username.value,
      password: password.value
    }
  }).then(() => {
    navigateTo({ path: "/" });
  }, error => {
    console.log("exception...");
    console.log(error);
  }).catch(e => {
    console.log("Error while trying to register the user:", e);
  });
};

</script>

<template>
  <div class="flex h-screen items-center">
    <form
      class="flex flex-col w-full ml-3 mr-3 md:max-w-md sm:w-2/3 md:w-1/3 sm:mx-auto bg-gray-700 border-2 border-gray-600 p-10 rounded-lg"
      @submit.prevent="signUp"
    >
      <div class="mb-5">
        <label
          for="fullName"
          class="block mb-2 text-sm font-medium text-white"
        >Nome completo</label>
        <input
          id="fullName"
          v-model="fullName"
          type="text"
          class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-500 placeholder-gray-400 text-white focus:ring-pink-500 focus:border-pink-500"
          required
        >
      </div>
      <div class="mb-5">
        <label
          for="username"
          class="block mb-2 text-sm font-medium text-white"
        >Usuário</label>
        <input
          id="username"
          v-model="username"
          type="text"
          class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-500 placeholder-gray-400 text-white focus:ring-pink-500 focus:border-pink-500"
          required
        >
      </div>
      <div class="mb-5">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-white"
        >Senha</label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-500 placeholder-gray-400 text-white focus:ring-pink-500 focus:border-pink-500"
          required
        >
      </div>
      <button
        type="submit"
        class="text-white self-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-pink-600 hover:bg-pink-700 focus:ring-pink-800"
      >
        Cadastrar
      </button>
      <div class="flex flex-row justify-center text-center text-pink-500 mt-5 cursor-pointer font-bold">
        <NuxtLink to="/sign-in">
          Já possui um login? clique aqui para logar
        </NuxtLink>
      </div>
    </form>
  </div>
</template>