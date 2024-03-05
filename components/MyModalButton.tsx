import React, { useState } from 'react'

const MyModalButton = () => {

  
  const [showModal, setShowModal] = useState<boolean>(false)

  
  return (
    <>
    <button>open modal</button>
    {showModal && (
      <div>
        <div></div>
      </div>
    )}
    </>
  )
}

export default MyModalButton