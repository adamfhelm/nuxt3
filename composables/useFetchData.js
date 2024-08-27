import { ref } from 'vue';

export function useFetchData(url) {
  const data = ref(null);
  const error = ref(null);

  async function fetchData() {
    try {
      const response = await fetch(url);
      data.value = await response.json();
    } catch (err) {
      error.value = err;
    }
  }

  return { data, error, fetchData };
}
