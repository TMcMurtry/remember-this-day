import { useState } from 'react';
import WritingPrompts from './WritingPrompts.json'


export default function ViewPrompts({promptDisplay, setPromptDisplay, promptButtonText, setPromptButtonText}){
    const [randomCategory, setRandomCategory] = useState("");
    const [randomPrompt, setRandomPrompt] = useState("");
    const [errorDisplay, setErrorDisplay] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    function handlePromptChange(){
    const randomNumberGenerate = Math.floor(Math.random() * (WritingPrompts.length))
    const randomPrompt = WritingPrompts[randomNumberGenerate]
    setPromptDisplay(randomPrompt)
    setPromptButtonText("View Another Category")
    }

    async function promptDisplayFunction(){
        try {
        const response = await fetch("http:localhost:8080/categories");
        const data = await response.json();
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status} - could not connect to the database`)
        }
        setRandomCategory(Math.floor(Math.random() * (data.length)));
        const promptsResponse = await fetch("http:localhost:8080/prompts/category/" + randomCategory);
        const promptsData = await promptsResponse.json();
        if (!promptsResponse.ok){
            throw new Error(`HTTP error: ${response.status} - could not connect to the database`)
        }
        setRandomPrompt(Math.floor(Math.random() * (promptsData.length)));
        setPromptDisplay(true);
        } catch (error){
            setErrorDisplay(true);
            setErrorMessage(error);
        }
    }   

    return(
        <div className='promptDisplayArea'>
            { promptDisplay && <div className='promptDisplay'><h2>Prompt Category: {promptDisplay.category}</h2>
            <ul>
                {promptDisplay.prompts.map((prompt, index) =>
                     <li key={index} >{prompt}</li>)}
            </ul>
            </div>}
            <label htmlFor="viewPrompts">
                <button name="viewPrompts" id="viewPrompts" type="button" onClick={promptDisplayFunction} >{promptButtonText}</button>
            </label>
            {errorDisplay && <p>{errorMessage}</p>}
        </div>
    )
}