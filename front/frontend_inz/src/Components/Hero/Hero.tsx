import './Hero.css'
function Hero()
{
    return <>
        <div className='hero-image'>
            <div className="d-flex justify-content-center">
            <h1 className='text-light text-center text-wrap' style={{width:'35rem'}}>
                Przeżyj niezapomniane emocje z twoimi ulubionymi artystami
            </h1>
            <a href="#" className="btn btn-danger">Przeglądaj wydarzenia</a>
            </div>
        </div>
    </>
}

export default Hero