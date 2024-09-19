import React, { useContext, useEffect, useState } from 'react'
import { products } from '../../data/product'
import CartItem from './CartItem'
import { ShopContext } from '../../data/ShopContext'
import { Link } from 'react-router-dom'


const CartSection = () => {

  const cartData = useContext(ShopContext).cartData;
  const [subTotal,setSubTotal] = useState(0)

  useEffect(() => {
    const total = cartData.reduce((accumulator, product) => {
      const priceInt = product.price * 100; 
      const priceXquan = priceInt * product.quantity;
      return accumulator + priceXquan;
    }, 0);
  
    setSubTotal(total / 100); 
  }, [cartData]);

  

  return (
    <div className='mt-[130px] px-2 min-[876px]:px-20 flex flex-col gap-3 py-10 mb-20'>
      <div>
        <p><span className='text-slate-500'>Home</span> / Cart</p>
      </div>

      <div className='flex mt-14 font-semibold border p-4'>
        <div className='flex-1'>Product</div>
        <div className='flex-1 flex justify-center'>Price</div>
        <div className='flex-1 flex justify-center'>Quantity</div>
        <div className='flex-1 flex justify-center'>Subtotal</div>
        <div className='flex-1 flex justify-center'>Action</div>
      </div>

      {cartData.map((product) => {
        return (
          <CartItem 
            key={product.productId}
            productImage={product.image}
            productTitle={product.title}
            productPrice={product.price}
            productId={product.productId}
            productQuantity={product.quantity}
          />
        )
      })}

      <div className='flex justify-between mt-2'>
        <div>
          <Link to={'/'}>
            <button className='bg-red-500 p-2 px-6 text-white rounded font-semibold'>Return to Shop</button>
          </Link>
        </div>

        
      </div>

      <div className='flex flex-col min-[920px]:flex-row max-[920px]:max-w-96 max-[920px]:mx-auto gap-5 justify-between mt-10'>
        <div>
          <div className='flex gap-2'>
            <input className='border focus:outline-none border-black rounded px-2' type="text" />
            <button className='bg-red-500 p-2 px-6 text-white rounded font-semibold'>
              Aplly Coupon
            </button>
          </div>
        </div>
        

        <div className='border border-black p-4  rounded min-w-96'>
          <div>
            <h2 className='font-bold'>Cart Total</h2>
          </div>

          <div className='flex justify-between py-2 border-b border-black'>
            <div>
              <p>Subtotal:</p>
            </div>
            <div>
              <p>${subTotal}</p>
            </div>
          </div>

          <div className='flex justify-between py-2 border-b border-black'>
            <div>
              <p>Shipping:</p>
            </div>
            <div>
              <p>Free</p>
            </div>
          </div>

          <div className='flex justify-between py-2 border-b border-black'>
            <div>
              <p>Total:</p>
            </div>
            <div>
              <p>${subTotal}</p>
            </div>
          </div>

          <div className='mt-10 flex justify-center'>
            <button className='bg-red-500 p-2 px-6 text-white rounded'>
              Process to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartSection