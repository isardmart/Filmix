import React from 'react';
import{BrowserRouter as Router,Route,Redirect} from 'react-router-dom';

export default function App() {
  return (
    <Router>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/secret' component={Secret}/>
    </Router>
  )
}
