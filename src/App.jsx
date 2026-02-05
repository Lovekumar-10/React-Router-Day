import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
//About Pages
import About from './Pages/About';
import Overview from './Pages/About pages/Overview';
import CompanyInfo from './Pages/About pages/CompanyInfo';
import CareerInfo from './Pages/About pages/CareerInfo';
import TeamInfo from './Pages/About pages/TeamInfo';

import User from './Pages/User'
import Profiles from './Pages/Profiles'
import Navbar from './components/Navbar';





const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path="/about" element={<About />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="company" element={<CompanyInfo />} />
          <Route path="team" element={<TeamInfo />} />
          <Route path="career" element={<CareerInfo />} />
        </Route>




        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/user/:id' element={<Profiles/>}/>
        
      </Routes>
    </Router>
    </>
  )
}

export default App