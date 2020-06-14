import React from 'react'
import './CardItem.scss'

interface Props {
    title: string
    imageUrl: string
    subtitle: string
}

export const CardItem = ({ title, imageUrl, subtitle }: Props) => {
    return (
        <>
            <div className='card-item'>
                <img className="Image" src={imageUrl} alt="" />

                <div className="card-item-info">
                    <span className="item-title">{title}</span>
                    <span className="item-description">{subtitle}</span>
                </div>
            </div>
            <div className="divider"></div>
        </>
    )
}
