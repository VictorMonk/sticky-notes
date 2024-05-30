import React, { useState } from 'react';

const StickyNotes = ({ note, onDelete, onSave }) => {
    const { id, title: initialTitle, content: initialContent, date: initialDate } = note;

    // Edit Mode State
    const [editMode, setEditMode] = useState(false);

    // State for Title and Content
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);

    // Original State
    const [originalTitle, setOriginalTitle] = useState(initialTitle);
    const [originalContent, setOriginalContent] = useState(initialContent);

    // Set Edit Mode
    const handleEditClick = () => {
        setEditMode(true);
        setOriginalTitle(title);
        setOriginalContent(content);
    };

    // Save Edited Changes
    const handleSaveClick = () => {
        // Pass the updated note to the parent component
        onSave(id, title, content);
        setEditMode(false);
    };

    const handleCancelClick = () => {
        setTitle(originalTitle);
        setContent(originalContent);
        setEditMode(false);
    };

    return (
        <div className="flex justify-center w-full">
            <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
                <div className="bg-opacity-75 bg-blue-100 m-4 border-2 border-blue-500 px-2 py-2 rounded">
                    <div className="flex flex-row items-start mb-2">
                        <label className="inline-block px-2 mx-2 bg-blue-500 border-blue-900 border-2 text-white rounded text-lg" htmlFor={title}>Title:</label>
                        {editMode ? (
                            <textarea
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                style={{ height: '1.75rem', width: '50%', resize: 'vertical', textAlign: 'left' }}
                            />
                        ) : (
                            <h2 className="inline-block text-lg font-bold">{title}</h2>
                        )}
                    </div>
                    <div className="flex flex-row items-center mb-2">
                        <label className="px-2 mx-2 bg-blue-500 border-blue-900 border-2 text-white rounded text-base" htmlFor="Date">Date:</label>
                        <small className="italic">{initialDate}</small>
                    </div>
                    <div className="flex flex-row text-lg">
                        <label className="px-2 text-lg" htmlFor="Note">
                            <div className="bg-blue-500 border-blue-900 border-2 rounded text-white px-2">
                                Note:
                            </div>
                        </label>
                        {editMode ? (
                            <textarea
                                type="text"
                                className="text-left"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                style={{ height: '10rem', width: '100%', resize: 'vertical', textAlign: 'left' }}
                            />
                        ) : (
                            <p className="text-left text-base font-semibold">{content}</p>
                        )}
                    </div>
                    <div className="flex justify-end items-center mb-2">
                        {editMode ? (
                            <>
                                <button
                                    className="bg-blue-500 border-blue-900 border-2 text-white font-bold py-1 px-2 rounded hover:bg-blue-700 mx-2 my-3"
                                    onClick={handleSaveClick}
                                >
                                    Save Changes
                                </button>
                                <button
                                    className="bg-blue-500 border-blue-900 border-2 text-white font-bold py-1 px-2 rounded hover:bg-blue-700 mx-2 my-3"
                                    onClick={handleCancelClick}
                                >
                                    Cancel Changes
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    className="bg-blue-500 border-blue-900 border-2 text-white font-bold py-1 px-2 rounded hover:bg-blue-700 mx-2 my-3"
                                    onClick={() => onDelete(id)}
                                >
                                    Delete Note
                                </button>
                                <button
                                    className="bg-blue-500 border-blue-900 border-2 text-white font-bold py-1 px-2 rounded hover:bg-blue-700 mx-2 my-3"
                                    onClick={handleEditClick}
                                >
                                    Edit Note
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default StickyNotes;
