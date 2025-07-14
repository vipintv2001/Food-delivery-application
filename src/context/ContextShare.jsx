import React, { createContext, useState } from 'react'

export const addOrderResponseContext = createContext()

function ContextShare({children}) {
    const [addOrderResponse,setAddOrderResponse] = useState({})
  return (
    <>
    <addOrderResponseContext.Provider value={{addOrderResponse,setAddOrderResponse}}>
        {children}
    </addOrderResponseContext.Provider>
    </>
  )
}


export default ContextShare