import React from 'react';
import logo from "./UpMasters.png";
import './App.css';
import CourseInfo from './Components/CourseInfo/CourseInfo';

import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Categories from './pages/categories';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Search from '../src/pages/search';
import Course from './Controller/Course';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/categories' component={Categories} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn}/>
       

        <div className="container-fluid">
       
     
     <img src = {logo} className="text-center bg-info p-3" className = "logo">

     </img>
     <Course></Course>
     <Search></Search>
     
     
     {/* <li className="text-center bg-info p-3">
                <Route to={"/coursedata"} className="text-center bg-info p-3">
                  Course Data
                </Route>
              </li> */}
     
        {/* <h1 className="text-center bg-info p-3">Online Courses</h1> */}
        <CourseInfo></CourseInfo>
      </div>
      </Switch>
    </Router>
     
     

  );
}


export default App;
