import './App.css';
// import {useState} from 'react';
// import Axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import  { Redirect } from 'react-router-dom';
// import Route from 'react-router-dom/Route';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import FaceBook from './pages/FaceBook';
import About from './pages/About';
import Contact from './pages/Contact';
import Create from './pages/Create';
import ShowDetail from './pages/Showdetails';
// import ForgotPassword from './pages/ForgotPassword';

import Navbar from './components/Navbar';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <nav className="nav-wrapper red darken-3">
        <div className="app">
          <BrowserRouter>
          <Navbar />
            <Switch>
              <Route  exact path={"/"} component={Home}/>
              <Route  exact path={"/facebook"} component={FaceBook}/>
              <Route  exact path={"/about"} component={About}/>
              <Route  exact path={"/contact"} component={Contact}/>
              <Route  exact path={"/create"} component={Create}/>
              <Route  exact path={"/login"} component={Login}/>
              <Route  exact path={"/register"} component={Register}/>
              <Route  exact path={"/showDetail"} component={ShowDetail}/>
            </Switch>
          </BrowserRouter>
          
        </div>
      </nav>
    )
  }
}


// function App() {
//     return (
//     <nav className="nav-wrapper red darken-3">
//       <Router>
//       <Navbar />
//         <Route exact path="/home">
//           <Home />
//         </Route>
//         <Route exact path="/facebook">
//           <FaceBook />
//         </Route>
//         <Route exact path="/about">
//           <About />
//         </Route>
//         <Route exact path="/contact">
//           <Contact />
//         </Route>
//         <Route exact path="/create">
//           <Create />
//         </Route>
//         <Route exact path="/login">
//           <Login />
//         </Route>
//         <Route exact path="/forgot-password">
//           <ForgotPassword/>
//         </Route>
//         <Route exact path="/register">
//           <Register />
//         </Route>
//       </Router>
//     </nav>
      
//     );
// }

// export default App;
