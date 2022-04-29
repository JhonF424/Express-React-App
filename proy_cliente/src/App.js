// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import routes from './config/routes';
import React from 'react';

export default function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component></route.component>
                <h2>Child Component</h2>
              </route.layout>
            } />
        ))}
      </Routes>
    </Router>
  );
}
