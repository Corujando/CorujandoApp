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
import { TimeFormatter } from '../../../formatters/TimeFormatter'
import { BreakService } from '../../../services/breakService'
import { UserService } from '../../../services/userService'
import { Badge } from '../../../model/badge'
import { BadgeService } from '../../../services/badge.service'
import './CRTripCard.scss'

export function CRTripCard(props: Trip) {

  const [breaks, setBreaks] = useState([] as Break[])
  const [badges, setBadges] = useState([] as Badge[])

  useEffect(() => {
    const breakService = new BreakService()
    if(props.id) {
      breakService.getWhereEqualToTripId(props.id).then(breaks => {
        setBreaks(breaks)
      })
    }
  }, [])

  useEffect(() => {
    const userService = new UserService()
    const badgeService = new BadgeService()

    userService.getUsersBadges().then(badgeIds => {
      badgeService.getAllBadges().then(docs => {
        const badges = docs as Badge[]

        setBadges(badges.filter(badge => badgeIds.includes(badge.id)))
      })
    })
  }, [])

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
          {badges.length > 0 && (
            <>
              <Typography variant="body2" color="textSecondary" component="p">
                Conquistas ganhas:
              </Typography>
              <br />
              <div className="TripCardBadges">
                {badges.map(badge => (
                  <Avatar alt="Conquista" src={badge.imageUrl} />
                ))}
              </div>
            </>
          )}
        </CardContent>
      </div>
    </ExpansionPanel>
  )
}
