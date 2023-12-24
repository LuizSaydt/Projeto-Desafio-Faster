<template>
  <div class="bg-gray-800 md:h-screen md:flex md:flex-col">
    <!-- Navbar -->
    <nav class="bg-gray-900 w-full sticky md:relative z-20 top-0 start-0 border-b border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-4 xl:px-0">
        <a
          href="/"
          class="flex items-center space-x-8 rtl:space-x-reverse"
        >
          <img
            src="https://www.fstr.co/img/logo-dark.svg"
            class="h-8"
            alt="Faster Logo"
          >
          <div class="text-white text-lg font-bold">Desafio Full-Stack</div>
        </a>
      </div>
    </nav>
    <!-- /pages -->
    <slot ref="indexPage" />
  </div>
</template>