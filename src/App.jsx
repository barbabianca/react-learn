import React from 'react'
import Card from './Card'

const classStudents =['Anton', 'Himu','Nikita','Rupali','Sanidhya','Shuruti','Ugur','Vishal', 'Yash']
const productList =  [
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },

  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  {
    img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    head: 'Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band',
    price: '$399.00',
    rating: '4.8'
  },
  
]
function App() {
  return (
    <div>App

      {classStudents.map((student,index) => <p key={index}>  {student}</p>
  )
}       

      {productList.map(
        (product,index) => <Card 
                              key={index} 
                              img={product.img} 
                              head={product.head} 
                              price={product.price} 
                              rating={product.rating} />)}

    </div>
  )
}

export default App

