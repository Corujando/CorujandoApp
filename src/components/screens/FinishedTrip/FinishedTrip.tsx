import React, { useEffect, useState } from 'react'
import './FinishedTrip.scss'
import { Badge } from '../../generics/Badge/Badge'
import { BadgeProps } from '../../generics/Badge/Badge'
import { TimeFormatter, DistanceFormatter } from '../../../formatters'
import { RouteComponentProps, StaticContext } from 'react-router'
import { Link } from 'react-router-dom'
import { Badge as BadgeModel } from '../../../model/badge'
import { UserService } from '../../../services/userService'
import { BadgeService } from '../../../services/badge.service'

export interface FinishedTripProps {
  badges: BadgeModel[]
  totalDistance: number
  time: number
}

export const FinishedTrip = () => {
  const [badges, setBadges] = useState([] as BadgeModel[])
  const [totalDistance, setTotalDistance] = useState(2062)
  const [time, setTime] = useState(18910)

  useEffect(() => {
    const userService = new UserService()
    const badgeService = new BadgeService()

    userService.getUsersBadges().then(badgeIds => {
      if (badgeIds && badgeIds.length > 0) {
        badgeService.getAllBadges().then(docs => {
          const badges = docs as BadgeModel[]

          setBadges(badges.filter(badge => badgeIds.includes(badge.id)))
        })
      }
    })
  }, [])

  const renderBadges = () => {
    return badges.map((badge: BadgeModel) => (
      <Badge additionalClass="badge-unlocked" imageSource={badge.imageUrl} title={badge.title} />
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
