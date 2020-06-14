import React from 'react'
import { TripData } from '../../screens/MyTrips/MyTrips'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { ExpansionPanelSummary, ExpansionPanel } from '@material-ui/core'
import './CRTripCard.scss'

export function CRTripCard(props: TripData) {
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
                  {props.init + ' - ' + props.end}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Duração: {props.duration}
                </Typography>
              </>
            }
          />
      </ExpansionPanelSummary>
      <div className="ITPanel__body">
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Início: {props.init + 'às' + props.init_hour}
          </Typography>
          {props.stops.map((stop, index) => (
            <Typography key={index} variant="body2" color="textSecondary" component="p">
              Parada: {stop.date}
            </Typography>
          ))}
          <Typography variant="body2" color="textSecondary" component="p">
            Chegada: {props.end + 'às' + props.end_hour}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Conquistas ganhas:
          </Typography>
          <br/>
          {props.achievements.map((achievement, index) => (
            <Avatar key={index} alt="Conquista" src={achievement.icon} />
          ))}
        </CardContent>
      </div>
    </ExpansionPanel>
  )
}
