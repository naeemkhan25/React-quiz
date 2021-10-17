import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from '../contexts/AuthContext';
import '../Styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Singup from './pages/Singup';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <PublicRoute exact path='/signup' component={Singup} />
            <PrivateRoute exact path='/quiz' component={Quiz} />
            <PublicRoute exact path='/login' component={Login} />
            <PrivateRoute exact path='/result' component={Result} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
