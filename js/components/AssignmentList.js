import Assignment from "./Assignment.js"

export default {
    components: {
        Assignment,
    },

    template: `
        <section v-show="assignments.length">
            <div class="flex justify-between items-center mb-2">
                <h2 class="font-bold">{{ title }}</h2>
                <span class="border border-gray-600 rounded-full px-2">{{ assignments.length }}</span>
            </div>

            <div class="text-xs space-x-2 my-4">
                <span
                    v-for="tag in tags"
                    @click="currentTag = tag"
                    class="border border-gray-600 rounded-full px-2 py-1 hover:cursor-pointer hover:bg-gray-600 transition-colors duration-300"
                    :class="currentTag === tag ? 'bg-pink-600 border-white/75 hover:bg-pink-600': ''"
                    >
                    {{ tag }}
                </span>
            </div>

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