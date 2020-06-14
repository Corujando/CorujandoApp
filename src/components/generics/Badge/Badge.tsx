import React from 'react'
import './Badge.scss'

export interface BadgeProps {
  imageSource: string
  title?: string
  additionalClass?: string
}

export const Badge = ({ imageSource, title, additionalClass }: BadgeProps) => {
  return (
    <>
      <img
        className={additionalClass ? `${additionalClass} badge` : 'badge'}
        src={imageSource}
        alt={title ? `${title} badge` : 'badge'}
      />
    </>
  )
}
