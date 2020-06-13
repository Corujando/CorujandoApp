import React from 'react'
import './CRButton.scss'

interface CRButtonProps {
    text?: string,
    disable?: boolean,
    className?: string,  
    onClick: Function,
    children?: string
}

export function CRButton({ text, disable, className, onClick, children = 'Click' }: CRButtonProps) {
    const value = text || children
    return (
        <button className={disable ? `disable ${className}` : className} onClick={(e) => onClick(e)}>{value}</button>
    )
}
