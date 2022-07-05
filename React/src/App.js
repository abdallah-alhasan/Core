import './App.css';
import Home from './Pages/Home';
import Error from './Pages/Error';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Appointments from './Pages/Appointments';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book-an-appointment' element={<Appointments />} />
          {/* enter your routes here */}
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
