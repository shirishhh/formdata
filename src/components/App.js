import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Form from './Form/form';


function App() {
  return (
      <Router>
          <Switch>
            <Route exact path ='/' component={Form}></Route>
          </Switch>
      </Router>
  );
}

export default App;
