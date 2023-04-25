import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact ';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';


function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>

      </ul>

      
      <Routes>
        <Route exact path="/"  />
        <Home />
      </Routes>

      <Routes>
        <Route exact path="/company"  />
        <Company />
      </Routes>

      <Routes>
        <Route exact path="/contact"  />
        <Contact/>
      </Routes>

      <Routes>
      <Route exact path="/newproject"  />
        <NewProject/>
      </Routes>

     

      <p>Footer</p>
    </Router>
  );
}

export default App;
