<script setup>
import { computed } from 'vue';
import team from "@/team.json"

import TeamHeader from '@/components/teams/TeamHeader.vue';
import TeamMembers from '@/components/teams/TeamMembers.vue';
import TeamFooter from '@/components/teams/TeamFooter.vue';

const remainingSpots = computed(()=> {
    return team.spots - team.members.length
})

console.log(remainingSpots)
</script>

<template>
    <TeamHeader :team="team" :remainingSpots="remainingSpots" />

    <div class="place-self-center flex flex-col gap-y-3">
        <TeamMembers :team="team" :remainingSpots="remainingSpots" />
    </div>

    <TeamFooter :team="team" />
</template>