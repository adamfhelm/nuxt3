import { ref } from 'vue';

export function useTodoForm() {
  const newTodo = ref<string>('');
  
  const clearForm = () => {
    newTodo.value = '';
  };
  
  return {
    newTodo,
    clearForm,
  };
}
