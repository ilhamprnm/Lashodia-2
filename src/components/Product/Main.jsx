import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import cartIcon from '../../icons/cart.png'
import deliveryIcon from '../../icons/icon-delivery.png'
import returnIcon from '../../icons/Icon-return.png'
import { ShopContext } from '../../data/ShopContext'

const Main = () => {

  const allProducts = useContext(ShopContext).products;
  const addToCart = useContext(ShopContext).addToCart;
  const [productQuantity,setProductQuantity] = useState(1);

  const handleChange = (e) => {
    setProductQuantity(e.target.value)
  }

  const handleInc = () => {
    if (productQuantity < 99)
    setProductQuantity(productQuantity + 1)
  }

  const handleDec = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1)
    }
  }


  const {productId} = useParams();
  const product = allProducts.find((e) => e.id === Number(productId))

  if (!allProducts || allProducts.length === 0) {
    return <div>Loading...</div>; // You can show a loading spinner or message
  }

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

  return (
    <div className='mt-[130px] px-2 min-[876px]:px-20 flex flex-col gap-3 py-10 mb-20'>
        <div className='mb-16'>
          <p><span className='text-slate-500'>Home</span> / {product.title}</p>
        </div>
      
        <div className='flex flex-col min-[1000px]:flex-row gap-10 items-center min-[1000px]:items-start'>
          <div className='flex-1 max-w-[660px] flex gap-2'>
            <div className='max-w-[140px] hidden min-[1000px]:block'>
              <div>
                <img className='h-32 p-2 px-4 object-contain shadow-surround rounded' src={product.image} alt="product-image" />
              </div>
              <div>
                <img className='h-32 mt-3 p-2 px-4 object-contain shadow-surround rounded' src={product.image} alt="product-image" />
              </div>
              <div>
                <img className='h-32 mt-3 p-2 px-4 object-contain shadow-surround rounded' src={product.image} alt="product-image" />
              </div>
            </div>
            <div className='flex-1 shadow-surround rounded-sm flex items-center'>
              <img className='h-96 px-20 py-10 rounded mx-auto object-contain' src={product.image} alt="product-image" />
            </div>
          </div>

          <div className='flex flex-col gap-3 max-w-[395px]'>
            <div>
              <h2 className='font-bold text-xl'>{product.title}</h2>
            </div>
            <div className='flex gap-3 items-center'>
              <img className='h-5' src={(`/ratings/rating-${roundedRating}.png`)} alt="rating-image" />
              <p>({product.rating.count}) reviews</p>
            </div>
            <div className='border-b pb-4'>
              <p>{product.description}</p>
            </div>
            <div className='flex gap-5'>
              <div className='flex items-center rounded-sm'>
                <button className='w-10 h-full border hover:bg-[#da4445] font-semibold hover:text-white' onClick={handleDec}>-</button>
                <input 
                  className='max-w-12 h-full border-y focus:outline-none px-1 text-center'  
                  type="text" 
                  min={1}
                  max={100}
                  value={productQuantity}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    if (e.target.value.length > 2) { 
                      e.target.value = e.target.value.slice(0, 2);
                    }
                  }}
                  onChange={handleChange} />
                <button className='w-10 h-full border hover:bg-[#da4445] font-semibold hover:text-white' onClick={handleInc}>+</button>
              </div>
              <div>
                <button className='h-full px-8 py-3 rounded-sm text-white font-semibold bg-[#da4445]' onClick={() => {addToCart(product,productQuantity)}}>Add to Cart</button>
              </div>
              
            </div>

            <div className='border'>
              <div className='flex items-center w-full border-b'>
                <div className='p-4'>
                  <img className='h-8' src={deliveryIcon} alt="delivery-icon" />
                </div>
                <div className='flex flex-col'>
                  <p className='font-semibold'>Free Delivery</p>
                  <p className='underline text-sm'>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className='flex items-center w-full'>
                <div className='p-4'>
                  <img className='h-8' src={returnIcon} alt="delivery-icon" />
                </div>
                <div className='flex flex-col'>
                  <p className='font-semibold'>Return Delivery</p>
                  <p className='underline text-sm'>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Main