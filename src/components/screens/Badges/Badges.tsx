import React from 'react';
import './Badges.scss';

import { CRFooter } from '../../generics/CRFooter/CRFooter';
import { Badge } from '../../generics/Badge/Badge';

import src from '../../../assets/badge-1.png'

export const BadgeScreen = () => {

    const renderItems = () => {

        // TODO: load user badges and all badges from firebase
        const user = {
            badges: [1, 3, 4, 6, 7, 8]
        }

        const badges: number[] = [1, 2, 3, 5, 4, 6, 7, 8];

        if (!badges || !badges.length) {
            return (
                <span className="no-badges-title">Estamos trabalhando para criar novas badges para você ;)</span>
            )
        }

        return badges.map((badge) => (
            <>
                <div className={user.badges.includes(badge, 0) ? 'card-item' : `card-item locked`}>
                    <Badge imageSource={src} />
                    <div className="card-item-info">
                        <span className="item-title">AAAAAAAAAA</span>
                        <span className="item-description">Fez sua primeira viagem</span>
                    </div>
                </div>
                <div className="divider"></div>
            </>
        ))
    }

    return (
        <div className="badge-screen">
            <div className="card">
                <h1 className="title">Minhas conquistas</h1>
                <div className="divider"></div>
                <div className="content">
                    {renderItems()}
                </div>
            </div>
            <CRFooter />
        </div>
    )
}
