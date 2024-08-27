<template>
  <div
    class="bg-dark-blue min-h-screen flex flex-col items-center justify-center text-white"
  >
    <div class="text-center max-w-2xl mb-8">
      <h3 class="text-green-500 uppercase tracking-wider mb-2">Atlas</h3>
      <h1 class="text-5xl md:text-6xl font-bold mb-4">
        Database. Deploy a multi-cloud database.
      </h1>
      <p class="text-lg md:text-xl mb-8">
        The most advanced cloud database service on the market, with unmatched
        data distribution and mobility across AWS, Azure, and Google Cloud,
        built-in automation for resource and workload optimization, and so much
        more.
      </p>
      <div class="flex justify-center space-x-4">
        <button
          class="bg-green-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-green-600 transition duration-300"
        >
          Try Free
        </button>
        <button
          class="bg-transparent border border-white text-white py-2 px-4 rounded-full font-semibold hover:bg-gray-200 hover:text-dark-blue transition duration-300"
        >
          Launch demo
        </button>
      </div>
    </div>
    <TodoList />
  </div>
</template>

<script setup></script>

<style scoped>
.bg-dark-blue {
  background-color: #0a1b2b;
}
</style>
