import { useState } from 'react';
import WritingPrompts from './WritingPrompts.json'

//generate random number

export default function ViewPrompts(){
    const [promptDisplay, setPromptDisplay] = useState(false);
    const [promptButtonText, setPromptButtonText] = useState("View Writing Prompts")

    function handlePromptChange(){
    const randomNumberGenerate = Math.floor(Math.random() * (WritingPrompts.length))
    const randomPrompt = WritingPrompts[randomNumberGenerate]
    setPromptDisplay(randomPrompt)
    setPromptButtonText("View Another Category")
    }

    return(
        <div>
            { promptDisplay && <div className='promptDisplay'><h2>Prompt Category: {promptDisplay.category}</h2>
            <ul>
                {promptDisplay.prompts.map((prompt, index) => <li key={index} >{prompt}</li>)}
            </ul>
            </div>}
            <label htmlFor="viewPrompts">
                <button name="viewPrompts" id="viewPrompts" type="button" onClick={handlePromptChange} >{promptButtonText}</button>
            </label>
        </div>
    )
}