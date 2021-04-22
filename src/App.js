// import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Form2 from './Form2';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Listing from './Listing';



function App() {
  return (
    <Router>
    <div >
     <Switch>
       <Route exact path='/' component={Form}/>
       <Route exact path='/Form2' component={Form2}/>
       <Route exact path='/Listing' component={Listing}/>
       </Switch>
    </div>
    </Router>
    
  );
}

export default App;
