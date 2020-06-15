import React from 'react'
import './Card.scss'

interface CardProps {
  title: string
  className?: string
}

export const Card = ({ children, title }: React.PropsWithChildren<CardProps>) => {
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <div className="divider" />
      <div className="content">{children}</div>
    </div>
  )
}
