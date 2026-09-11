<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter()

  const seni = (num: number) => {
    router.push({
      name: 'RoutingView',
      params: {
        id: num
      }
    })
  }
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    <RouterView/>
    <RouterLink to="/">paya</RouterLink>
    <button type="button" @click="$router.push({name: 'RoutingView', params: {id: 3}})">RoutingViewに遷移</button>
  </p>
  <p>
    <button type="button" @click="seni(3)">スクリプト内で遷移</button>
  </p>
</template>

<style scoped></style>
