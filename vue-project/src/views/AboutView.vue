<script setup>
import { useFlash } from '@/composables/useFlash';
import { counter } from '@/store/counterStore';

let { flash } = useFlash();

</script>

<template>
  <div>
    <p>
      <button @click="flash('Counter is currently', JSON.stringify(counter.count), 'info')">Show current count</button>
    </p>
  </div>
</template>
