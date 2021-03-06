import React, { Component } from "react";

// import "C:/MyExes/bootstrap-4.0.0/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


import AuthService from "./Components/services/auth.service";
import CourseInfo from './Components/CourseInfo/CourseInfo';

// import { Link } from "react-router-dom";
// import { Switch, Route } from 'react-router-dom';
import Home from './pages/home.component';

import Register from './pages/register.component';
import Login from './pages/login.component.js';
// import Search from '../src/pages/search';
import Course from './Controller/Course';
import Search from './Components/CourseSearch';

import Profile from "./Components/profile.component";
import BoardUser from "./Components/board-user.component";
import BoardModerator from "./Components/board-moderator.component";
import BoardAdmin from "./Components/board-admin.component";
import EventBus from "./common/EventBus";
import AdminMain from "./Controller/AdminMain";
import CourseAll from "./Controller/CourseAll";
import CourseSearch from "./Components/CourseSearch";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            UpMaster
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {currentUser && (
            <li className="nav-item">
              <Link to={"/course"} className="nav-link">
                Course
              </Link>
            </li>
            )}

            {currentUser && (
            <li className="nav-item">
              <Link to={"/search"} className="nav-link">
                Search
              </Link>
            </li>
            )}

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {/* {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/moddata"} className="nav-link">
                  Moderator Data
                </Link>
              </li>
            )} */}


            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {/* {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admindata"} className="nav-link">
                  Admin Data
                </Link>
              </li>
            )} */}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>


        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            {/* <Route path="/moddata" component={ModeratorJava} /> */}
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/admincourse" component={CourseAll} />
            <Route path="/admindata" component={AdminMain} />
            <Route path="/search" component={CourseSearch} />
            {/* <Route path="/course" component={Course} /> */}


            <Course></Course>
            {/* <Search></Search> */}
            <CourseInfo></CourseInfo>
     
          </Switch>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
 


       
        
       

     
       
     
    
    
   
     
     






