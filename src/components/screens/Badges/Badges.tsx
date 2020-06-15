import React, { useState, useEffect } from 'react'
import './Badges.scss'

import { CRFooter } from '../../generics/CRFooter/CRFooter'
import { Badge } from '../../generics/Badge/Badge'

import { Card } from '../../generics/Card/Card'
import { Badge as BadgeModel } from '../../../model/badge'

import { BadgeService } from '../../../services/badge.service'
import { UserService } from '../../../services/userService'

export const BadgeScreen = () => {
  const badgeService = new BadgeService()
  const userService = new UserService()

  useEffect(() => {
    loadBadges()
  }, [])

  const [badges, setBadges] = useState([] as BadgeModel[])
  const [userBadges, setUserbadges] = useState([] as string[])

  const loadBadges = async () => {
    const response = await badgeService.getAllBadges()
    if (response) {
      setBadges(response)
    }

    const userBadgesResponse = await userService.getUsersBadges()
    if (userBadgesResponse) {
      setUserbadges(userBadgesResponse)
    }
  }

  const renderItems = () => {
    return badges.map((badge, key) => (
      <>
        <div
          key={key}
          className={userBadges.includes(badge.id, 0) ? 'card-item' : 'card-item locked'}>
          <Badge imageSource={badge.imageUrl} />
          <div className="card-item-info">
            <span className="item-title">{badge.title}</span>
            <span className="item-description">{badge.description}</span>
          </div>
        </div>
        <div className="divider" />
      </>
    ))
  }

  return (
    <div className="badge-screen">
      <Card title="Minhas Conquistas">{renderItems()}</Card>
      <CRFooter />
    </div>
  )
}
