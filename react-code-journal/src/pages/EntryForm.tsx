import { useState, useEffect, MouseEventHandler } from 'react';
import { addEntry, type Data, type UnsavedEntry, type Entry } from '../data';
import { useNavigate, useLocation } from 'react-router-dom';
type Props = {
  isEditing: boolean;
};
export function EntryForm({ isEditing }: Props) {
  const location = useLocation();
  const data = location.state;
  const [title, setTitle] = useState(isEditing ? data.title : '');
  const [url, setUrl] = useState(
    isEditing ? data.photoUrl : 'images/placeholder-image-square.jpg'
  );
  const [notes, setNotes] = useState(isEditing ? data.notes : '');
  const navigate = useNavigate();
  /*   useEffect(() => {}); */
  function handleSaveClick(event: MouseEvent) {
    event.preventDefault();
    const unSavedEntry: UnsavedEntry = { title, photoUrl: url, notes };
    addEntry(unSavedEntry);
    navigate('/entrylist');
  }

  /*   console.log('data: ', data); */
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column-full d-flex justify-between">
            {isEditing ? (
              <h1 className="">Edit Entry</h1>
            ) : (
              <h1 id="formH1">New Entry</h1>
            )}
          </div>
        </div>
        <form id="entryForm">
          <div className="row margin-bottom-1">
            <div className="column-half">
              <img
                className="input-b-radius form-image"
                src={url?}
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
              {isEditing ? (
                <button className=" delete-entry-button">Delete Entry</button>
              ) : (
                <button className=" invisible delete-entry-button">
                  Delete Entry
                </button>
              )}
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
