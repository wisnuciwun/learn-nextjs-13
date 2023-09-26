'use client' // use this to avoid error Client component error in browser, because next js not allowed us to use Server component.
import React from 'react'

const AddToCart = () => {
     return (
          <div>
               <button onClick={() => console.log('clicked')}>Add to Cart</button>
          </div>
     )
}

export default AddToCart