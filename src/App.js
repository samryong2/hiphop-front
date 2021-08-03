import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import './app.css';
import Header from './components/header/header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path=""/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
