import React, { useState, useEffect } from 'react'
import { CRFooter } from '../../generics/CRFooter/CRFooter'
import { CRTripCard } from '../../sections/CRTripCard/CRTripCard'
import { Trip } from '../../../model/trip'
import { TripService } from '../../../services/tripService'
import { UserService } from '../../../services/userService'
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
  const [trips, setTrips] = useState([] as Trip[])

  useEffect(() => {
    const tripService = new TripService()
    const userId = new UserService().getLoggedUserId()
    if (userId) {
      tripService.getWhereEqualToUserId(userId).then(trips => {
        setTrips(trips)
      })
    }
  }, [])

  return (
    <div className="MyTrips">
      <h1 className="Title">Minhas viagens</h1>
      {trips.map((trip, index) => (
        <CRTripCard key={index} {...trip} />
      ))}
      <CRFooter />
    </div>
  )
}
