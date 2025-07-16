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

            ],

            newAssignment: '',
        }
    },

    created() {
        fetch('https://silver-winner-xjwqq45wgxv29p4g-3000.app.github.dev/assignments')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.assignments = data
        });
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