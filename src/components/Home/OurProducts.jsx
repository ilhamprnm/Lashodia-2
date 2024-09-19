import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../data/ShopContext';

const OurProducts = () => {
  const [visibleProduct, setVisibleProduct] = useState(8);

  const allProducts = useContext(ShopContext).products;
  const addToCart = useContext(ShopContext).addToCart;

  const addVisibleProduct = () => {
    setVisibleProduct(visibleProduct + 20)
  }

  return (
    <div className='mt-14 p-2 min-[876px]:px-20 flex flex-col gap-3'>
      <div className='flex gap-3'>
        <div className='w-5 h-7 bg-red-500 rounded-sm'>
        </div>
        <div className='flex items-center'>
          <span className='text-red-500'>Our Products</span>
        </div>
      </div>

      <div className=' flex min-[557px]:gap-10 gap-4 flex-wrap duration-500 mb-6'>
        <div className='flex items-end'>
          <h1 className='font-bold text-5xl duration-500'>Explore Our Products</h1>
        </div>
      </div>

      <div>
        <div className='flex flex-wrap justify-center'>
          {allProducts.slice(0, visibleProduct).map((product) => {

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

            return <div key={product.id} className='py-3 px-1 w-[270px] cursor-pointer'>
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
                          <img className='h-[18px]' src={(`ratings/rating-${roundedRating}.png`)} alt="rating" /> <span>({product.rating.count})</span>
                        </div>
                        <div>
                          <button className='bg-black w-full text-white p-2 rounded-sm mt-2' onClick={() => {addToCart(product)}}>Add to Cart</button>
                        </div>
                      </div>
                    </div>
          })}
        </div>
      </div>

      <div className={`flex justify-center mt-8 ${visibleProduct >= allProducts.length ? 'hidden' : ''}`}>
        <button className='bg-[#da4446] p-3 px-10 text-white font-semibold rounded' onClick={addVisibleProduct}>View All Products</button>
      </div>

      <hr className='mt-8'/>
    </div>
  )
}

export default OurProducts