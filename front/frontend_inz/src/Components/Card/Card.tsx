interface Props{
  name : string
  days_untill: number
  description: string
  localization: string
}

function Card({name, days_untill, description, localization}: Props)
{
    return <>
    <div className="card m-5" style={{ }}>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">Wydarzenie za {days_untill} dni</h6>
    <p className="card-text">{description} <br /> {localization}</p>
    <a href="#" className="btn btn-primary">Zobacz wydarzenie</a>
  </div>
</div>
    
</>
}

export default Card