import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  // Cards
  card: {
    width: "100%",
    borderRadius:20,
    marginTop: 10,
    marginBottom: 10,
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
  
  // Avatar Icons
  avatar: {
    margin: 10,
  },
  twitterAvatar: {
    margin: 10,
    backgroundColor: '#1da1f2',
  },
  wwwAvatar: {
    margin: 10,
    backgroundColor: '#6c1df2',
    padding: 7,
    boxSizing: 'border-box',
  },
  row: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
};

function Anime(props) {
  const { title, title_short1, title_short2, public_url, classes } = props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            {title}
          </Typography>
          {title_short1 !== '' &&
            <Typography className={classes.title} color="textSecondary">
              {title_short1}
            </Typography>
          }
          {title_short2 !== '' &&
            <Typography className={classes.title} color="textSecondary">
              {title_short2}
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