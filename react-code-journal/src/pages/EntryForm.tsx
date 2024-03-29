import { useState, useRef } from 'react';
import { addEntry, updateEntry, removeEntry, type UnsavedEntry } from '../data';
import { useNavigate, useLocation } from 'react-router-dom';

export function EntryForm() {
  const location = useLocation();
  const data = location.state;
  const isEditing = data ? true : false;
  const [title, setTitle] = useState(isEditing ? data.title : '');
  const [url, setUrl] = useState(isEditing ? data.photoUrl : '');
  const [notes, setNotes] = useState(isEditing ? data.notes : '');
  const navigate = useNavigate();
  const modal = useRef<HTMLDialogElement>(null);

  function handleSaveClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const unSavedEntry: UnsavedEntry = { title, photoUrl: url, notes };
    event.preventDefault();
    if (isEditing) {
      const entryId = data.entryId;
      const entry = { title, photoUrl: url, notes, entryId };
      updateEntry(entry);
    } else {
      addEntry(unSavedEntry);
    }
    navigate('/entrylist');
  }

  function handleDelete() {
    const entryId = data.entryId;
    removeEntry(entryId);
    navigate('/entrylist');
    modal.current?.close();
  }
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
              {isEditing ? (
                <button
                  className=" delete-entry-button"
                  onClick={(e) => {
                    e.preventDefault();
                    modal.current?.showModal();
                  }}>
                  Delete Entry
                </button>
              ) : (
                <button
                  className=" invisible delete-entry-button"
                  style={{ cursor: 'pointer' }}>
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

        <dialog ref={modal}>
          <div className="modalcontainer">
            <div className="modalrow">
              <div className="column-full d-flex justify-center">
                <p>Are you sure you want to delete this entry?</p>
              </div>
              <div className="column-full d-flex justify-between">
                <button
                  className="modal-button"
                  onClick={() => modal.current?.close()}>
                  Cancel
                </button>
                <button
                  className="modal-button red-background white-text"
                  onClick={handleDelete}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}
