import React, { useState, useEffect } from 'react'
import './Timer.scss'
import { CRButton } from '../../generics/CRButton/CRButton'

export interface TimerProps {}

export const Timer = () => {
  const [time, setTime] = useState(0)
  const [isActive, setIsActive] = useState(false)

  function toggle() {
    setIsActive(!isActive)
  }

  function reset() {
    setTime(0)
    setIsActive(false)
  }

  useEffect(() => {
    let interval: any
    if (isActive) {
      interval = setInterval(() => {
        setTime(seconds => seconds + 59)
      }, 1000)
    } else if (!isActive && time !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, time])

  const getCurrentTime = () => {
    const countingTime = {
      hours: Math.floor((time * 60 * 60) % 24),
      minutes: Math.floor((time / 60) % 60),
      seconds: Math.floor(time % 60),
    }

    return `${formatNumber(countingTime.hours)}:${formatNumber(
      countingTime.minutes,
    )}:${formatNumber(countingTime.seconds)}`
  }

  const formatNumber = (number: number) => {
    return `0${number}`.slice(-2)
  }

  return (
    <div className="timer">
      <h2 className="title">Duração da viagem</h2>
      <div className="time-panel">
        <h2 className="time">{getCurrentTime()}</h2>
        <div className="circle-button">
          <CRButton text=" " className={isActive ? 'play active' : 'play'} onClick={toggle} />
        </div>
      </div>
    </div>
  )
}
