<script setup>
import { useTeamsStore } from '@/store/TeamsStore';
import TeamHeader from '@/components/teams/TeamHeader.vue';
import TeamMembers from '@/components/teams/TeamMembers.vue';
import TeamFooter from '@/components/teams/TeamFooter.vue';
import Modal from '@/components/teams/Modal.vue';
import { ref } from 'vue';

const team = useTeamsStore();
team.fill();

let showModal = ref(false);

</script>

<template>
    <TeamHeader @add="showModal = true" />

    <div class="place-self-center flex flex-col gap-y-3">
        <TeamMembers />
    </div>

    <TeamFooter />

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
</template>