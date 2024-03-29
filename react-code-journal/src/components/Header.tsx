import { Outlet, Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <header className="header Purple-background">
        <div className="container">
          <div className="row">
            <div className="column-full d-flex align-center">
              <h1 className="white-text">Code Journal</h1>
              <h3 style={{ marginLeft: '1rem' }}>
                <Link style={{ color: 'white' }} to="/entrylist">
                  Entries
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
