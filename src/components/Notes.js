import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/noteContext";
import NoteItem from "./NoteItem";

export default function Note() {
    const [notesArray , setNotesArray] = useState([])
    const { note } = useContext(noteContext);
    const { title, description, tag } = note;

    useEffect(() => {
        setNotesArray((prevNotesArray) => prevNotesArray.concat(note),
    );
    }, [note]);


    return (
        <div>
            {notesArray.map((noteItem, index) => (
                <NoteItem key={index} title={noteItem.title} description={noteItem.description} tag={noteItem.tag} />
            ))}
        </div>
    );
}
