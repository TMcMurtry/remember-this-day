import { useState } from "react"

export default function EntrySubmissionForm({currentUser, setCurrentUser}){
    const [entryTitle, setEntryTitle] = useState();
    const [entryTextBody, setEntryTextBody] = useState();
    const [entryDate, setEntryDate] = useState();
    const handleTitleChange = (ev) => setEntryTitle(ev.target.value);
    const handleEntryTextChange = (ev) => setEntryTextBody(ev.target.value);
    const handleDateChange = (ev) => setEntryDate(ev.target.value);
    function entryAppend(){
        setCurrentUser(
            ...currentUser
        )
    }

    return(
        <form>
            <label htmlFor="title">
                <input name="title" id="title" type="text" value={entryTitle} onChange={handleTitleChange} placeholder="Enter Title"/>
            </label>
            <label htmlFor="entryText">
                <textarea name="entryText" id="entryText" value={entryTextBody} onChange={handleEntryTextChange} placeholder="Type your entry here" cols={30} rows={20} required/>
            </label>
            <label htmlFor="dateInput">
                <input name="dateInput" id="dateInput" type="date" value={entryDate} onChange={handleDateChange} required/>
            </label>
            <button id="entrySubmitButton" type="submit" onClick={entryAppend}>Submit Entry</button>
        </form>
    )
}