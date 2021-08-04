import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import './app.css';
import Header from './components/header/header';
import HotMixtape from './components/main/hot_mixtape/hot_mixtape';
import Main from './components/main/main';
import RecentMixtape from './components/main/recent_mixtape/recent_mixtape';

function App({youtube}) {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Main youtube={youtube}/>
        </Route>
        <Route path="/mixtape">
          <HotMixtape/>
        </Route>
        <Route path="/album">
          <RecentMixtape/>
        </Route>
        <Route path="/artist">
          
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
