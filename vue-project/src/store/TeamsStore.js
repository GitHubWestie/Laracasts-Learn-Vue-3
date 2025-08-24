import { defineStore } from "pinia";

export const useTeamsStore = defineStore('team', {
    state: () => ({
        name: '',
        spots: 0,
        members: [],
    }),

    actions: {
        async fill() {
            const data = await import('@/team.json')
            this.$state = data.default;
        }
    },

    getters: {
        remainingSpots() {
            return this.spots - this.members.length;
        }
    }
});