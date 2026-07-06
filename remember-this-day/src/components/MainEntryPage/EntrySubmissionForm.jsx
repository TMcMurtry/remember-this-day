export default function EntrySubmissionForm(){

    return(
        <form>
            <label for="title">
                <input name="title" id="title" type="text"  placeholder="Enter Title">Title</input>
            </label>
            <label for="entryText">
                <textarea name="entryText" id="entryText" placeholder="Type your entry here" cols={30} rows={20} required>Entry Text</textarea>
            </label>
            <label for="dateInput">
                <input name="dateInput" id="dateInput" type="date" required>Date</input>
            </label>
        </form>
    )
}