import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface DataType{
    id: number,
    name: string,
    genre: string
}

function ArtistList(){

    const [data, setData] = useState<DataType[]|null>(null)
    const [error, setError] = useState<String|null> (null)


    const fetchArtist = async () =>{
        try{
            const response = await axios.get("https://localhost:7109/api/artist")
            setData(response.data)
        }
        catch(e : any){
            setError(e.message)
        }
    }

    useEffect(()=>{
        fetchArtist()
    },[] )


    return <div className=" bg-dark py-3">
    {error && <div className="alert alert-danger">{error}</div>}
    {data === null ? (
            <p>Loading...</p>
        ) : (
            <ul className='list-group'>
                {data.map((artist) => (

                    <Link to={`/artist/id/${artist.id}`} className="text-decoration-none text-white" key={artist.id} >
                     <li  className="list-group-item list-group-item-action hover">
                        <h5>{artist.name}</h5>
                       <Link to={`/artist/genre/${artist.genre}`}>
                       <li  className="list-group-item list-group-item-action hover"> <h5>{artist.genre}</h5> </li></Link>
                    </li>
                    </Link>
                ))}

            </ul>
         )}
    </div>
}

export default ArtistList