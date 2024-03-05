import React, { useState } from 'react'
import styleModal from  './styleModalColor.module.css'

const MyModalButton = () => {

  
  const [showModal, setShowModal] = useState<boolean>(false)

  const [canBeClose, setCanBeClose] = useState<boolean>(true)
  
  const canClose = ()=>{
    canBeClose && setShowModal(!showModal)
  }
  return (
    <>
    <button onClick={()=>{canClose()}}>open modal</button>
    {showModal && (
      <div className={styleModal.modalAllSCreenContainer}>
        <div></div>
      </div>
    )}
    </>
  )
}

export default MyModalButton