// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import routes from './config/routes';
import AdminHome from "./pages/admin"
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Router>
        {routes.map((route, index) => (
          <AdminSubroutesViews key={index} {...route}></AdminSubroutesViews>
        ))}
      </Router>
    </React.Fragment>

  );
}

function AdminSubroutesViews(route) {
  console.log(route);
  return true;
}


export default App;
