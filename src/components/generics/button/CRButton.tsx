import React from 'react'
import './CRButton.scss'

interface CRButtonProps {
  text?: string
  disabled?: boolean
  className?: string
  onClick: Function
  children?: string
  id?: string
}

export function CRButton({
  text,
  disabled,
  className,
  onClick,
  children = 'Click',
  id,
}: CRButtonProps) {
  const getClassName = () =>
    disabled ? `disable CRButton__button ${className}` : `CRButton__button ${className}`
  const value = text || children
  return (
    <span className="CRButton" id={id}>
      <button className={getClassName()} type="submit" onClick={e => onClick(e)}>
        {value}
      </button>
    </span>
  )
}
