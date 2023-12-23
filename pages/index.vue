<script setup lang="ts">
import { useFetch, useRequestHeaders } from "#app";
import { ref } from "vue";
import type { Drink, User } from "../interfaces";

interface Favorite { id: number }

// Exposes de logout function for the navbar
defineExpose({ logout });

// Refs
const pending = ref<boolean>(true);
const drinks = ref<Drink[]>([]);
const error = ref<any>(null);
const filteredDrinks = ref<Drink[]>([]);

// Get user session
const headers = useRequestHeaders(["cookie"]);
const { data: user } = await useFetch<User>("api/auth", { headers, credentials: "include" });

// Get all drinks from the backend and if logged in mark the favorites
useFetch<Drink[]>("api/drinks").then(async res => {
  pending.value = false;
  drinks.value = res.data.value || [];
  filteredDrinks.value = drinks.value;
  error.value = res.error.value;
  updateFavorites();
}, error => {
  console.log("exception...");
  console.log(error);
});

async function logout () : Promise<void> {
  await useFetch<User>("api/auth/sign-out", { method: "POST", headers, credentials: "include" });
  user.value = null;
  window.location.reload();
}

//* When the checkboxes of categories changes then update the list of drinks
function checked (selectedCategories: string[]) : void {
  filteredDrinks.value = drinks.value.filter(drink => selectedCategories.includes(drink.category) || selectedCategories.includes("todos"));
}

//* When the orderBy list changes then update the list of drinks
function sorted (selectedOrder: "asc" | "desc" | "default") : void {
  if (selectedOrder === "asc") {
    filteredDrinks.value = [...drinks.value];
    filteredDrinks.value.sort((a, b) => a.name > b.name ? 1 : -1);
  } else if (selectedOrder === "desc") {
    filteredDrinks.value = [...drinks.value];
    filteredDrinks.value.sort((a, b) => a.name > b.name ? 1 : -1).reverse();
  } else {
    filteredDrinks.value = drinks.value;
  }
}

//* When the search bar content changes update the list of drinks
function search (filter: string) : void {
  filteredDrinks.value = drinks.value.filter(drink => {
    return drink.name.toLowerCase().includes(filter.toLowerCase());
  });
}

//* When the my favorites checkbos changes update the list of drinks
function onlyFavorites (value: boolean) : void {
  if (value) {
    filteredDrinks.value = drinks.value.filter(drink => drink.favorite);
  } else {
    filteredDrinks.value = drinks.value;
  }
}

async function updateFavorites () : Promise<void> {
  console.log("aki");
  if (!user.value) {
    drinks.value?.forEach(drink => {
      drink.favorite = false;
    });
    return;
  }
  try {
    const favorites = await useFetch<Favorite[]>("api/favorite");
    drinks.value?.forEach(drink => {
      drink.favorite = favorites.data.value?.some(fav => fav.id === drink.id);
    });
  } catch (e) {
    console.log("Unable to get favorites");
  }
}

</script>

<template>
  <NuxtLayout
    name="custom"
    :user="user"
    @logout="logout"
  >
    <div class="md:flex relative overflow-hidden lg:mr-28 lg:ml-28">
      <div class="text-gray-200 basis-2/5 mt-2 md:mt-10">
        <Categories
          :categories="drinks.map(drink => drink.category)"
          @checked="checked"
        />
      </div>
      <div class="md:flex md:flex-col overflow-auto basis-3/5">
        <div class="md:flex md:flex-row md:mt-10 md:mb-10 md:mr-7 items-center">
          <div class="basis-1/4">
            <div
              v-if="user"
              class="pl-3 pt-3 pb-3 md:pt-0 md:pb-0 md:pl-1"
            >
              <MyFavoritesCheckbox
                @only-favorites="onlyFavorites"
              />
            </div>
          </div>
          <div class="pr-2 pl-2 md:pr-0 md:pl-0 w-full md:basis-3/4 flex justify-around md:justify-end items-center gap-5">
            <SearchDrinkInput
              class="w-2/4"
              @search="search"
            />
            <OrderBySelect
              :drink-names="drinks.map(drink => drink.name)"
              @sorted="sorted"
            />
          </div>
        </div>
        <div
          v-if="pending"
          class="flex items-center justify-center w-auto h-96 mb-3 ml-3 mr-3 pt-3 pb-3 mt-4 md:ml-0 md:mt-0 md:mr-7 md:mb-7 md:pb-7 md:pt-7 border-2 rounded-lg bg-gray-700 border-gray-600"
        >
          <LoadingContent />
        </div>
        <div
          v-else-if="!pending && error"
          class="flex items-center justify-center w-auto h-96 mb-3 ml-3 mr-3 pt-3 pb-3 mt-4 md:ml-0 md:mt-0 md:mr-7 md:mb-7 md:pb-7 md:pt-7 border-2 rounded-lg bg-gray-700 border-gray-600"
        >
          <div role="status">
            <span class="sr-only">Não foi possível carregar os dados</span>
          </div>
        </div>
        <div
          v-else
          class="flex flex-row flex-wrap gap-4 overflow-auto ml-3 mr-3 pt-3 pb-3 mt-4 md:ml-0 md:mt-0 md:mr-7 md:mb-7 md:pb-7 md:pt-7 border-2 justify-center bg-gray-700  border-gray-600"
        >
          <Card
            v-for="drink in filteredDrinks"
            :id="drink.id"
            :key="drink.id"
            :name="drink.name"
            :category="drink.category"
            :description="drink.description"
            :image-id="drink.image?.id || 0"
            :favorite="drink.favorite"
            :user="user"
            class="ml-4 mr-4 w-full md:w-64 md:ml-0 md:mr-0"
            @update-favorites="updateFavorites"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
