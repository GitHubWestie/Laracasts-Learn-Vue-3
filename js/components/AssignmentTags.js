export default {
    template: `
        <div class="text-xs space-x-2 my-4">
            <span
                v-for="tag in tags"
                @click="$emit('update:modelValue', tag)"
                class="border border-gray-600 rounded-full px-2 py-1 hover:cursor-pointer hover:bg-gray-600 transition-colors duration-300"
                :class="modelValue === tag ? 'bg-pink-600 border-white/75 hover:bg-pink-600': ''"
                >
                {{ tag }}
            </span>
        </div>
    `,
    
    props: {
        tags: Array,
        modelValue: String,
    },
}