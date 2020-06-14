import React from 'react'
import './CRPopUp.scss'

interface CRPopUpProps {
  title: string
  subTitle: string
  titleFirstButton: string
  onClickFirstButton: Function
  titleSecondButton: string
  onClickSecondButton: Function
  image: string
}  

export function CRPopUp({
  title,
  subTitle,
  titleFirstButton,
  onClickFirstButton,
  titleSecondButton,
  onClickSecondButton,
  image
}: CRPopUpProps) {
  return (
    <div className='modal-popup'>
      <div className='modal-popup_content'>
          <div className="modal-popup_content_title">
            <img src={image} alt="Jojo Assustado" className='modal-popup_content_title_img'/>
            <span className='modal-popup_content_title_text'>{title}</span>
          </div>
          <div className="modal-popup_content_principal">
            <span className='modal-popup_content_principal_sub-title'>{subTitle}</span>
            <button className='modal-popup_content_principal_button_blue' onClick={e => onClickFirstButton(e)}>{titleFirstButton}</button>
            <button className='modal-popup_content_principal_button_white' onClick={e => onClickSecondButton(e)}>{titleSecondButton}</button>
          </div>
      </div>
    </div>
  )
}