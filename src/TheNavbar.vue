<template>
  <header class="navbar">
    Счетчик: {{ counter }}
    <button class="btn" @click="$store.commit('count/add', 5)">Плюс 5</button>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters('count', ['counter'])
}
</script>
