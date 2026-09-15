import { useState } from "react"

export default function ViewPastEntries({currentUser, backgroundSelector, setBackgroundSelector}){
    const [entryDisplay, setEntryDisplay] = useState(false);
    const [entryButtonText, setEntryButtonText] = useState("View Past Entry!")
    const [randomEntry, setRandomEntry] = useState("");
    const [entryDisplayFailure, setEntryDisplayFailure] = useState(false);
    const [entryFailureMessage, setEntryFailureMessage] = useState("");
    
    function handleEntryDisplay (){
        const randomNumberGenerate = Math.floor(Math.random() * (currentUser.entries.length))
        const randomEntry = currentUser.entries[randomNumberGenerate]
        setEntryDisplay(randomEntry)
        setEntryButtonText("View Another Entry!")
        setBackgroundSelector(backgroundSelector + 1)
    }

    function random(input){
        return Math.floor(Math.random() * (input.length))
    }

    async function entryDisplayFunction(){
        try {
        const response = await fetch("http:localhost:8080/entries/user" + currentUser.id);
        const data = await response.json();
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status} - could not connect to the database`)
        }
        
        
        } catch (error){
            setEntryDisplayFailure(true);
            setEntryFailureMessage(error);
        }
    }   

    return(
        <div className="pastEntryDisplay">
            {entryDisplay && 
            <div className="entryDisplay">
                <h2>Date: {entryDisplay.date}</h2>
                {entryDisplay.title && <h3>Title: {entryDisplay.title}</h3>}
                <p>Entry: <br/> {entryDisplay.entry}</p>
                </div>}
            <label htmlFor="viewPastEntries">
                <button name="viewPastEntries" id="viewPastEntries" type="button" onClick={entryDisplayFunction}>{entryButtonText}</button>
            </label>
            {entryDisplayFailure && <p>{entryFailureMessage}</p>}
        </div>
    )
}