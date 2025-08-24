<script setup>
import { useTeamsStore } from '@/store/TeamsStore';
import TeamHeader from '@/components/teams/TeamHeader.vue';
import TeamMembers from '@/components/teams/TeamMembers.vue';
import TeamFooter from '@/components/teams/TeamFooter.vue';

const team = useTeamsStore();
team.fill();

</script>

<template>
    <TeamHeader @add="showModal = true" />

    <div class="place-self-center flex flex-col gap-y-3">
        <TeamMembers />
    </div>

    <TeamFooter />

    
</template>