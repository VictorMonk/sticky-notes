import React, { useState, useEffect } from 'react';
import StickyNotes from './StickyNotes';

// Helper function to get and parse notes from local storage
const getParsedNotes = () => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
};

const StickyNotesApp = () => {
    const [notes, setNotes] = useState(getParsedNotes);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Load notes when component mounts
    useEffect(() => {
        setNotes(getParsedNotes());
    }, []);

    // Save notes locally whenever notes change
    useEffect(() => {
        try {
            localStorage.setItem('notes', JSON.stringify(notes));
        } catch (error) {
            console.error('Error saving notes to local storage:', error);
        }
    }, [notes]);

    // Add note function
    const addNote = () => {
        const newNote = {
            id: Date.now(),
            title,
            content,
            date: new Date().toLocaleString(),
        };
        setNotes((prevNotes) => [...prevNotes, newNote]);
        setTitle('');
        setContent('');
    };

    // Delete note function
    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <>
    <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Sticky Notes</h1>
    </div>
    <div className="flex flex-col md:flex-row justify-center mb-4">
        {/* Left Column */}
        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <div className="mb-4">
                <h2 className="text-lg font-bold">Sticky Notes</h2>
                <p>This is a React App that allows you to add and save Sticky Notes to your local Cache. You can input a Title and Content for each Sticky Note. Each note will also provide the date and time it was posted. Additionally, you can use the Edit button to edit any note at any given time. You can change the Title and Content as needed. Then, you can either Save the changes, or cancel them if you change your mind. This was built with React and Tailwind CSS..</p>
            </div>
        </div>
        {/* Right Column */}
        <div className="w-full md:w-1/2 px-4">
            <div className="mb-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title'
                    className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2 focus:outline-none focus:border-blue-500"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder='Note'
                    className="border border-gray-300 rounded-md px-3 py-2 w-full h-32 focus:outline-none focus:border-blue-500"
                />
            </div>
            <button 
                onClick={addNote}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700 mr-2"
            >
                Add Note
            </button>
        </div>
    </div>
    <div className='flex justify-center flex-wrap'>
        {notes.map((note) => (
            <StickyNotes key={note.id} note={note} onDelete={deleteNote} />
        ))}
    </div>
</>
    );
};

export default StickyNotesApp;
