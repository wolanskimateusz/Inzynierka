import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HeroPage from "./Pages/HeroPage/HeroPage"
import EventPage from "./Pages/EventsPage/EventPage"


function App() {


  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path='/events' element={<EventPage />} />
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App
