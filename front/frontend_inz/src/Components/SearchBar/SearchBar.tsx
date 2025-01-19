import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

interface EventList {
    id: number
    name: string
}

function SearchBar(){

    const [searchQuery, setSearchQuery] = useState<string>('')
    const [result, setResult] = useState<EventList[]|null>(null)

    useEffect(() =>{
        const fetchData = async () => {

            if (searchQuery.trim() === '') {
                setResult(null)
                return
            }
            try{
                const response = await axios.get(`https://localhost:7109/api/event?EventName=${searchQuery}`)
                setResult(response.data)
            }
            catch(e: any)
            {
                toast.error("Wystąpił błąd przy pobieraniu danych wydarzenia.");
            }
        }
        fetchData()
    },[searchQuery])
   

    const handleEventClick = () => {
        setSearchQuery(''); 
    }

    return (
        <div>
            {/* Wyszukiwarka */}
            <div className="input-group" style={{ width: '150%' }}> {/* Zmieniamy szerokość paska wyszukiwania */}
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search events..."
                    aria-label="Search events"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // Aktualizacja zapytania przy wpisywaniu
                />
            </div>

            {/* Wyniki wyszukiwania */}
            {result && result.length > 0 && (
                <div 
                    style={{ 
                        position: 'absolute',  // Pozycjonowanie listy nad innymi elementami
                        zIndex: 9999,  // Ustawienie wyższego z-index, aby lista była nad innymi elementami
                        backgroundColor: 'white',  // Dodanie tła dla lepszej czytelności
                        width: '40%',  // Dopasowanie szerokości do paska wyszukiwania
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',  // Cień dla lepszego wyglądu
                    }}
                >
                    {result.map((event) => (
                        <Link
                            key={event.id} 
                            to={`/event/${event.id}`}  // Link do strony wydarzenia
                            className="text-decoration-none" // Usuwamy podkreślenie linku
                            style={{ display: 'block', padding: '10px', borderBottom: '1px solid #ccc' }} // Stylowanie całego divu
                            onClick={handleEventClick} 
                        >
                            <div>
                                <strong>{event.name}</strong>
                            </div>
                        </Link>
                    ))}
                </div>
            )}

            {/* Jeśli brak wyników */}
            {result && result.length === 0 && (
                <p className="mt-3">Brak wydarzeń pasujących do zapytania.</p>
            )}
        </div>
    );
}

export default SearchBar