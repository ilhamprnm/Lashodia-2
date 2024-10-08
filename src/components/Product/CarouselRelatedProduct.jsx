import React, { useContext } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { products } from '../../data/product';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../data/ShopContext';

const CarouselBestSelling = (props) => {

  const allProducts = useContext(ShopContext).products;
  const addToCart = useContext(ShopContext).addToCart;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    miniDesktop : {
      breakpoint: { max: 1024, min: 690 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 690, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  const filteredProducts = allProducts.filter(product => props.productInDisplay.category === product.category)

  const filterPID = filteredProducts.filter(product => props.productInDisplay.id != product.id)


  return (
    <Carousel responsive={responsive}>
      {filterPID.map((product) => {

        const ratingValue = product.rating.rate * 10;
        let roundedRating ; 
        const roundRating = () => {
          if (ratingValue < 4) {
            roundedRating = 0
          } else if (ratingValue >= 4 && ratingValue < 9) {
            roundedRating = 5
          } else if (ratingValue >= 9 && ratingValue < 14) {
            roundedRating = 10
          } else if (ratingValue >= 14 && ratingValue < 19) {
            roundedRating = 15
          } else if (ratingValue >= 19 && ratingValue < 24) {
            roundedRating = 20
          } else if (ratingValue >= 24 && ratingValue < 29) {
            roundedRating = 25
          } else if (ratingValue >= 29 && ratingValue < 34) {
            roundedRating = 30
          } else if (ratingValue >= 34 && ratingValue < 39) {
            roundedRating = 35
          } else if (ratingValue >= 39 && ratingValue < 44) {
            roundedRating = 40
          } else if (ratingValue >= 44 && ratingValue < 49) {
            roundedRating = 45
          } else if (ratingValue >= 49) {
            roundedRating = 50
          }
        }
        roundRating();
        
        const imgUrl = `../images/ratings/rating-${roundedRating}.png`;

        return <div key={product.id} className='py-7 px-3 '>
                <div className='p-4 flex flex-col border rounded-md gap-1'>
                  <div className='border-b-2 w-full py-4'>
                    <Link to={`/product/${product.id}`}>
                      <img className='h-32 mx-auto' src={product.image} alt="product" />
                    </Link>
                  </div>
                  <div>
                    <p className=' h-12 overflow-hidden font-semibold'>{product.title}</p>
                  </div>
                  <div>
                    <p className='text-red-500'>${product.new_price} <s className='text-gray-500 text-sm'>${product.old_price}</s></p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img className='h-[18px]' src={(`/ratings/rating-${roundedRating}.png`)} alt="rating" /> <span>({product.rating.count})</span>
                  </div>
                  <div>
                    <button className='bg-black w-full text-white p-2 rounded-sm mt-2' onClick={() => {addToCart(product)}}>Add to Cart</button>
                  </div>
                </div>
              </div>
      })}
      
      
    </Carousel>                        
  )
}

export default CarouselBestSelling