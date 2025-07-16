import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        Assignment,
        AssignmentTags,
    },

    template: `
        <section v-show="assignments.length">
            <div class="flex justify-between items-center mb-2">
                <h2 class="font-bold">{{ title }}</h2>
                <span class="border border-gray-600 rounded-full px-2">{{ assignments.length }}</span>
            </div>

            <AssignmentTags
                :tags="tags"
                v-model="currentTag"
                />

            <ul class="border border-gray-600 rounded-md px-4 py-3">
                <Assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                    >
                </Assignment>
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String,
    },
    
    data() {
        return {
            currentTag: 'All',
        }
    },

    computed: {
        tags() {
            return ['All', ...new Set(this.assignments.map(assignment => assignment.tag))];
        },
        filteredAssignments() {
            if (this.currentTag === 'All') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag)
        }
    }
}