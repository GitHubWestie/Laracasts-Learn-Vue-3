<script setup>
import { counter } from '@/store/counterStore';
</script>

<template>
    <div>
        <h1>{{ counter.count }}</h1>

        <button @click="counter.increment">Increment</button>
    </div>
</template>