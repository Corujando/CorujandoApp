import React from 'react'
import './CRPopUp.scss'

interface CRPopUpProps {
  title: string
  subTitle: string
  titlePrimaryButton?: string
  onClickPrimaryButton?: Function
  titleSecondaryButton?: string
  onClickSecondaryButton?: Function
  image?: string
  children?: JSX.Element
  faded?: boolean
  className?: string
}

export function CRPopUp({
  title,
  subTitle,
  titlePrimaryButton,
  onClickPrimaryButton,
  titleSecondaryButton,
  onClickSecondaryButton,
  image,
  children,
  faded,
  className
}: CRPopUpProps) {
  function renderPrimaryButton() {
    return (
      titlePrimaryButton &&
      onClickPrimaryButton && (
        <button
          type="submit"
          className="modal-popup_content_principal_button_blue"
          onClick={e => onClickPrimaryButton(e)}>
          {titlePrimaryButton}
        </button>
      )
    )
  }

  function renderSecondaryButton() {
    return (
      titleSecondaryButton &&
      onClickSecondaryButton && (
        <button
          type="button"
          className="modal-popup_content_principal_button_white"
          onClick={e => onClickSecondaryButton(e)}>
          {titleSecondaryButton}
        </button>
      )
    )
  }

  return (
    <div className={`model-popup ${faded ? 'faded' : ''} ${className || ''}`}>
      <div className="CRPopUp modal-popup_content">
        <div className="modal-popup_content_title_container">
          <div className="modal-popup_content_title">
            {image && <img src={image} alt="title" className="modal-popup_content_title_img" />}
            <span className="modal-popup_content_title_text">{title}</span>
          </div>
          <span className="modal-popup_content_principal_sub-title">{subTitle}</span>
        </div>
        <div className="modal-popup_content_principal">
          {children && children}
          {renderPrimaryButton()}
          {renderSecondaryButton()}
        </div>
      </div>
    </div>
  )
}
