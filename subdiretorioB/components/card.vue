<script setup lang="ts">
import { useFetch } from "#app";
import { onMounted, ref } from "vue";
import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface } from "flowbite";
import type { InstanceOptions } from "flowbite";
import type { User } from "~/interfaces";

const props = defineProps<{
  id: number,
  name: string,
  description: string,
  imageId: number,
  category: string,
  favorite?: boolean,
  user?: User | null | ""
}>();

const pending = ref<boolean>(true);
const drinkImageBase64 = ref<string>();
const error = ref<any>(null);
const modal = ref<ModalInterface>();

onMounted(() => {

  const $modalElement: HTMLElement | null = document.querySelector(`#modal${props.id}`);

  if (!$modalElement) {
    modal.value = undefined;
    console.log("Modal not finded");
    return;
  }

  const modalOptions: ModalOptions = {
    placement: "center",
    backdrop: "dynamic",
    closable: true
  };

  const instanceOptions: InstanceOptions = {
    id: "default-modal",
    override: true
  };

  modal.value = new Modal($modalElement, modalOptions, instanceOptions);

  getDrinkImage();

});

function getDrinkImage () : void {
  useFetch<string>("api/drink-image-base64/" + props.imageId, { server:false }).then(res => {
    pending.value = false;
    drinkImageBase64.value = res.data.value || "";
    error.value = res.error.value;
  }, error => {
    console.log("exception...");
    console.log(error);
  });
}

function changeFavoriteStatus () : void {
  if (props.favorite) unFavoriteDrink();
  else favoriteDrink();
}

function favoriteDrink () : void {
  useFetch<string>("api/favorite/" + props.id, { server:false, method: "POST" }).then(() => {
    emit("updateFavorites");
  }, error => {
    console.log("exception...");
    console.log(error);
  }).catch(e => {
    console.log(e);
  });
}

function unFavoriteDrink () : void {
  useFetch<string>("api/favorite/" + props.id, { server:false, method: "PATCH" }).then(() => {
    emit("updateFavorites");
  }, error => {
    console.log("exception...");
    console.log(error);
  }).catch(e => {
    console.log(e);
  });
}

const emit = defineEmits(["updateFavorites"]);

</script>

<template>
  <div class="font-family max-w-sm rounded overflow-hidden shadow-md shadow-gray-900 bg-gray-900 flex flex-col justify-between">
    <div class="relative h-full">
      <LoadingContent v-if="pending" />
      <div
        v-else-if="!pending && !drinkImageBase64"
        class="flex justify-center items-center text-gray-200 font-bold text-xl h-40"
      >
        Sem imagem
      </div>
      <img
        v-else
        class="aspect-square object-cover"
        :src="'data:image;base64,' + drinkImageBase64"
        :alt="name"
      >
      <div
        v-if="user"
        class="absolute top-0 right-0 cursor-pointer"
        :class="[favorite ? 'text-pink-600' : 'text-gray-800']"
        @click="changeFavoriteStatus"
      >
        <!-- Favorite star icon -->
        <svg
          class="w-9 h-9"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="white"
        >
          <path
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      </div>
    </div>
    <div class="px-6 py-4">
      <div class="font-semibold text-xl text-center text-gray-200">
        {{ name }} - {{ category }}
      </div>
    </div>
    <div class="px-6 pb-6 text-center">
      <button
        :disabled="!modal"
        type="button"
        class="text-white font-bold focus:ring-4 last:font-medium rounded-lg text-sm px-4 py-2 text-center bg-pink-600 hover:bg-pink-700 focus:ring-pink-800"
        @click="modal?.show()"
      >
        Detalhes
      </button>
    </div>

    <!-- Main modal -->
    <div
      :id="'modal'+id"
      tabindex="-1"
      aria-hidden="true"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full"
    >
      <div class="relative p-2 md:p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div
          class="relative rounded-lg shadow border-2 border-gray-400"
          style="background-color: #202e41;"
        >
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b border-gray-400 rounded-t">
            <h3 class="text-xl font-semibold text-gray-100">
              {{ name }}
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              @click="modal?.hide()"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="flex flex-col justify-center p-4 md:p-5 space-y-4 text-justify">
            <LoadingContent v-if="pending" />
            <div
              v-else-if="!pending && !drinkImageBase64"
              class="text-center text-white pt-5 pb-5"
            >
              Sem imagem
            </div>
            <img
              v-else
              class="aspect-square object-cover"
              :src="'data:image;base64,' + drinkImageBase64"
              :alt="name"
            >
            <div class="text-block white-space text-base leading-relaxed text-gray-200">
              {{ description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .font-family {
    font-family: 'Kanit', sans-serif;
  }

  .text-block {
    white-space: pre-line;
  }
</style>