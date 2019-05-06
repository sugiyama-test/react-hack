import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


// Redux関連
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

// AnimeList取得
import AnimeList from '../containers/AnimeList';

// スタイル
const styles = theme => ({
  titleImage: {
    width: '100%',
    maxWidth: 600,
    marginTop: 50 ,
    marginBottom: 50 ,
  },

  // Form
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    marginBottom: 50,
  },

});


const directer = ['宮崎駿','高畑勲'];

class Home extends React.Component {

  // ここだけでしか使わないのでRedux未使用;
  state = {
    directer: directer,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {

    // redux関連
    const { actions } = this.props;

    // Material-ui関連
    const { classes } = this.props;

    console.log(this.state.directer)

    return (
      <div class='home'>
        <img src="/images/logo_animel_white.png" alt="title" className={classes.titleImage}/>
      </div>
    );
  }
}

// Material-ui関連
Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

// Redux関連
const mapState = (state, ownProps) => ({
});
function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

// Material-uiのテーマ設定＋Redux設定
export default connect(mapState, mapDispatch)(
  withStyles(styles, { withTheme: true })(Home)
);