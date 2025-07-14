export default {
    template: `
        <form @submit.prevent="add">
            <input v-model="newAssignment" type="text" placeholder="Add an assignment" class="border border-gray-600 rounded-md px-2 py-1">
            <button type="submit" class="border border-gray-600 rounded-md px-3 py-1 ml-1 hover:cursor-pointer hover:bg-gray-600 transition-colors duration-300">Add</button>
        </form>
    `,

    data() {
        return {
            newAssignment: '',
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    }
}