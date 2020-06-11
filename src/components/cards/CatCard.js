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

export default function CatCard(props) {
  const cat = props.cat
  const classes = useStyles();

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
            Age: {momentManager.getAge(cat.birth_date)}
          </Typography>
        </CardContent>
        <CardActions>
          {/* TODO: Change from href, it's forcing a refresh */}
          <Button 
            variant="contained" 
            color="primary" 
            href={`cats/${cat.id}`}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </>
  );
}