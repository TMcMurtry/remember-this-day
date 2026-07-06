export default function EntrySubmission(){

    return(
        <form>
            <label for="title">
                <input name="title" id="title" type="text"  placeholder="Enter Title">Title</input>
            </label>
            <label for="entrytext">
                <textarea name="entrytext" id="entrytext" placeholder="Type your entry here" cols={30} rows={20} required>Entry Text</textarea>
            </label>
            <label for="dateinput">
                <input name="dateinput" id="dateinput" type="date" required>Date</input>
            </label>
        </form>
    )
}