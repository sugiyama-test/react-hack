import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GenelalButton from '../components/GeneralButton';

// Material-UIアイコン取得
import Search from '@material-ui/icons/Search';

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
    maxWidth: 700,
  },

  button: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 16,
    padding: 10,
    width: 250,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  root: {
  },

  // Form
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});


const current_year = (new Date()).getFullYear();
const current_cour = Math.ceil((new Date()).getMonth() / 3);

class Home extends React.Component {

  // ここだけでしか使わないのでRedux未使用;
  state = {
    year: current_year,
    cour: current_cour,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {

    // redux関連
    const { actions } = this.props;

    // Material-ui関連
    const { classes } = this.props;

    // 監督入力
    const years = ['宮崎駿'];


    return (
      <div>
        <img src="/images/logo_animel_white.png" alt="title" className={classes.titleImage}/>
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="year-helper">監督の名前</InputLabel>
            <Select
              value={this.state.year}
              onChange={this.handleChange}
              inputProps={{
                name: 'year',
                id: 'year-helper',
              }}
            >
            {years}
            </Select>
          </FormControl>
        </form>
        <Button
          onClick={() => actions.getAnimes(this.state.year, this.state.cour)}
        >
        <GenelalButton title="検索" />
        </Button>
        <AnimeList/>
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