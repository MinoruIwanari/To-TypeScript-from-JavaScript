<script setup lang="ts">
import { ref } from 'vue';

  const check = ref<string[]>([])
</script>

<template>
  <label>コーディング</label>
  <input type="checkbox" name="interest" value="Coding" v-model="check"/>
  <label>音楽</label>
  <input type="checkbox" name="interest" value="music" v-model="check"/>
  <label>スポーツ</label>
  <input type="checkbox" name="interest" value="Sports" v-model="check"/>

  <h2>{{ check }}</h2>
</template>
