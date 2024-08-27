<template>
  <div class="max-w-md mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Todo List</h1>
    <form @submit.prevent="handleSubmit" class="flex mb-4">
      <input
        v-model="newTodo"
        type="text"
        placeholder="Add a todo"
        class="flex-grow p-2 border rounded-l"
      />
      <button type="submit" class="p-2 bg-blue-500 text-white rounded-r">
        Add
      </button>
    </form>
    <ul class="list-disc pl-5">
      <li
        v-for="(todo, index) in todos"
        :key="index"
        class="flex justify-between items-center mb-2"
      >
        <span>{{ todo }}</span>
        <button @click="removeTodo(index)" class="text-red-500">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useTodos } from "../composables/useTodos";
import { useTodoForm } from "../composables/useTodoForm";

const { todos, addTodo, removeTodo } = useTodos();
const { newTodo, clearForm } = useTodoForm();

const handleSubmit = () => {
  if (newTodo.value.trim()) {
    addTodo(newTodo.value);
    clearForm();
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
