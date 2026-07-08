import EntrySubmissionForm from './EntrySubmissionForm'
import ViewPastEntries from './ViewPastEntries'
import ViewPrompts from './Prompts/ViewPrompts'

export default function EntrySubmission({currentUser, setCurrentUser}){
    //add logout link
    return(
        <div>
            <ViewPastEntries currentUser={currentUser} />
            <ViewPrompts currentUser={currentUser} />
            <EntrySubmissionForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </div>
    )
}