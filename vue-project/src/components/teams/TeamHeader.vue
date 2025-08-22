<script setup>
defineProps({
    team: Object,
    remainingSpots: Number,
})
</script>

<template>
    <header class="flex justify-between">
        <div>
            <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
                :disabled="remainingSpots === 0">Add Member ({{ remainingSpots }} Spots Left)</button>
        </div>
        <div>
            <div class="inline-flex items-center text-3xl relative">
                <h3>{{ team.name }}</h3>
                <div
                    class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2">
                    {{ remainingSpots }}</div>
            </div>
        </div>
    </header>
</template>