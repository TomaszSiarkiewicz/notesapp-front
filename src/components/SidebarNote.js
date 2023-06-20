import axios from "axios";
import {MdDeleteForever} from "react-icons/md";

export const SidebarNote = ({noteSlim, setActiveNote, getSlimNotes}) => {
    const handleSetActive = async () => {
        const response = (await axios.get('http://ec2-18-196-134-224.eu-central-1.compute.amazonaws.com:8000/note/' + noteSlim.id, {
            params: {
                page: 0
            }
        })).data;
        setActiveNote(response);

    }
    const handleDeleteNote = async (id) => {
        await axios.delete('http://ec2-18-196-134-224.eu-central-1.compute.amazonaws.com:8000/note/' + id)
        setActiveNote(null)
        getSlimNotes();
    };
    return (
        <div onClick={handleSetActive}
             className="sidebar-note">
            <strong>{noteSlim.title}</strong>
            <MdDeleteForever
                className='delete-icon'
                size='1.3em'
                onClick={() => handleDeleteNote(noteSlim.id)}
            />
        </div>
    )
}