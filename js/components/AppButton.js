export default {
    template: `
        <button class="bg-gray-200 hover:bg-gray-400 border rounded px-2 py-1 disabled:cursor-not-allowed" :disabled="processing">
            <slot />
        </button>
    `,

    data() {
        return {
            processing: true
        };
    }
}