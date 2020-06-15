import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DistanceFormatter, TimeFormatter } from '../../../formatters'
import { Badge as BadgeModel } from '../../../model/badge'
import { BadgeService } from '../../../services/badge.service'
import { UserService } from '../../../services/userService'
import { Badge } from '../../generics/Badge/Badge'
import './FinishedTrip.scss'

export interface FinishedTripProps {
  badges: BadgeModel[]
  totalDistance: number
  time: number
}

export const FinishedTrip = () => {
  const [badges, setBadges] = useState([] as BadgeModel[])
  const [totalDistance] = useState(2062)
  const [time] = useState(18910)

  useEffect(() => {
    const userService = new UserService()
    const badgeService = new BadgeService()

    userService.getUsersBadges().then(badgeIds => {
      if (badgeIds && badgeIds.length > 0) {
        badgeService.getAllBadges().then(docs => {
          const badgesDoc = docs as BadgeModel[]
          setBadges(badgesDoc.filter(badge => badgeIds.includes(badge.id)))
        })
      }
    })
  }, [])

  const renderBadges = () => {
    return badges.map((badge: BadgeModel, index: number) => (
      <Badge
        key={index}
        additionalClass="badge-unlocked"
        imageSource={badge.imageUrl}
        title={badge.title}
      />
    ))
  }

  const renderBadgesSection = () => {
    if (badges && badges.length) {
      return (
        <>
          <span className="info-name">Badges conquistados:</span>
          <ul className="badge-list">{renderBadges()}</ul>
        </>
      )
    }

    return null
  }

  return (
    <div className="finished-trip">
      <h1 className="title">Viagem Finalizada!</h1>

      <div className="data-info">
        <span className="info-name">Tempo de Viagem</span>
        <span className="info">{TimeFormatter.formatNumberOfSecondsIntoTime(time)}</span>

        <span className="info-name">Percurso percorrido:</span>
        <span className="info">{DistanceFormatter.formatDistance(totalDistance)}</span>

        {renderBadgesSection()}
      </div>

      <div className="actions">
        <Link to="/achieviments" className="primary">
          Ver minhas conquistas
        </Link>
        <Link to="/" className="secondary">
          Ir para tela inicial
        </Link>
      </div>
    </div>
  )
}
