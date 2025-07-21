import Assignments from "./Assignments.js"
import Panel from "./Panel.js"

export default {
    components: {
        Assignments,
        Panel,
    },

    template: `
        <div class="grid gap-6">
            <Assignments></Assignments>

            <Panel>
            
                <template v-slot:heading>
                    Hello world!
                </template>
                     
                This is the default content
   
            </Panel>

            <Panel>
                     
                This is the default content
   
            </Panel>
            
            <Panel theme="light">
                
                <template v-slot:heading>
                    Footer 🦶🏻
                </template>

                This is the default content
            
                <template v-slot:footer>
                    Click here to learn more...
                </template>
   
            </Panel>
        </div>
    `,
}