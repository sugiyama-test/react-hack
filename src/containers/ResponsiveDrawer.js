import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';


// 設定値
const drawerWidth = 0;
const bottomNavigationHeight = 56;

// スタイル
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    backGroundColor: '#fff!important',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  toolBar: {
    justifyContent: 'space-between', // 中央寄せのため追加
    minHeight: bottomNavigationHeight,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    height: '100vh',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.up('md')]: {
      paddingBottom: 10,
    },
  },

  // ヘッダーロゴ
  headerLogo: {
    display: 'flex',
    height: 48,
  },
});

class ResponsiveDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      shareDialogOpen: false,
    };
  }

  closeDrawerNav = () => {
    this.setState({ mobileOpen: false });
  }
  openDrawerNav = () => {
    this.setState({ mobileOpen: true });
  }

  // シェアボタン挙動
  shareDialogToggle = () => {
    this.setState({ shareDialogOpen: !this.state.shareDialogOpen });
  }

  render() {

    // Material-ui関連
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <main className={classes.content}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

// Material-ui関連
ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

// Material-uiのテーマ設定＋Redux設定
export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);