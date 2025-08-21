import { reactive } from "vue"

export let counter = reactive({
    // state/data
    count: 0,

    // action/method
    increment() {
        if (this.count >= 10) {
            return alert('You have reached the max!');
        }
        this.count++;
    } 
})