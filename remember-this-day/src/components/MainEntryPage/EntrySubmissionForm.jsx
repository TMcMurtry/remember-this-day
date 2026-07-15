import { useState } from "react"

export default function EntrySubmissionForm({currentUser, setCurrentUser, backgroundSelector, setBackgroundSelector}){
    const [entryTitle, setEntryTitle] = useState("");
    const [entryTextBody, setEntryTextBody] = useState("");
    const [entryDate, setEntryDate] = useState("");
    const handleTitleChange = (ev) => setEntryTitle(ev.target.value);
    const handleEntryTextChange = (ev) => setEntryTextBody(ev.target.value);
    const handleDateChange = (ev) => setEntryDate(ev.target.value);

    function handleEntryAppend(ev){
        ev.preventDefault();
        const newEntry = { title: entryTitle, date: entryDate, entry: entryTextBody };
        setCurrentUser({...currentUser, entries:[...currentUser.entries, newEntry]});
        setEntryTitle("");
        setEntryTextBody("");
        setEntryDate("");
        setBackgroundSelector(backgroundSelector + 4)
    };


    return(
        <form className="entrySubmissionForm" onSubmit={handleEntryAppend}>
            <h2>Submit a new journal entry!</h2>
            <label htmlFor="title">Title: <br/>
                <input name="title" id="title" type="text" value={entryTitle} onChange={handleTitleChange} placeholder="Enter Title"/>
            </label>
            <label htmlFor="entryText">
                <textarea name="entryText" id="entryText" value={entryTextBody} onChange={handleEntryTextChange} 
                cols={40} rows={6} placeholder="Type your entry here" required/>
            </label>
            <label htmlFor="dateInput">Date: <br/>
                <input name="dateInput" id="dateInput" type="date" value={entryDate} onChange={handleDateChange} required/>
            </label>
            <button id="entrySubmitButton" type="submit" >Submit Entry</button>
        </form>
    )
}