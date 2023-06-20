import {useState} from "react";
import axios from "axios";

export const NewNote = ({getSlimNotes}) => {
    const [noteTitle = '', setNoteTitle] = useState();
    const [noteContent = '', setNoteContent] = useState();
    const handleSaveClick = () => {
        if (noteTitle.trim().length > 0) {
            sendNewNote(noteTitle, noteContent);
            getSlimNotes();
            setNoteContent('');
            setNoteTitle('');
        }else {
            alert("Title required")
        }
    }
    const sendNewNote = async (noteTitle, noteContent) => {
        const response = await axios.post('http://ec2-18-196-134-224.eu-central-1.compute.amazonaws.com:8000/note', {title: noteTitle, content: noteContent});

    }
    const handleChangeTitle = (event) => {
        setNoteTitle(event.target.value)
    }
    const handleChangeContent = (event) => {
        setNoteContent(event.target.value)
    }

    return (<div className="note-new" >
            <textarea className="title"
                placeholder="title..."
                value={noteTitle}
                onChange={handleChangeTitle}
            ></textarea>
            <textarea
                className="content"
                placeholder="type Your note..."
                value={noteContent}
                onChange={handleChangeContent}
            ></textarea>
            <div className="note-new-footer">
                <button onClick={handleSaveClick}>save</button>
            </div>
        </div>
    )
}