<script setup>
import { ref } from 'vue';
import TabbableTextarea from '@/components/TabbableTextarea.vue';

let comment = ref('Default comment')
</script>

<template>
  <main>
    <form>
      <TabbableTextarea v-model="comment" style="width: 100%; height: 200px" />
    </form>
  </main>
</template>
