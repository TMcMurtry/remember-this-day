import EntrySubmissionForm from './EntrySubmissionForm'
import ViewPastEntries from './ViewPastEntries'
import ViewPrompts from './Prompts/ViewPrompts'

export default function EntrySubmission(){

    return(
        <div>
            <ViewPastEntries/>
            <ViewPrompts/>
            <EntrySubmissionForm/>
        </div>
    )
}