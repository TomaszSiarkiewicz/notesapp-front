import axios from "axios";


export const EditNote = ({activeNote, updateActiveNote, getSlimNotes}) => {
    const onEditField = (key, value) => {
        updateActiveNote(key, value)
    };
    const handleUpdateClick = async () => {
        let title = activeNote.title.trim();
        if (title.length > 0) {
            const response = await axios.put('http://ec2-18-196-134-224.eu-central-1.compute.amazonaws.com:8000/note', {
                noteId: activeNote.noteId,
                title: activeNote.title,
                content: activeNote.content
            });
            getSlimNotes();
        } else {

            alert("Title required")
        }
    }
    if (!activeNote) {
        return <strong className="no-active-notes">Pick a note to see more and edit...</strong>

    }
    return (<div className="note-edit">
            <textarea
                className="title"
                placeholder="title..."
                value={activeNote.title}
                onChange={(e) => onEditField("title", e.target.value)}
            ></textarea>
            <textarea
                className="content"
                placeholder="type Your note..."
                value={activeNote.content}
                onChange={(e) => onEditField("content", e.target.value)}
            ></textarea>
            <div className="note-edit-footer">
                <small>{activeNote.data}</small>
                <button onClick={handleUpdateClick}>update</button>
            </div>
        </div>
    )
}
