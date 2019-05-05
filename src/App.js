import React, { Component } from 'react';

// コンテナ読み込み
import ResponsiveDrawer from './containers/ResponsiveDrawer';
import Home from './containers/Home';

// コンポーネント読み込み
import WrapMainContent from './components/WrapMainContent';

// 共通スタイル読み込み
import './App.css';

// Route関連
import { Route, Switch } from 'react-router-dom';

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
        <ResponsiveDrawer className="ResponsiveDrawer">
          <Switch>
            <Route exact path="/" component={WrapMainContent(Home)} />
            <Route component={WrapMainContent(NotFound)}/>
          </Switch>
        </ResponsiveDrawer>
      </div>
    );
  }
}


// React-Router情報取得
export default App;
