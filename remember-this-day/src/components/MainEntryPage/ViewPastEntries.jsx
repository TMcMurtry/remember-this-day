import { useState } from "react"

export default function ViewPastEntries({currentUser, backgroundSelector, setBackgroundSelector}){
    const [entryDisplay, setEntryDisplay] = useState(false);
    const [entryButtonText, setEntryButtonText] = useState("View Past Entry!")
    const [randomEntry, setRandomEntry] = useState("");
    
    function handleEntryDisplay (){
        const randomNumberGenerate = Math.floor(Math.random() * (currentUser.entries.length))
        const randomEntry = currentUser.entries[randomNumberGenerate]
        setEntryDisplay(randomEntry)
        setEntryButtonText("View Another Entry!")
        setBackgroundSelector(backgroundSelector + 1)
    }

    async function entryDisplayFunction(){
        try {
        const response = await fetch("http:localhost:8080/categories");
        const data = await response.json();
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status} - could not connect to the database`)
        }
        setRandomCategory(Math.floor(Math.random() * (data.length)));
        const promptsResponse = await fetch("http:localhost:8080/prompts/" + randomCategory);
        const promptsData = await promptsResponse.json();
        if (!promptsResponse.ok){
            throw new Error(`HTTP error: ${response.status} - could not connect to the database`)
        }
        
        } catch (error){

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
                <button name="viewPastEntries" id="viewPastEntries" type="button" onClick={handleEntryDisplay}>{entryButtonText}</button>
            </label>
        </div>
    )
}