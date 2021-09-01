import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import SignIn from './pages/SignIn';
import OfficerPage from './pages/OfficerPage';
import OfficerAddVisitor from './pages/OfficerAddVisitor';
import OfficerViewVisitor from './pages/OfficerViewVisitor';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={"/"}
          component={ Landingpage }
        />
        <Route
          exact
          path={"/officer"}
          component={ Landingpage }
        />
        <Route
          exact
          path={"/visitor"}
          component={ Landingpage }
        />
        <Route
          path={"/signin"}
          component={ SignIn }
        /> 
        <Route
          path={"/officerpage"}
          component={ OfficerPage }
        />
        <Route
          path={"/officeraddvisitor"}
          component={ OfficerAddVisitor }
        />
        <Route
          path={"/officerviewvisitor"}
          component={ OfficerViewVisitor }
        />
      </Switch>
    </Router>
  );
}

export default App;
