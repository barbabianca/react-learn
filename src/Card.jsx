import './Card.css'

function Card({img, head, price, rating}){
    return (
        <div className='card'>
            <h1 className='heading'>Card</h1>
            <img className='img' src={img} alt="img"/>
            <h2 className='heading'>{head}</h2>
            <h3 className='heading'>{price}</h3>
            <h4 className='heading'>{rating}</h4>
            
        </div>
    );
}

export default Card;