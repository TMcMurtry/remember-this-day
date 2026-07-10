import { useState } from "react"
import UserData from '../../UserData.json'

export default function EntrySubmissionForm({currentUser, setCurrentUser}){
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
    };

    //Create an object using the data
    //take id of user
    //find matching id of userData
    //append data to json file
    //increment numberofEntries count

    return(
        <form onSubmit={handleEntryAppend}>
            <label htmlFor="title">
                <input name="title" id="title" type="text" value={entryTitle} onChange={handleTitleChange} placeholder="Enter Title"/>
            </label>
            <label htmlFor="entryText">
                <textarea name="entryText" id="entryText" value={entryTextBody} onChange={handleEntryTextChange} placeholder="Type your entry here" cols={30} rows={20} required/>
            </label>
            <label htmlFor="dateInput">
                <input name="dateInput" id="dateInput" type="date" value={entryDate} onChange={handleDateChange} required/>
            </label>
            <button id="entrySubmitButton" type="submit" >Submit Entry</button>
        </form>
    )
}