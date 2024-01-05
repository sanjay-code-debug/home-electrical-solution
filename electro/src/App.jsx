
import './App.css'
import HomePage from './components/HomePage'
import Services from './components/Services';
import { BrowserRouter as Router, Route, Routes, Link,} from 'react-router-dom';
function App() {
  
  return (
    <>
    
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
