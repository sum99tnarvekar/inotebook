import React, {useContext} from 'react';
import noteContext from "../context/noteContext";
import AlertContext from "../context/AlertContext";

export default function DeleteNotemodal(props) {
    const { triggerAlert } = useContext(AlertContext);
    const { deleteNote } = useContext(noteContext)
    const handleDelete = () =>{
        console.log(deleteNote);
        deleteNote(props.noteId);
        props.onClick("delete")
        triggerAlert("Note is deleted successfully.")
    }
    if (!props.show) return null;
    return (
        <div id="popup-modal" tabIndex="-1"
             className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
            <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" onClick={() => props.onClick("delete")}
                        className="absolute top-3 end-2.5 text-black bg-transparent hover:bg-red-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="popup-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
                    <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <h3 className="mb-3 text-lg font-normal text-black dark:text-gray-400">Are you sure you want
                        to delete this product?</h3>
                    <button data-modal-hide="popup-modal" type="button" onClick={handleDelete}
                            className="mr-1 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                        Yes, I'm sure
                    </button>
                    <button data-modal-hide="popup-modal" type="button" onClick={() => props.onClick("delete")}
                            className="ml-1 py-2.5 px-5 text-sm font-medium text-black focus:outline-none bg-slate-50 rounded-lg border border-gray-400 hover:bg-slate-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white">No,
                        cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
