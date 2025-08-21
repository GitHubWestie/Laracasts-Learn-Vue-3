import { ref, watch } from "vue"

export function useStorage(key) {
    let storedValue = localStorage.getItem(key)

    let value = ref(storedValue)

    watch(value, (newVal) => {
        if (newVal === '') {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, newVal)
        }
    })

    return value
}