<template>
  <h1>Hello, Vue 3.</h1>

  <p>store.state.count: {{ count }}, double is: {{ double }}</p>
  <button @click="increment">INCREMENT</button>
  <button @click="decrement">DECREMENT</button>

  <hr>

  <p>store.state.moduleA.value: {{ moduleAValue }}</p>
  <button @click="change">CHANGE VALUE</button>
  <button @click="reset">RESET</button>
</template>

<script>
import { reactive, ref, inject } from 'vue'

export default {
  // Using setup to inject store since we don't have a way to attach `$store`
  // property to vm instance just yet.
  setup () {
    // TODO: Using plain inject for now. Having `useStore` composition function
    // would be more suitable I think. Or is it...?
    const store = inject('store')

    // TODO: Can't prefix with `$` because it loses the reactivity.
    return { store }
  },

  computed: {
    count () {
      return this.store.state.count
    },

    double () {
      return this.store.getters.double
    },

    moduleAValue () {
      return this.store.state.moduleA.value
    }
  },

  methods: {
    increment () {
      this.store.dispatch('increment')
    },

    decrement () {
      this.store.dispatch('decrement')
    },

    change () {
      this.store.dispatch('moduleA/change', 'Value Changed!')
    },

    reset () {
      this.store.dispatch('moduleA/reset')
    }
  }
}
</script>
