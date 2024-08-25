import React from 'react'
import { products } from '../../data/product'
import Item from '../Item'

const WishSection = () => {
  return (
    <div className=' px-2 min-[876px]:px-20 flex flex-col py-10 pb-32'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-5 h-7 bg-red-500 rounded-sm'>
          </div>
          <h2 className='font-semibold text-lg'>Just For You</h2>
        </div>
        <div>
          <button className='border border-gray-400 p-2 px-8 rounded font-semibold text-sm'> 
            See All
          </button>
        </div>
      </div>

      <div className=' mt-4 flex justify-center flex-wrap'>
        {products.slice(0, 4).map((product) => {
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

          return <Item 
            key={product.id}
            productId={product.id}
            productImage={product.image}
            productTitle={product.title}
            productPrice={product.price}
            rating={roundedRating}
            ratingCount={product.rating.count}
          />
        })}
      </div>
    </div>
  )
}

export default WishSection