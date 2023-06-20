import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import {EditNote} from "./components/EditNote";
import {NewNote} from "./components/NewNote";
import {Footer} from "./components/Footer";
import {useState} from "react";
import axios from "axios";
import React from "react";

function App() {
    const [activeNote, setActiveNote] = useState();
    const [notesSlim, setNotesSlim] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const [totalElements, setTotalElements] = useState(false)
    const updateActiveNote = (key, value) => {
        setActiveNote({
            ...activeNote,
            [key]: value,
            date: Date.now()
        })
    }
    const getSlimNotes = async () => {
        const response = await axios.get('http://ec2-18-196-134-224.eu-central-1.compute.amazonaws.com:8000/notes/paged', {
            params: {
                page: 0
            }
        });
        let content = response.data.content;
        setNotesSlim(content);
        setTotalElements(response.data.totalElements);
        setCurrentPage(1)
    }
    const lodeMoreSlimNotes = async () => {
        if (notesSlim.length < totalElements) {
            const response = await axios.get('/notes/paged', {
                params: {
                    page: currentPage
                }
            });

            let content = response.data.content;
            setNotesSlim(notesSlim.concat(content));
            setCurrentPage(currentPage + 1)
        }
    }
    return (
        <div className="container">
            <Header/>
            <div className="main">
                <Sidebar
                    lodeMoreSlimNotes={lodeMoreSlimNotes}
                    notesSlim={notesSlim}
                    setActiveNote={setActiveNote}
                    getSlimNotes={getSlimNotes}
                    currentPage={currentPage}
                />
                <div className="submain">
                    <EditNote
                        activeNote={activeNote}
                        updateActiveNote={updateActiveNote}
                        setNotesSlim={setNotesSlim}
                        getSlimNotes={getSlimNotes}
                    />
                    <NewNote
                        setNotesSlim={setNotesSlim}
                        getSlimNotes={getSlimNotes}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
