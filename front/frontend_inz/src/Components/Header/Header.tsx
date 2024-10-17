function Header()
{
    return (
    <header className="bg-dark py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="logo">
          <a href="/" className="navbar-brand text-white">
            <img src="/path/to/logo.png" alt="Logo" style={{ height: '50px' }} />
          </a>
        </div>

        {/* Nawigacja */}
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link text-white">Home</a>
            </li>
            <li className="nav-item">
              <a href="/events" className="nav-link text-white">Events</a>
            </li>
            <li className="nav-item">
              <a href="/artists" className="nav-link text-white">Artists</a>
            </li>
            <li className="nav-item">
              <a href="/genres" className="nav-link text-white">Genres</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link text-white">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Wyszukiwarka */}
        <div className="input-group w-25">
          <input
            type="text"
            className="form-control"
            placeholder="Search concerts, artists..."
            aria-label="Search concerts"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-light" type="button">Search</button>
          </div>
        </div>

        {/* Przyciski CTA */}
        <div>
          <a href="/login" className="btn btn-outline-light mr-2">Login</a>
          <a href="/signup" className="btn btn-danger">Sign Up</a>
        </div>
      </div>
    </header>
)
}

export default Header