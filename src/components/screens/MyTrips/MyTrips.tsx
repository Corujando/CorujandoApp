import React from 'react'
import { CRFooter } from '../../generics/CRFooter/CRFooter'
import { CRTripCard } from '../../sections/CRTripCard/CRTripCard'
import AchievementCoffeePNG from '../../../assets/achievement_coffee.png'
import './MyTrips.scss'

interface TripStop {
  date: string
}

interface Achievement {
  icon: string
}

export interface TripData {
  destiny: string,
  init: string,
  init_hour: string,
  end: string,
  end_hour: string,
  duration: string,
  stops: TripStop[],
  achievements: Achievement[],
}

export function MyTrips() {
  const mock: TripData[] = [
    {
      destiny: 'Goiania, GO',
      init: '05/06/2020',
      init_hour: '20h32',
      end: '06/06/2020',
      end_hour: '12h46',
      duration: '17:06:33',
      stops: [
        {
          date: '06/06/2020 às 2h56',
        },
        {
          date: '06/06/2020 às 6h46',
        },
      ],
      achievements: [
        {
          icon: AchievementCoffeePNG,
        },
      ],
    }
  ]

  return (
    <div className="MyTrips">
      <h1 className="Title">Minhas viagens</h1>
      {mock.map((trip, index) => (
        <CRTripCard key={index} {...trip} />
      ))}
      <CRFooter />
    </div>
  )
}
