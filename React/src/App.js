import './App.css';
import Home from './Pages/Home';
import Error from './Pages/Error';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* enter your routes here */}
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
