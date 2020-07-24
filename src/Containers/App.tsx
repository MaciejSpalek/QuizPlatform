import React from 'react'
import GlobalTemplate from '../templates/GlobalTemplate'
import Home from './Home'
import UnknownPage from './UnknownPage'
import Navbar from '../Components/organisms/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';


const App = () => {
  return (
      <GlobalTemplate>
        <Router>  
          <Navbar />
          <MainTemplate>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={UnknownPage}/>
            </Switch>
          </MainTemplate>
        </Router>   
      </GlobalTemplate>     
  )
}  

export default App;




