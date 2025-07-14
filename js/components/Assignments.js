import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },

    template: `
        <section class="space-y-6">
            <!-- Incomplete Asignments -->
            <AssignmentList title="Assignments" :assignments="filters.incomplete" />

            <!-- Completed Assignments -->
            <AssignmentList title="Completed Assignments" :assignments="filters.completed" />

            <AssignmentCreate @add="add" />
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
        add(assignment) {
            this.assignments.push({
                name: assignment,
                complete: false,
                id: this.assignments.length + 1,
            });
        }
    }
}