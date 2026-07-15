import EntrySubmissionForm from './EntrySubmissionForm'
import ViewPastEntries from './ViewPastEntries'
import ViewPrompts from './Prompts/ViewPrompts'
import './EntrySubmission.css'
import { useState } from 'react'

export default function EntrySubmission({currentUser, setCurrentUser}){
    const [backgroundSelector, setBackgroundSelector] = useState(0);
    const [promptDisplay, setPromptDisplay] = useState(false);
    const [promptButtonText, setPromptButtonText] = useState("View Writing Prompts")
    //add logout link
    const backgroundClasses = [
        "entrySubmissionBackground1",
        "entrySubmissionBackground2",
        "entrySubmissionBackground3",
        "entrySubmissionBackground4"
    ];

    const selectedBackgroundClass = backgroundClasses[backgroundSelector] || backgroundClasses[3];
    
    return(
        <div className={`entrySubmission ${selectedBackgroundClass}`}> 
            <ViewPastEntries currentUser={currentUser} backgroundSelector={backgroundSelector} setBackgroundSelector={setBackgroundSelector}/>
            <ViewPrompts currentUser={currentUser} promptDisplay={promptDisplay} setPromptDisplay={setPromptDisplay}
            promptButtonText={promptButtonText} setPromptButtonText={setPromptButtonText}/>
            <EntrySubmissionForm currentUser={currentUser} setCurrentUser={setCurrentUser} 
            backgroundSelector={backgroundSelector} setBackgroundSelector={setBackgroundSelector}
            setPromptDisplay={setPromptDisplay} setPromptButtonText={setPromptButtonText}/>
        </div>
    )
}