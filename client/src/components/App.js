//REACT router

import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const app = () => {
  return (
    <div>
      <Router>
       <div>
         <Route path="/" component={Landing}/>
       </div>
      </Router>

    </div>
  )
}
export default app;