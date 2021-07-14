import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </Switch> 
    </div>
    </Router>
    
  ); 
}

export default App;
