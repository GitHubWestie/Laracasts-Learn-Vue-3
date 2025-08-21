<script setup>
import { useFlash } from '@/composables/useFlash';

let { flash } = useFlash();

</script>

<template>
  <div>
    <p>
      <button @click="flash('Information', 'It works!', 'info')">Click me!</button>
    </p>
  </div>
</template>
