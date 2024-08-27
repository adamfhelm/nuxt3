import { defineNuxtPlugin } from '#imports'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      axios: axios.create({
        // Add your custom axios config here
      })
    }
  }
})
