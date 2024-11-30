
interface Props  {}

function Footer()
{
    return <>
     <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Logo i opis */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">ConcertHub</h5>
            <p>
              Your one-stop destination for finding and booking tickets to the hottest concerts around the world.
            </p>
          </div>

          {/* Linki nawigacyjne */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/events" className="text-light text-decoration-none">Events</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="/faq" className="text-light text-decoration-none">FAQ</a></li>
            </ul>
          </div>

          {/* Media społecznościowe */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="text-light me-3"><i className="bi bi-facebook"></i> Facebook</a>
              <a href="https://twitter.com" className="text-light me-3"><i className="bi bi-twitter"></i> Twitter</a>
              <a href="https://instagram.com" className="text-light"><i className="bi bi-instagram"></i> Instagram</a>
            </div>
          </div>
        </div>

        <hr className="bg-light" />

        {/* Prawa autorskie */}
        <div className="text-center">
          <p className="mb-0">© 2024 ConcertHub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </>
}

export default Footer