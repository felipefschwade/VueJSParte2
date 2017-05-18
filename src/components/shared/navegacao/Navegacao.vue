<template>
    <nav>
      <ul>
        <li v-for="rota of rotas">
          <router-link :to="rota.path ? rota.path : '/'">{{ rota.text }}</router-link>
        </li>
      </ul>
    </nav>
</template>
<script>
    export default {
        props: ['rotas']
    }
</script>
<style scoped>

</style>