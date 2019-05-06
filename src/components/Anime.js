import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CastleInTheSky from './../image/CastleInTheSky.png';
import GraveOfTheFireflies from './../image/GraveOfTheFireflies.png';
import MyNeighborTotoro from './../image/MyNeighborTotoro.png';
import KikisDeliveryService from './../image/KikisDeliveryService.png';
import OnlyYesterday from './../image/OnlyYesterday.png';
import PorcoRosso from './../image/PorcoRosso.png';
import PomPoko from './../image/PomPoko.png';
import WhisperOfTheHeart from './../image/WhisperOfTheHeart.png';
import PrincessMononoke from './../image/PrincessMononoke.png';
import MyNeighborsTheYamadas from './../image/MyNeighborsTheYamadas.png';
import SpiritedAway from './../image/SpiritedAway.png';
import TheCatReturns from './../image/TheCatReturns.png';
import HowlsMovingCastle from './../image/HowlsMovingCastle.png';
import TalesFromEarthsea from './../image/TalesFromEarthsea.png';
import Ponyo from './../image/Ponyo.png';
import Arrietty from './../image/Arrietty.png';
import FromUpOnPoppyHill from './../image/FromUpOnPoppyHill.png';
import TheWindRises from './../image/TheWindRises.png';
import TheTaleOfThePrincessKaguya from './../image/TheTaleOfThePrincessKaguya.png';
import WhenMarnieWasThere from './../image/WhenMarnieWasThere.png';

const styles = {
  // Cards
  card: {
    width: "80%",
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    position: 'relative',
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

  let aaa ='';

  switch(title) {
 
    case 'Castle in the Sky':
      aaa = CastleInTheSky;
      break;

    case 'Grave of the Fireflies':
      aaa = GraveOfTheFireflies;
      break;

    case 'My Neighbor Totoro':
      aaa = MyNeighborTotoro;
      break;

    case "Kiki's Delivery Service":
      aaa = KikisDeliveryService;
      break;

    case 'Only Yesterday':
      aaa = OnlyYesterday;
      break;

    case 'Porco Rosso':
      aaa = PorcoRosso;
      break;

    case 'Pom Poko':
      aaa = PomPoko;
      break;

    case 'Whisper of the Heart':
      aaa = WhisperOfTheHeart;
      break;

    case 'Princess Mononoke':
      aaa = PrincessMononoke;
      break;

    case 'My Neighbors the Yamadas':
      aaa = MyNeighborsTheYamadas;
      break;

    case 'Spirited Away':
      aaa = SpiritedAway;
      break;

    case 'The Cat Returns':
      aaa = TheCatReturns;
      break;

    case "Howl's Moving Castle":
      aaa = HowlsMovingCastle;
      break;

    case 'Tales from Earthsea':
      aaa = TalesFromEarthsea;
      break;

    case 'Ponyo':
      aaa = Ponyo;
      break;

    case 'Arrietty':
      aaa = Arrietty;
      break;

    case 'From Up on Poppy Hill':
      aaa = FromUpOnPoppyHill;
      break;

    case 'The Wind Rises':
      aaa = TheWindRises;
      break;

    case 'The Tale of the Princess Kaguya':
      aaa = TheTaleOfThePrincessKaguya;
      break;

      case 'When Marnie Was There':
      aaa = WhenMarnieWasThere;
      break;

}

    return (
      <Card className={classes.card}>
        <CardContent className='card'>
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

          {/* {title} */}
            <img src={aaa}/>
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