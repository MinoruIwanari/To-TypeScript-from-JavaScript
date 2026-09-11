<script setup lang="ts">
  import { useRoute } from 'vue-router';
  const route = useRoute()
  const scid = route.params.id
</script>

<template>
  routingView dayo~
  <p>uketottaataiha {{ $route.params.id }} dayo~</p>
  <p>script kara uketotta ataiha {{ scid }} dayo~</p>
</template>
