import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import { Aboutme } from './pages/Aboutme'
import { Blogs } from './pages/Blogs'
import { Layout } from './components/Layout'
import { ProjectDes } from './pages/ProjectDes'; // adjust the path if needed

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/aboutme' element={<Aboutme/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path="/projects/:id" element={<ProjectDes />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App