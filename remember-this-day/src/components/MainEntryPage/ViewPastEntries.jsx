import { useState } from "react"

export default function ViewPastEntries({currentUser}){
    const [entryDisplay, setEntryDisplay] = useState(false);
    const [entryButtonText, setEntryButtonText] = useState("View Past Entry!")

    function handleEntryDisplay (){
        const randomNumberGenerate = Math.floor(Math.random() * (currentUser[0].entries.length))
        const randomEntry = currentUser[0].entries[randomNumberGenerate]
        setEntryDisplay(randomEntry)
        setEntryButtonText("View Another Entry!")
    }
    return(
        <div>
            {entryDisplay && 
            <div>
                <h2>Date: {entryDisplay.date}</h2>
                {entryDisplay.title && <h3>Title: {entryDisplay.title}</h3>}
                <p>Entry: <br/> {entryDisplay.entry}</p>
                </div>}
            <label htmlFor="viewPastEntries">
                <button name="viewPastEntries" id="viewPastEntries" type="button" onClick={handleEntryDisplay}>{entryButtonText}</button>
            </label>
        </div>
    )
}