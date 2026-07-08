import { useState } from "react"

export default function EntrySubmissionForm(){
    const [entryTitle, setEntryTitle] = useState();
    const [entryTextBody, setEntryTextBody] = useState();
    const [entryDate, setEntryDate] = useState();
    function entryAppend(){

        return(
        )
    }

    return(
        <form>
            <label htmlFor="title">
                <input name="title" id="title" type="text" value={entryTitle} placeholder="Enter Title"/>
            </label>
            <label htmlFor="entryText">
                <textarea name="entryText" id="entryText" value={entryTextBody}placeholder="Type your entry here" cols={30} rows={20} required/>
            </label>
            <label htmlFor="dateInput">
                <input name="dateInput" id="dateInput" type="date" value={entryDate} required/>
            </label>
            <button id="entrySubmitButton" type="submit" onClick={entryAppend}>Submit Entry</button>
        </form>
    )
}