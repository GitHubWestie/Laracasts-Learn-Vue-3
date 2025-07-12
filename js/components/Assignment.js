export default {
    template: `
        <li>
            <label class="flex justify-between">
                {{ assignment.name }}
                <input type="checkbox" v-model="assignment.complete">
            </label>
        </li>
    `,

    props: {
        assignment: Object,
    }
}