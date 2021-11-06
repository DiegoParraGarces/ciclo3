import './App.css';
import Login from './pages/Login';
import Productos from './pages/Products';
import Users from './pages/Users';
import Ventas from './pages/sales';
import Prueba from './pages/prueba';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sales from './pages/sales';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/prueba' exact>
            <Prueba/>
          </Route>
          <Route path='/' exact>
            <Login/>
          </Route>
          <Route path='/Products' exact>
            <Productos/>
          </Route>
          <Route path='/Users' exact>
            <Users/>
          </Route>  
          <Route path='/Sales' exact>
            <Sales/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
