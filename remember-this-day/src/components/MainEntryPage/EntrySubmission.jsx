import EntrySubmissionForm from './EntrySubmissionForm'
import ViewPastEntries from './ViewPastEntries'
import ViewPrompts from './Prompts/ViewPrompts'
import './EntrySubmission.css'
import { useState } from 'react'

export default function EntrySubmission({currentUser, setCurrentUser}){
    const [backgroundSelector, setBackgroundSelector] = useState(0);
    //add logout link
    const backgroundClasses = [
        "entrySubmissionBackground1",
        "entrySubmissionBackground2",
        "entrySubmissionBackground3",
        "entrySubmissionBackground4",
        "entrySubmissionBackground5"
    ];

    const selectedBackgroundClass = backgroundClasses[backgroundSelector] || backgroundClasses[4];
    
    return(
        <div className={`entrySubmission ${selectedBackgroundClass}`}> 
            <ViewPastEntries currentUser={currentUser} backgroundSelector={backgroundSelector} setBackgroundSelector={setBackgroundSelector}/>
            <ViewPrompts currentUser={currentUser} />
            <EntrySubmissionForm currentUser={currentUser} setCurrentUser={setCurrentUser} 
            backgroundSelector={backgroundSelector} setBackgroundSelector={setBackgroundSelector}/>
        </div>
    )
}