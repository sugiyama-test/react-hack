import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  // Cards
  card: {
    width: "80%",
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20
  },
  empty: {
    width: 330,
    height: 0,
    margin: 0,
    padding: 0
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 16
  },
  release: {
    margin: 10,
    fontSize: 20, 
    fontFamily: "cursive",
  },
  description: {
    color: "#088A29",
    margin: 10,
    fontSize: 16,
    fontFamily: "cursive"
  },
  movieN: {
    fontSize: 24,
    fontFamily: "cursive",
  },
  staff: {
    fontSize: 16,
    fontFamily: "cursive",
  }
};

function Anime(props) {
  const { title, director, release_date　,　producer　, description　, classes } = props;

    return (
      <Card className={classes.card}>
        <CardContent>
          {release_date !== "" && (
            <Typography className={classes.release} color="textSecondary">
              {release_date}
            </Typography>
          )}
          <Typography
            className={classes.movieN}
            variant="headline"
            component="h2"
          >
            {title}
          </Typography>
          {release_date !== "" && (
            <Typography
              className={classes.description}
              color="textSecondary"
            >
              {description}
            </Typography>
          )}
          {director !== "" && (
            <Typography className={classes.staff} color="textSecondary">
              Director：{director}
            </Typography>
          )}
          {producer !== "" && (
            <Typography className={classes.staff} color="textSecondary">
              Producer：{producer}
            </Typography>
          )}
          {title !== "" && (
            <Typography className={classes.title} color="textSecondary">
              <a
                href={"https://twitter.com/search?q=%23" + title}
                target="_blank"
                rel="noopener noreferrer"
              >
                #{title}
              </a>
            </Typography>
          )}
        </CardContent>
      </Card>
    );
}

Anime.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Anime);