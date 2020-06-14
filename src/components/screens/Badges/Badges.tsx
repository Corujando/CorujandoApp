import React from 'react';
import './Badges.scss';

import { CRFooter } from '../../generics/CRFooter/CRFooter';
import { Badge } from '../../generics/Badge/Badge';

import src from '../../../assets/badge-1.png'
import { Card } from '../../generics/Card/Card';
import { Badge as BadgeModel } from '../../../model/badge';

export const BadgeScreen = () => {

    const renderItems = () => {

        // TODO: load user badges and all badges from firebase
        const user = {
            badges: ['1', '3', '4', '6', '7', '8']
        }

        const badges: BadgeModel[] = [
            {
                id: '1',
                description: 'Fez sua primeira viagem',
                title: 'AAAAAAA',
                imageUrl: src
            },
            {
                id: '2',
                description: 'Fez sua primeira viagem',
                title: 'AAAAAAA',
                imageUrl: src
            },
            {
                id: '4',
                description: 'Fez sua primeira viagem',
                title: 'AAAAAAA',
                imageUrl: src
            },
            {
                id: '5',
                description: 'Fez sua primeira viagem',
                title: 'AAAAAAA',
                imageUrl: src
            },
            {
                id: '6',
                description: 'Fez sua primeira viagem',
                title: 'AAAAAAA',
                imageUrl: src
            },
        ];

        if (!badges || !badges.length) {
            return (
                <span className="no-badges-title">Estamos trabalhando para criar novas badges para você ;)</span>
            )
        }

        return badges.map((badge) => (
            <>
                <div className={user.badges.includes(badge.id, 0) ? 'card-item' : `card-item locked`}>
                    <Badge imageSource={badge.imageUrl} />
                    <div className="card-item-info">
                        <span className="item-title">{badge.title}</span>
                        <span className="item-description">{badge.description}</span>
                    </div>
                </div>
                <div className="divider"></div>
            </>
        ))
    }

    return (
        <div className="badge-screen">
            <Card title="Minhas Conquistas">
                {renderItems()}
            </Card>
            <CRFooter />
        </div>
    )
}
