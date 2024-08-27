<template>
  <div>
    <h1>Error</h1>
    <p>{{ error.message }}</p>
  </div>
</template>

<script setup>
defineProps(['error'])
</script>

<style>
</style>
