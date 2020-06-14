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
import { TimeFormatter } from '../../../formatters/TimeFormatter'

export function CRTripCard(props: Trip) {

  const [breaks, setBreaks] = useState([] as Break[])

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
                {TimeFormatter.getFormattedDateFromTimestamp(props.initialTime) +
                  ' - ' +
                  TimeFormatter.getFormattedDateFromTimestamp(props.finalTime)}
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
            {TimeFormatter.getFormatedFullDate(props.initialTime)}
          </Typography>
          {breaks.map((breakData, index) => (
            <Typography key={index} variant="body2" color="textSecondary" component="p">
              Parada:&nbsp;
              {TimeFormatter.getFormatedFullDate(breakData.initialTime)}
            </Typography>
          ))}
          <Typography variant="body2" color="textSecondary" component="p">
            Chegada:&nbsp;
            {TimeFormatter.getFormatedFullDate(props.finalTime)}
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
