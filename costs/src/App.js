import {
  BrowserRouter as Router,
  Routes,
  Route, Link
} from 'react-router-dom'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProjects'
import Projetos from './components/pages/Projetos'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components//layout/Footer'

function App() {
  return (
    <Router>

     <Navbar />
      <Container customClass="min-height">
      <Routes>
        
        <Route exact path='/' element={<Home />} />
        <Route exact path='/company' element={<Company />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/newprojetos' element={<NewProject />} /> 
      {/*   <Route exact path='/projetos' element={<Projetos />} />  */}

        
      </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}

export default App
