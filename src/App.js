import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import './app.css';
import Header from './components/header/header';
import HotMixtape from './components/main/hot_mixtape/hot_mixtape';
import Main from './components/main/main';
import RecentMixtape from './components/main/recent_mixtape/recent_mixtape';
import Mixtape from './components/mixtape';
import VideoDetail from './components/youtube/youtube_detail/video_detail';

function App({youtube}) {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Main youtube={youtube}/>
        </Route>
        <Route path="/mixtape">
          <Mixtape/>
        </Route>
        <Route path="/album">
          <RecentMixtape/>
        </Route>
        <Route path="/video/:videokey">
          <VideoDetail/>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
