<script setup lang="ts">
import type { User } from "../interfaces";

defineEmits(["logout"]);

defineProps<{
  user?: User | ""
}>();

</script>

<template>
  <div class="bg-gray-800 md:h-screen md:flex md:flex-col">
    <!-- Navbar -->
    <nav class="bg-gray-900 w-full sticky md:relative z-20 top-0 start-0 border-b border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-4 xl:px-0">
        <a
          href="https://www.fstr.co/"
          class="flex items-center space-x-8 rtl:space-x-reverse"
        >
          <img
            src="https://www.fstr.co/img/logo-dark.svg"
            class="h-8"
            alt="Faster Logo"
          >
          <div class="text-white text-lg font-bold hidden lg:block">Desafio Full-Stack</div>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div>
            <button
              v-if="!user"
              type="button"
              class="text-white font-bold focus:ring-4 focus:outline-none last:font-medium rounded-lg text-sm px-4 py-2 text-center bg-pink-600 hover:bg-pink-700 focus:ring-pink-800"
            >
              <nuxt-link to="/sign-in">
                login
              </nuxt-link>
            </button>
            <div
              v-else
              class="flex flex-row gap-5 items-center"
            >
              <span class="text-white">
                {{ user.full_name }}
              </span>
              <button
                type="button"
                class="text-white font-bold focus:ring-4 focus:outline-none last:font-medium rounded-lg text-sm px-4 py-2 text-center bg-pink-600 hover:bg-pink-700 focus:ring-pink-800"
                @click="$emit('logout')"
              >
                Sair
              </button>
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          id="navbar-sticky"
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:mr-32 lg:mr-40"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white bg-pink-500 rounded md:bg-transparent md:p-0 md:text-pink-500"
                aria-current="page"
              >Home</a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 rounded md:p-0 md:hover:text-pink-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >Sobre</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- /pages -->
    <slot ref="indexPage" />
  </div>
</template>