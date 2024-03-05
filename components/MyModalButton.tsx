import React, { ReactNode, useState } from 'react'
import styleModal from './styleModalColor.module.css'

type PrototypeModalProperties = {
  witdh: string;
  height: string;
  children: ReactNode;
}

const MyModalButton = ( {witdh= "300px", height= "200px", children,}: PrototypeModalProperties) => {

  const [showModal, setShowModal] = useState<boolean>(false)

  const [canBeClose, setCanBeClose] = useState<boolean>(true)

  const canClose = () => {
    canBeClose && setShowModal(!showModal)
  }

  return (
    <>
      <button onClick={() => { canClose() }}>open modal</button>
      {showModal && (
        <div className={styleModal.modalAllScreenContainer} onClick={canClose}>
          <div
            className={styleModal.modalChildrenContainer}
            onMouseEnter={() => { setCanBeClose(false) }}
            onMouseLeave={() => { setCanBeClose(true) }}
           
          ></div>
        </div>
      )}
    </>
  )
}

export default MyModalButton