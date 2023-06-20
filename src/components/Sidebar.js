import {SidebarNote} from "./SidebarNote";


export const Sidebar = ({notesSlim, setActiveNote, getSlimNotes, lodeMoreSlimNotes}) => {
    const handleLoadNotes = () => {
        if (notesSlim.length === 0) {
            getSlimNotes();
        } else {
            lodeMoreSlimNotes();
        }
    }

    return (<div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-header">
                    <h1>Your Notes</h1>
                </div>
                <div className="sidebar-notes">
                    {notesSlim.map((note) => (
                        <SidebarNote
                            noteSlim={note}
                            setActiveNote={setActiveNote}
                            getSlimNotes={getSlimNotes}
                        />
                    ))}
                    <button onClick={handleLoadNotes}>load notes</button>
                </div>
            </div>
        </div>

    )
}
