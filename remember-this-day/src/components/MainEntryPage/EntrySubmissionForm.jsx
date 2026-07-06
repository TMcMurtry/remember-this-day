export default function EntrySubmissionForm(){

    return(
        <form>
            <label htmlFor="title">
                <input name="title" id="title" type="text"  placeholder="Enter Title"/>
            </label>
            <label htmlFor="entryText">
                <textarea name="entryText" id="entryText" placeholder="Type your entry here" cols={30} rows={20} required/>
            </label>
            <label htmlFor="dateInput">
                <input name="dateInput" id="dateInput" type="date" required/>
            </label>
        </form>
    )
}