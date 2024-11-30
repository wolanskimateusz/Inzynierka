import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'

interface DataType{
    id: number,
    name: string,
    descriptios: string,
    date: Date

}

function HeroCards(){

    const [data, setData] = useState<DataType[] | null>(null)
    const [error, setError] = useState<string | null>(null)

    const fetchLatest = async () => {
        try{
            const response = await axios.get("https://localhost:7109/api/event")
            setData(response.data)
        }
        catch(e : any){
            setError(e.message)
        } 
    }

    useEffect(() => {
        fetchLatest()
    },[])
    
    return <>
    
      {data && data?.length > 0 && <Card name = {data[0].name}></Card>}
      {data && data?.length > 1 && <Card name = {data[1].name}></Card>}
      {data && data?.length > 2 && <Card name = {data[2].name}></Card>}
    </>
}

export default HeroCards