import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        Assignment,
        AssignmentTags,
    },

    template: `
        <section v-show="assignments.length" class="w-65">
            <div class="flex justify-between items-start mb-2">
                <div class="flex gap-1">
                    <h2 class="font-bold">{{ title }}</h2>
                    <span class="border border-gray-600 rounded-full px-2">{{ assignments.length }}</span>
                </div>
                <button v-show="canToggle" @click="$emit('toggle')" class="w-5 h-5 hover:cursor-pointer self-start">&times;</button>
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

            <slot></slot>
        </section>
    `,

    props: {
        assignments: Array,
        title: String,
        canToggle: {
            type: Boolean,
            default: false
        },
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