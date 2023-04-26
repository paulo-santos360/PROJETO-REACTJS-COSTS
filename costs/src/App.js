import {
  BrowserRouter as Router,
  Routes,
  Route, Link
} from 'react-router-dom'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import Projetos from './components/pages/Projetos'
import Container from './components/layout/Container'

function App() {
  return (
    <Router>

      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/projeto'>Novo Projeto</Link>
      </div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/company' element={<Company />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/projetos' element={<Projetos />} />
      </Routes>
      <footer>Footer</footer>
    </Router>
  )
}

export default App
