<template>
  <h1>Hello, Vue 3.</h1>
</template>

<script>
import { ref, inject } from 'vue'

export default {
  setup () {
    // TODO: Using plain inject for now. Having `useStore` composition function
    // would be more suitable I think. Or is it...?
    const store = inject('store')

    console.log(store)
  }
}
</script>
