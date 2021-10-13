import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../Styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Singup from './pages/Singup';
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/singup' component={Singup} />
          <Route exact path='/quiz' component={Quiz} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/result' component={Result} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
