import React from 'react';
// import { Link } from 'react-router-dom';

const AddNotes = () => {
  return (
    <>
      <div className="notes-container" id='addNotes' >
      <h2>Upload Note</h2>
        <div className="add-note-container">
          <form action="" className="add-note-form">
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                id="title"
                type="text"
                className="form-control"
                placeholder='Enter the Title'
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Description:</label>
              <textarea
                id="content"
                type='text'
                className="form-control"
                 placeholder='Enter the Description'
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="file">Add Pdf:</label>
              <input
                id="file"
                type="file"
                className="form-control"
              />
            </div>
            <button type="submit" className="submit-button button">Upload</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNotes;