import React, {useContext, useState} from 'react';
import NoteContext from "../context/noteContext";

export default function UpdateNoteModal(props) {
    const { updateNote } = useContext(NoteContext)
    const [newNote, setNewNote] = useState({
        title: props.noteData.title,
        description: props.noteData.description,
        tag: props.noteData.tag
    })

    const handleChange = (e) =>{
        const { id , value } = e.target;
        setNewNote({ ...newNote, [id]: value });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        updateNote(props.noteData.noteid , newNote)
        props.onClick("update")
    }

    if (!props.show) return null;
    return (
        <div id="popup-modal" tabIndex="-1"
             className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
            <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" onClick={() => props.onClick("update")} style={{ top: '1.75rem'}}
                        className="absolute end-2.5 text-black bg-transparent hover:bg-red-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="popup-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Update your note form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                            value={newNote.title}
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
                            value={newNote.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2"
                               htmlFor="tag">Category</label>
                        <select
                            id="tag"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={newNote.tag}
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
                        <button type="submit" onClick={props.onClick}
                                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 text-white font-semibold rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-300">Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}