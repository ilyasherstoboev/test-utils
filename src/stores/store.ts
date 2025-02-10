import { defineStore } from 'pinia'
import { useCounterStore } from './counter'

export const useStore = defineStore('store', () => {
  const counterStoure = useCounterStore();

  return {
    counter: counterStoure
  }
})
