<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';
import { useTeamsStore } from '@/store/TeamsStore';

const team = useTeamsStore();
let showModal = ref(false);
</script>

<template>
    <button
        @click="showModal = true"
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="team.remainingSpots === 0">
        Add Member ({{ team.remainingSpots }} Spots Left)
    </button>
    <Teleport to="body">
        <Modal :show="showModal" @close="showModal = false">
            <template #default>
                <p>Add a new team member</p>
                <form action="" class="mt-6">
                    <div class="flex gap-2">
                        <input type="email" name="" id="" placeholder="Email address..." class="flex-1" />
                        <button type="submit">Add</button>
                    </div>
                </form>
            </template>
            <template #footer>Cancel</template>
        </Modal>
    </Teleport>
</template>