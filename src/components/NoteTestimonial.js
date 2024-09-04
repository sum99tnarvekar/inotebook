import React, { useContext } from "react";
import noteContext from "../context/noteContext";
import TestimonialItem from "./TestimonialItem";

export default function NoteTestimonial() {
    const { fetchNoteArray } = useContext(noteContext); //Destructirng in IDLE way

    // Without destructure
    // const contextValue = useContext(noteContext); 
    // const fetchNoteArray = contextValue.fetchNoteArray;
    // console.log( fetchNoteArray)
    
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Read Your Notes
                </h2>
                <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
                    {fetchNoteArray.map(note => (
                        <TestimonialItem noteid={note._id}  title={note.title} description={note.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}