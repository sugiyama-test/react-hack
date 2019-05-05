import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  // Cards
  card: {
    width:'80%',
    borderRadius:20,
    marginTop: 20,
    marginBottom: 20,
  },
  empty: {
    width: 330,
    height: 0,
    margin: 0,
    padding: 0,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },

};

function Anime(props) {
  const { title, director, release_date　,　producer　, classes } = props;

    return (
      <Card className={classes.card}>
          <CardContent>
            {release_date !== '' &&
              <Typography className={classes.title} color="textSecondary">
                {release_date}
              </Typography>
            }
            <Typography variant="headline" component="h2">
              {title}
            </Typography>
            {director !== '' &&
              <Typography className={classes.title} color="textSecondary">
                {director}
              </Typography>
            }
            {producer !== '' &&
              <Typography className={classes.title} color="textSecondary">
                {producer}
              </Typography>
            }
            {title !== '' &&
              <Typography className={classes.title} color="textSecondary">
                <a href={'https://twitter.com/search?q=%23'+ title} target="_blank" rel="noopener noreferrer">
                  #{title}
                </a>
              </Typography>
            }
          </CardContent>
      </Card>
    );
}

Anime.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Anime);