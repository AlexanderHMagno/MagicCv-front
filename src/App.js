import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

//helpers
import {AuthProvider} from './context/AuthContext';
import AuthorizedMenu from './util/AutorizedMenu';


function App() {
  return (
    <AuthProvider>
      <Router>
        
          <Switch>   
              <AuthorizedMenu/>
          </Switch>
        {/* </Container> */}
      </Router>
      </AuthProvider>
  );
}

export default App;
