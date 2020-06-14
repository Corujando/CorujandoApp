import React, { useState, useEffect } from 'react'
import './Timer.scss'
import { Fab } from '@material-ui/core'
import { CRButton } from '../../generics/CRButton/CRButton'

export interface TimerHook {
  offset: number
  callback: () => void
  targetTime: number
}

interface TimerProps {
  initialTime?: number
  hooks?: TimerHook[]
  onPauseClick: (time: number) => void
  onPlayClick: () => void
}

export function Timer({ initialTime, hooks, onPlayClick, onPauseClick }: TimerProps) {
  const [time, setTime] = useState(initialTime || 19000)
  const [isActive, setIsActive] = useState(false)

  function toggle() {
    const newValue = !isActive
    setIsActive(newValue)
    if (newValue) {
      onPlayClick()
    } else {
      onPauseClick(time)
    }
  }

  function reset() {
    setTime(0)
    setIsActive(false)
  }

  useEffect(() => {
    let interval: any
    runHooks()
    if (isActive) {
      interval = setInterval(() => {
        setTime(seconds => seconds + 1)
      }, 1000)
    } else if (!isActive && time !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, time])

  function runHooks() {
    if (hooks && hooks.length) {
      hooks.forEach(hook => {
        if (time + hook.offset === hook.targetTime) {
          hook.callback()
        }
      })
    }
  }

  const getCurrentTime = () => {
    const countingTime = {
      hours: Math.floor((time / 60 / 60) % 24),
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
      <div className="time-panel">
        <div className="timer-text">
          <h2 className="title">Duração da viagem</h2>
          <h2 className="time">{getCurrentTime()}</h2>
        </div>
        <Fab className="circle-button">
          <CRButton text=" " className={isActive ? 'play active' : 'play'} onClick={toggle} />
        </Fab>
      </div>
    </div>
  )
}
