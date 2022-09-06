import React from 'react'

import { FENDP_PRODUCTS, FENDP_SPECIFIC_CAT } from '../constantExports/globalConstants'
import ProductLineDetails from "./ProductLineDetails"


export default function ShowActualPageNew({productLine}) {

  const endPointInUse = productLine ? (FENDP_PRODUCTS+FENDP_SPECIFIC_CAT+productLine) : FENDP_PRODUCTS
  
  return (
    <div className="IngressMain">
      
          <ProductLineDetails url={endPointInUse}>
              {data => {
                
                return (
                  <>
                    {data}
                  </>
                )  // Main return
                }}
          </ProductLineDetails>
      </div>
  )
}

{/* 
  <div className='IngressMain'>
    <ProductBoxSmall product={tempElectronics} />
    <ProductBoxSmall product={tempJewelery} />
    <ProductBoxSmall product={tempElectronics} />
    <ProductBoxSmall product={tempJewelery} />
    <ProductBoxSmall product={tempJewelery} />
    <ProductBoxSmall product={tempElectronics} />
  </div> 
*/}

