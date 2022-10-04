<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{ uppercaseTitle }}</h1>
      <h2>Счетчик {{ counter }} ({{ doubleCounter }})</h2>
      <button class="btn" @click="$store.commit('count/increment')">Добавить</button>
      <button class="btn primary" @click="addAsync({ value: 10, delay: 500 })">Добавить 10</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TheNavbar from './TheNavbar'
export default {
  computed: {
    ...mapGetters('count', ['counter', 'doubleCounter']),
    ...mapGetters(['uppercaseTitle'])
  },
  methods: {
    ...mapActions('count', ['addAsync'])
  },
  components: { TheNavbar }
}
</script>
