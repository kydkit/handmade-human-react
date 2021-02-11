import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProjectContextProvider from './context/ProjectContext'

import Home from './pages/Home'; 
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function App(){
  return (
    <Router>
      <Navbar />
      <ProjectContextProvider>
      <Route exact path="/" component={Home}/>
      </ProjectContextProvider>
      <Route exact path="/contact" component={Contact}/>
    </Router>
  )
}

export default App;