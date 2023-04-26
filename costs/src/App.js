import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';



function App() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/company"  element={<Navigate to="/users" />} />
        <Route  path="/contact" element={<Contact/>} />
        <Route  path="/newproject" element={<NewProject/>} />
        <Route  path="/Company" element={<Company/>} />
      </Routes>
    </Router>
  )
}

export default App;
