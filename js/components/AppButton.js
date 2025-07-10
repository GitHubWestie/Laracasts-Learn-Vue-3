export default {
    template: `
        <button
            :class="{
                'border rounded px-2 py-1 disabled:cursor-not-allowed': true,
                'bg-blue-500 hover:bg-blue-600 text-white': type === 'primary',
                'bg-green-500 hover:bg-green-600 text-white': type === 'secondary',
                'bg-gray-500 hover:bg-gray-600 text-white': type === 'muted',
                'is-loading': processing,
            }"
            :disabled="processing"
            >
            <slot />
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary'
        },

        processing: {
            type: Boolean,
            default: false,
        }
    },
}