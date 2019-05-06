import React, { Component } from 'react';
import ReactPlayer from 'react-player';

// コンテナ読み込み
import ResponsiveDrawer from './containers/ResponsiveDrawer';
import Home from './containers/Home';
import Profile from './containers/profile';

// コンポーネント読み込み
import WrapMainContent from './components/WrapMainContent';

// 共通スタイル読み込み
import './App.css';

// Route関連
import { Route, Switch , Link } from 'react-router-dom';

// 不明なRouteは全てNotFound
const NotFound = () => {
  return(
    <h2>ページが見つかりませんでした笑</h2>
  );
};


class App extends Component {

  render() {

    return (
      <div className="App">
        <div class="rooter">
          <Link className='logo' to='/'>TOP</Link>
          <Link className='logo' to='/Profile'>PROFILE</Link>
        </div>

        <ResponsiveDrawer className="ResponsiveDrawer">
          <Switch>
            <Route exact path="/" component={WrapMainContent(Home)} />
            <Route path="/Profile" component={WrapMainContent(Profile)} />
            <Route component={WrapMainContent(NotFound)}/>
          </Switch>
        </ResponsiveDrawer>
      </div>
    );
  }
}


// React-Router情報取得
export default App;
