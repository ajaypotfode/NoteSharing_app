import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteDetails from './NotesDetails';
import { IoMdExit } from 'react-icons/io';

function User() {
  const navigat = useNavigate(null)
  const [noteDetail, setNoteDetail] = useState(false)
  const mainCont = useRef()
  // const { id } = useParams();
  // const note = { id, title: `Note ${id}`, content: `This is the content of note ${id}.` };
  const hanndleDetails = () => {
    mainCont.current.classList.toggle("active-blur")
    setNoteDetail(!noteDetail)
  }

  return (
    <>
      <div className="user-page" ref={mainCont}>
        <nav className="user-navbar">
          <div className="navbar-logo">
            <h1>NoteShare</h1>
          </div>
          <span className="std-navbar-links">
            <span className='button' onClick={() => { navigat('/') }}>Home</span>
            <span className='button'>Add Notes</span>
            <span data-bs-toggle="tooltip" data-bs-placement="top" title="LogOut"
              className='logOut-btn'
               >
              {<IoMdExit />}
            </span>
          </span>
        </nav>

        <header className="welcome-section">
          <h2>Welcome, <span>[Student Name]</span></h2>
          <p>See, Here You can get Your Study Material...!</p>
        </header>

        <section id="my-notes" className="notes-section">
          <h3> All Notes</h3>
          <div className="notes-list">
            <div className="note-card">
              <h4>Biology - Chapter 1</h4>
              <p>Brief summary of the note content...</p>
              <button className='button' onClick={hanndleDetails}>View Note</button>
            </div>
            <div className="note-card">
              <h4>Biology - Chapter 1</h4>
              <p>Brief summary of the note content...</p>
              <button className='button' onClick={hanndleDetails}>View Note</button>
            </div>
            <div className="note-card">
              <h4>Biology - Chapter 1</h4>
              <p>Brief summary of the note content...</p>
              <button className='button' onClick={hanndleDetails}>View Note</button>
            </div>
            <div className="note-card">
              <h4>Math - Algebra</h4>
              <p>Brief summary of the note content...</p>
              <button className='button'>View Note</button>
            </div>
          </div>
        </section>
      </div>
      {
        noteDetail && <NoteDetails cancel={hanndleDetails} />
      }
    </>
  );
}
export default User;