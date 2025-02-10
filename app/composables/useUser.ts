import axios from "axios"
import { onMounted, ref } from "vue"

export default function(userId: number) {
  const user = ref()

  function fetchUser(id: number) {
    axios.get(`users/${id}`)
      .then(response => (user.value = response.data))
  }

  onMounted(() => fetchUser(userId))

  return { user }
}
