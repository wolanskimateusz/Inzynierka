import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


interface DataType{
    id: number,
    name: string,
    descripton: string,
    date: string
    localization: string
}


function EventList(){

    const [data, setData] = useState<DataType[] | null>(null)
    const [error, setError] = useState<string | null>(null)

    const fetchEvents = async () => {
        try{
            const response = await axios.get("https://localhost:7109/api/event")
            setData(response.data)
        }
        catch(e : any){
            setError(e.message)
        } 
    }

    useEffect(() => {
        fetchEvents()
    },[])

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}`;
    };



    return <div className=" bg-dark py-3">
        {error && <div className="alert alert-danger">{error}</div>}
        {data === null ? (
                <p>Loading...</p>
            ) : (
                <ul className="list-group">
                    {data.map((event) => (
                    <Link to={`/event/${event.id}`} className="text-decoration-none text-white">
                        <li key={event.id} className="list-group-item list-group-item-action hover">
                            <h5>{event.name}</h5>
                            <p>{event.descripton}</p>
                            <small>{formatDate(event.date)}</small>
                        </li>
                    </Link>
                    ))}
                </ul>
            )}
        
    </div>
}

export default EventList