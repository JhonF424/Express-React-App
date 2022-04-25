// import logo from './logo.svg';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Admin from "./pages/admin";
import SignIn from './pages/admin/SignIn';
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <Admin></Admin>
      <SignIn></SignIn>
      <Home></Home>
      <Contact></Contact>
    </React.Fragment>
    // <BrowserRouter>
    //   <div className='my-5'>
    //     <Link to='/' className='btn-lst'>Home</Link>
    //     <Link to='/Contact' className='btn-lst'>Contacts</Link>
    //     <Link to='/Users' className='btn-lst'>Users</Link>
    //   </div>
    //   <Routes>
    //     <Route path='/' element={<Home />}></Route>
    //     <Route path='Contact' element={<Contact />}></Route>
    //     <Route path='Users' element={<Users />}></Route>
    //     <Route path='*' element={<NotFound />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

// function NotFound(params) {
//   return <h2 className='grid place-items-center h-screen font-bold text-xl'>Error 404: Component Not Found</h2>
// }

// function Home() {
//   return <h2 className='grid place-items-center h-screen font-bold text-xl'>Component Home Works</h2>
// }

// function Contact() {
//   return <h2 className='grid place-items-center h-screen font-bold text-xl'>Component Contact Works</h2>
// }

// function Users() {
//   return <h2 className='grid place-items-center h-screen font-bold text-xl'>Component Users Works</h2>
// }

export default App;
