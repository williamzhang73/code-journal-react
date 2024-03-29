import { useState, useEffect, MouseEventHandler } from 'react';
import { addEntry, type Data, type UnsavedEntry, type Entry } from '../data';
import { useNavigate, useLocation } from 'react-router-dom';
export function EntryForm() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {});
  function handleSaveClick(event: MouseEvent) {
    event.preventDefault();
    const unSavedEntry: UnsavedEntry = { title, photoUrl: url, notes };
    addEntry(unSavedEntry);
    navigate('/entrylist');
  }
  const location = useLocation();
  const data = location.state;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column-full d-flex justify-between">
            <h1 id="formH1">New Entry</h1>
            <h1 className="invisible">Edit Entry</h1>
          </div>
        </div>
        <form id="entryForm">
          <div className="row margin-bottom-1">
            <div className="column-half">
              <img
                className="input-b-radius form-image"
                src={url ? url : 'images/placeholder-image-square.jpg'}
                alt="images"
              />
            </div>
            <div className="column-half">
              <label>
                Title:
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input-b-color text-padding-input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                  type="text"
                  required
                  name="title"
                />
              </label>
              <label>
                Photo URL:
                <input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                  type="text"
                  required
                  name="photoUrl"
                />
              </label>
            </div>
          </div>
          <div className="row margin-bottom-1">
            <div className="column-full">
              <label className="margin-bottom-1 d-block">
                Notes:
                <textarea
                  value={notes}
                  onChange={(e) => {
                    setNotes(e.target.value);
                  }}
                  className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
                  required
                  name="message"
                  cols={30}
                  rows={10}></textarea>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="column-full d-flex justify-between">
              <button className="invisible delete-entry-button">
                Delete Entry
              </button>
              <button
                onClick={handleSaveClick}
                className="input-b-radius text-padding purple-background white-text">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
