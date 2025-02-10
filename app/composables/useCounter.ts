import { ref } from "vue"

export default function () {
  const counter = ref(0)

  function increase() {
    counter.value += 1
  }

  return { counter, increase }
}
