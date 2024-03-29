import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { type Entry, readEntries } from '../data';
import { FaPencil } from 'react-icons/fa6';
type Props = {
  Edit: () => void;
};
export function EntriesList({ Edit }: Props) {
  const [entries, setEntries] = useState<Entry[]>();
  useEffect(() => {
    const myEntries = readEntries();
    setEntries(myEntries);
  }, []);
  const navigate = useNavigate();

  function handleEdit(entry: Entry) {
    navigate('/', { state: entry });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <h3 onClick={Edit}>
            <Link className="white-text form-link" to="/">
              New
            </Link>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul">
            {entries?.map((entry, index) => (
              <li key={index}>
                <div className="row">
                  <div className="column-half">
                    <img
                      className="input-b radius form-image"
                      src={entry.photoUrl}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="column-half">
                  <div className="row">
                    <div className="column-full d-flex justify-between align-center">
                      <h3>{entry.title}</h3>
                      <FaPencil
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          handleEdit(entry);
                          Edit();
                        }}></FaPencil>
                    </div>
                  </div>
                  <p>{entry.notes}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
