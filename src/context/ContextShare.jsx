import React, { createContext, useState } from 'react'

export const addReviewResponseContext = createContext()

function ContextShare({children}) {
    const [addReviewResponse,setAddReviewResponse] = useState({})
  return (
    <>
      <addReviewResponseContext.Provider
        value={{ addReviewResponse, setAddReviewResponse }}
      >
        {children}
      </addReviewResponseContext.Provider>
    </>
  );
}


export default ContextShare