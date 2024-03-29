import { Link } from 'react-router-dom';
export function EntriesList() {
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
          <ul className="entry-ul"></ul>
        </div>
      </div>
    </div>
  );
}
