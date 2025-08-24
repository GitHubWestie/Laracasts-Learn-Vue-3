<script setup>
import TeamMember from './TeamMember.vue';

import { useTeamsStore } from '@/store/TeamsStore';
const team = useTeamsStore();

</script>

<template>
    <table class="table-fixed border-spacing-2 border-separate">
        <thead>
            <th class="text-left px-6 py-2">Name</th>
            <th class="text-left px-6 py-2">Email</th>
            <th class="text-left px-6 py-2">Status</th>
        </thead>
        <tbody>
            <TeamMember
                v-for="member in team.members"
                :name="member.name"
                :email="member.email"
                :status="member.status"
            />
        </tbody>
    </table>

    <p v-show="team.remainingSpots === 0" class="text-right text-gray-600 italic">There are no remaining team spots. Upgrade to add more.</p>
</template>