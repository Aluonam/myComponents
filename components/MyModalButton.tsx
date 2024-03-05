import React, { useState } from 'react'
import styleModal from  './styleModalColor.module.css'

const MyModalButton = () => {

  
  const [showModal, setShowModal] = useState<boolean>(false)

  
  return (
    <>
    <button>open modal</button>
    {showModal && (
      <div className={styleModal.modalAllSCreenContainer}>
        <div></div>
      </div>
    )}
    </>
  )
}

export default MyModalButton