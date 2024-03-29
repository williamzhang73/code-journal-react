import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { type Entry, readEntries } from '../data';
export function EntriesList() {
  const [entries, setEntries] = useState<Entry[]>([]);
  useEffect(() => {
    const myEntries = readEntries();
    setEntries(myEntries);
  }, [entries]);
  return (
    <div className="container">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <h3>
            <Link className="white-text form-link" to="/">
              New
            </Link>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul">
            {entries.map((entry, index) => (
              <li key={index}>
                <div>
                  <img src={entry.photoUrl} alt="image" />
                </div>
                <div>
                  <div>
                    <h3>{entry.title}</h3>
                  </div>
                  <p>pencil</p>
                </div>
                <p>{entry.notes}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
