import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
    // data
    state: () => ({
        count: 0, 
    }),
    // methods
    actions: {
        increment() {
            if (this.count < 10) {
                this.count++;
            }
        }
    },
    // computed properties
    getters: {
        remaining() {
            return 10 - this.count;
        }
    }
})