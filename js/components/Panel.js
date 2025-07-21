export default {
    template: `
        <div :class="[theme == 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black', 'p-4 border rounded-lg']">
            <h2 v-if="$slots.heading" class="font-bold mb-4">
                <slot name="heading"/>
            </h2>

            <slot />

            <h2 v-if="$slots.footer" class="border-gray-600 border-t mt-4 pt-4 text-sm">
                <slot name="footer"/>
            </h2>
        </div>
    `,

    props: {
        theme: {
            type: String,
            default: 'dark',
        }
    }
}