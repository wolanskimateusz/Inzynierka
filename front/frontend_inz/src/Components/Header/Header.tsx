import { useAuth } from "../../Context/useAuth"
import SearchBar from "../SearchBar/SearchBar"

function Header()
{

  const { isLoggedIn, logout } = useAuth()

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
              <a href="/" className="nav-link text-white">Główna</a>
            </li>
            <li className="nav-item">
              <a href="/events" className="nav-link text-white">Wydarzenia</a>
            </li>
            <li className="nav-item">
              <a href="/artists" className="nav-link text-white">Artyści</a>
            </li>
            <li className="nav-item">
              <a href="/genres" className="nav-link text-white">Gatunki</a>
            </li>
          </ul>
        </nav>

        {/* Wyszukiwarka */}
        <SearchBar></SearchBar>

        {isLoggedIn() ? (
          <div>
          <a href="/profile" className="btn btn-outline-light mr-2">Profil</a>
          <button type="button" onClick={logout} className="btn btn-danger">Wyloguj się</button>
        </div>
        ): (
          <div>
          <a href="/login" className="btn btn-outline-light mr-2">Logowanie</a>
          <a href="/register" className="btn btn-danger">Rejestracja</a>
        </div>
        )}
        
      </div>
    </header>
)
}

export default Header