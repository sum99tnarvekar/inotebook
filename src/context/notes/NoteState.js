import React, {useState} from "react";
import noteContext from '../noteContext'

const NoteState = (props) => {
    const [userAuthToken , setuserAuthToken] = useState(null)
    const URL = "http://localhost:4000/";
    const fetchNoteEndpoint = "api/note/fetchallnotes"
    const addNoteEndpoint = "api/note/addnote";
    const updateEndpoint = "api/note/updatenote/";
    const deleteEndpoint = "api/note/deletenote/";

    const [fetchNoteArray, setFetchNotesArray] = useState([]);

    const showAlert = () => {
        const myDiv = document.getElementById('alertbox');
        myDiv.classList.remove('hidden');
        myDiv.classList.add('alert-box', 'show');
        setTimeout(() => {
            myDiv.classList.remove('show');
            myDiv.classList.add('hidden');
        }, 3000); // 3 seconds
    }

    const contextData = {
        title: "",
        description: "",
        tag: ""
    }

    const [note, setNote] = useState(contextData)

    const fetchNote = async () => {
        const fetchNoteurl = URL + fetchNoteEndpoint;
        const headers = new Headers();
        headers.append('auth-token', userAuthToken);
        const options = {
            method: 'GET',
            headers: headers
        };
    
        try {
            const response = await fetch(fetchNoteurl, options);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json();
            setFetchNotesArray(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    const addNote = async (newNote) => {
        const addNoteurl = URL + addNoteEndpoint;
        const headers = new Headers();
        headers.append('auth-token', userAuthToken);
        headers.append('Content-Type', 'application/json');
        const body = JSON.stringify({
            title: newNote.title,
            description: newNote.description,
            tag: newNote.tag
        });

        const options = {
            method: 'POST',
            headers: headers,
            body: body
        };

        try {
            const response = await fetch(addNoteurl, options);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return await response.json()
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const updateNote = async (id , newNote) => {
        const updateNoteurl = URL + updateEndpoint + id;
        const headers = new Headers();
        headers.append('auth-token', userAuthToken);
        headers.append('Content-Type', 'application/json');
        const body = JSON.stringify({
            title: newNote.title,
            description: newNote.description,
            tag: newNote.tag
        });
        const options = {
            method: 'POST',
            headers: headers,
            body: body
        };
        try {
            const response = await fetch(updateNoteurl, options);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return await response.json()
        } catch (error) {
            console.error('Error:', error);
        }

        setNote(newNote);
    };

    const deleteNote = async (id) => {
        // console.log("id " + id);
        const deleteNoteurl = URL + deleteEndpoint + id;
        const headers = new Headers();
        headers.append('auth-token', userAuthToken);
        const options = {
            method: 'POST',
            headers: headers
            };
        try{
            const response = await fetch(deleteNoteurl , options);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return await response.json()
        }catch (error) {
            console.error('Error:', error);
        }

    }
    

    return (
        <noteContext.Provider value={{ note, updateNote, fetchNote, addNote, deleteNote , fetchNoteArray , setuserAuthToken , showAlert }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;