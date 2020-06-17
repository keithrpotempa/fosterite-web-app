import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import { momentManager } from '../../modules'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function FosterCard(props) {
  const user = props.foster
  // const foster = user.foster
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root} m={10} p={1}>
        <CardHeader
          title={`${user.first_name} ${user.last_name}`}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="div">
            Looking to Foster: {user.foster.looking_to_foster ? "Yes" : "No"}
          </Typography>
          {/* TODO: Currently Fostering 
            Once foster_relationships are implemented
            if today falls between any foster_relationship's 
            start - end date 
          */}
          {/* TODO: Fostering Experience 
            Once foster_relationships are implemented
            if they have any that have passed 
          */}
          <Typography variant="body2" color="textSecondary" component="div">
            Member Since: {momentManager.getMomentFromNow(user.date_joined)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => props.history.push(`fosters/${user.id}`)}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </>
  );
}