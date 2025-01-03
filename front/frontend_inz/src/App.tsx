import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HeroPage from "./Pages/HeroPage/HeroPage"
import EventsPage from "./Pages/EventsPage/EventsPage"
import EventDetails from "./Pages/EventDetails/EventDetail"
import GenresPage from "./Pages/GenresPage/GenresPage"
import ArtistPage from "./Pages/ArtistPage/AtristPage"
import ArtistDetails from "./Pages/ArtistDetails/ArtistDetails"
import ArtistsGenresPage from "./Pages/ArtistGenresPage/ArtistGenresPage"


function App() {


  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path='/genres' element={<GenresPage />} />
        <Route path='/artists' element={<ArtistPage />} />
        <Route path='/artist/id/:id' element={<ArtistDetails />} />
        <Route path='/artist/genre/:genre' element={<ArtistsGenresPage />} />
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App
