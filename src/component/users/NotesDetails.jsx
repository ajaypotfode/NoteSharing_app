import React from 'react';
import './user.css'
import { VscChromeClose } from 'react-icons/vsc';
function NoteDetails({cancel}) {
    const notes = [
        { id: 1, title: 'First Note' },
        { id: 2, title: 'Second Note' },
    ];

    return (
        <div className="note-details container">
           <span className='back-button' style={{color:"black"}} onClick={cancel}>{<VscChromeClose/>}</span>
         <header className="note-header">
        <h1>Java Notes</h1>
        <p>Author:ajay</p>
        <p>Published on: 12/2/2024</p>
      </header>

      <div className="note-content">
        <p>this is java notes</p>
      </div>

      <footer className="note-footer">
        <button className='button' onClick={() => alert('Downloading note...')}>Download</button>
        <button className='button' onClick={() => alert('Sharing note...')}>Share</button>
      </footer>
    </div>
    );
}

export default NoteDetails;