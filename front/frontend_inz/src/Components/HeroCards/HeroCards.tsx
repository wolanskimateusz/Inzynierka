import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import {differenceInDays} from "date-fns"


interface DataType{
    name: string,
    descripton: string,
    date: string
    localization: string
}

function HeroCards(){

    const [data, setData] = useState<DataType[] | null>(null)
    const [error, setError] = useState<string | null>(null)

    const fetchLatest = async () => {
        try{
            const response = await axios.get("https://localhost:7109/api/event/latest")
            setData(response.data)
        }
        catch(e : any){
            setError(e.message)
        } 
    }

    useEffect(() => {
        fetchLatest()
    },[])

    const calculateDaysUntill = (date : string): number => {
        const now = new Date();
        const eventDate = new Date(date);
        return differenceInDays(eventDate, now);
    }
    
    return <div className="container">
        {error && <div className="alert alert-danger">{error}</div>}
        {data === null ? (
                <p>Loading...</p>
            ) : (
        <div className='row'>
            <div className='col'>
            {data && data?.length > 0 && <Card name = {data[0].name} days_untill={calculateDaysUntill(data[0].date)} description = {data[0].descripton} localization={data[0].localization}></Card>}
            </div> 
            <div className='col'>
            {data && data?.length > 1 && <Card name = {data[1].name} days_untill={calculateDaysUntill(data[1].date)} description = {data[1].descripton} localization={data[1].localization}></Card>}
            </div> 
            <div className='col'>
            {data && data?.length > 2 && <Card name = {data[2].name} days_untill={calculateDaysUntill(data[2].date)} description = {data[2].descripton} localization={data[2].localization}></Card>}
            </div> 
        </div>    
     )}  
      
    </div>
}

export default HeroCards