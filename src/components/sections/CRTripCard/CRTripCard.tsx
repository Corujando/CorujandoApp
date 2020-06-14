import React, { useState, useEffect } from 'react'
import * as firebase from "firebase"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { ExpansionPanelSummary, ExpansionPanel } from "@material-ui/core"
import AchievementMock from '../../../assets/achievement_coffee.png'
import { Trip } from "../../../model/trip"
import { Break } from '../../../model/break'
import './CRTripCard.scss'

export function CRTripCard(props: Trip) {

  const [breaks, setBreaks] = useState([] as Break[])

  function toStringZ(value: number): string {
    return String(value).padStart(2, '0')
  }

  function getFormattedDate(date: Date): string {
    return (
      toStringZ(date.getDay()) +
      '/' +
      toStringZ(date.getMonth()) +
      '/' +
      toStringZ(date.getFullYear())
    )
  }

  function getFormattedDateFromTimestamp(timestamp?: firebase.firestore.Timestamp): string {
    return timestamp ? getFormattedDate(timestamp.toDate()) : "--/--/--"
  }

  function getFormattedTime(date: Date): string {
    return toStringZ(date.getHours()) + 'h'
    +toStringZ(date.getMinutes())
  }

  function getFormatedTimeFromTimestamp(timestamp?: firebase.firestore.Timestamp): string {
    return timestamp ? getFormattedTime(timestamp.toDate()) : '--h--'
  }

  function getFormatedFullDate(timestamp?: firebase.firestore.Timestamp): string {
    return getFormattedDateFromTimestamp(props.finalTime)
      + ' às ' + getFormatedTimeFromTimestamp(props.finalTime)
  }

  return (
    <ExpansionPanel className="CRTripPainel">
      <ExpansionPanelSummary
        className="ITPanel__title"
        expandIcon={<ExpandMoreIcon htmlColor="black" />}>
        <CardHeader
          title={props.destiny}
          subheader={
            <>
              <Typography variant="body2" color="textSecondary" component="p">
                {getFormattedDateFromTimestamp(props.initialTime) +
                  ' - ' +
                  getFormattedDateFromTimestamp(props.finalTime)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Duração: {props.time ? props.time : '--:--:--'}
              </Typography>
            </>
          }
        />
      </ExpansionPanelSummary>
      <div className="ITPanel__body">
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Início:&nbsp;
            {getFormatedFullDate(props.initialTime)}
          </Typography>
          {breaks.map((breakData, index) => (
            <Typography key={index} variant="body2" color="textSecondary" component="p">
              Parada:&nbsp;
              {getFormatedFullDate(breakData.initialTime)}
            </Typography>
          ))}
          <Typography variant="body2" color="textSecondary" component="p">
            Chegada:&nbsp;
            {getFormatedFullDate(props.finalTime)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Conquistas ganhas:
          </Typography>
          <br />
          <Avatar alt="Conquista" src={AchievementMock} />
        </CardContent>
      </div>
    </ExpansionPanel>
  )
}
