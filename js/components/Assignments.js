import AssignmentList from "./AssignmentList.js"

export default {
    components: {
        AssignmentList,
    },

    template: `
        <!-- Asignments -->
        <AssignmentList title="Assignments" :assignments="filters.incomplete"></AssignmentList>
        <AssignmentList title="Completed Assignments" :assignments="filters.completed"></AssignmentList>
    `,

    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 },
            ]
        }
    },

    computed: {
        filters() {
            return {
                incomplete: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete),
            }
        }
    }
}