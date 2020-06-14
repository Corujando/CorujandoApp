import React from 'react'
import './FinishedTrip.scss'
import { Badge } from '../../generics'
import { BadgeProps } from '../../generics/Badge/Badge';
import { TimeFormatter, DistanceFormatter } from '../../../formatters';
import { RouteComponentProps, StaticContext } from 'react-router';
import { Link } from 'react-router-dom';
import { Badge as BadgeModel } from '../../../model/badge';

export interface FinishedTripProps {
  badges: BadgeModel[]
  totalDistance: number
  time: number
}


export const FinishedTrip = (props: RouteComponentProps<{}, StaticContext, FinishedTripProps>) => {
  const { badges, totalDistance, time } = props.location.state;


  const renderBadges = () => {
    return badges.map((badge: BadgeModel) => <Badge additionalClass='badge-unlocked' imageSource={badge.imageUrl} title={badge.title} />);
  }

  const renderBadgesSection = () => {
    if (badges && badges.length) {
      return (
        <>
          <span className="info-name">Badges conquistados:</span>
          <ul className="badge-list">
            {renderBadges()}
          </ul>
        </>
      )
    }

    return null;
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
        <Link to="/achieviments" className="primary">Ver minhas conquistas</Link>
        <Link to="/" className="secondary">Ir para tela inicial</Link>
      </div>
    </div>
  )
}
