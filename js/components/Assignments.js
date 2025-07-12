import AssignmentList from "./AssignmentList.js"

export default {
    components: {
        AssignmentList,
    },

    template: `
        <section class="space-y-6">
            <!-- Incomplete Asignments -->
            <AssignmentList title="Assignments" :assignments="filters.incomplete" />

            <!-- Completed Assignments -->
            <AssignmentList title="Completed Assignments" :assignments="filters.completed" />

            <form @submit.prevent="add">
                <input v-model="newAssignment" type="text" placeholder="Add an assignment" class="border border-gray-600 rounded-md px-2 py-1">
                <button type="submit" class="border border-gray-600 rounded-md px-3 py-1 ml-1">Add</button>
            </form>
        </section>

    `,

    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 },
            ],

            newAssignment: '',
        }
    },

    computed: {
        filters() {
            return {
                incomplete: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete),
            }
        }
    },

    methods: {
        add() {
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1,
            })
        }
    }
}