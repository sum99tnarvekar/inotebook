import React, { useContext, useState } from "react";
import noteContext from "../context/noteContext";
import {useNavigate} from "react-router-dom";
import AlertContext from "../context/AlertContext";

export default function NoteForm() {
    const navigate = useNavigate();
    const { note } = useContext(noteContext);
    const [formNote, setFormNote] = useState(note);
    const {addNote} = useContext(noteContext)
    const { triggerAlert } = useContext(AlertContext);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormNote({ ...formNote, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const addNoteResponse = addNote(formNote);
        triggerAlert(`${addNoteResponse.title} is created successfully`)
        navigate('/')
    }

    return (
        <div className="relative flex justify-center items-center h-screen bg-gray-50">
            <div className="relative w-full max-w-md bg-white shadow-lg rounded-lg p-8 z-10">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Note Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                            value={formNote.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2"
                               htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                            value={formNote.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2"
                               htmlFor="category">Category</label>
                        <select
                            id="category"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={formNote.tag}
                            onChange={handleChange}
                        >
                            <option value="General">General</option>
                            <option value="Sports">Sports</option>
                            <option value="Health">Health</option>
                            <option value="Business">Business</option>
                            <option value="Technology">Technology</option>
                            <option value="Education">Education</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Travel">Travel</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <button type="button"
                                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-sm hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300">Reset
                        </button>
                        <button type="submit"
                                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 text-white font-semibold rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-300">Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

