import React, { ReactNode, useState } from 'react'
import styleModal from './styleModalColor.module.css'

type PrototypeModalProperties = {
  witdh?: number;
  height?: number;
  children: ReactNode;
}

const MyModalButton = ( {witdh= 300, height= 200, children,}: PrototypeModalProperties) => {

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
            style={{width:witdh + "px", height:height + "px"}}
          >{children}</div>
        </div>
      )}
    </>
  )
}

export default MyModalButton