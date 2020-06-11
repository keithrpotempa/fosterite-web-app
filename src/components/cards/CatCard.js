import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'

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

export default function CatCard(props) {
  const cat = props.cat
  const classes = useStyles();
  const getAge = (dateString) => {
    /* Note: 
      If a birthdate is unknown, it is listed as
      null in the database
    */ 
    if (dateString) {
      return moment(dateString, "YYYY-MM-DD").fromNow(true)
    } else {
      return "Unknown"
    }
  }

  return (
    <>
      <Card className={classes.root} m={10} p={1}>
        <CardHeader
          title={cat.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="div">
            Adoption Status: {cat.adoption_status_id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            Age: {getAge(cat.birth_date)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}