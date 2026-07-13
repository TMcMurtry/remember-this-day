import EntrySubmissionForm from './EntrySubmissionForm'
import ViewPastEntries from './ViewPastEntries'
import ViewPrompts from './Prompts/ViewPrompts'
import './EntrySubmission.css'

export default function EntrySubmission({currentUser, setCurrentUser}){
    //add logout link
    return(
        <div className='entrySubmission'>
            <ViewPastEntries currentUser={currentUser} />
            <ViewPrompts currentUser={currentUser} />
            <EntrySubmissionForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </div>
    )
}