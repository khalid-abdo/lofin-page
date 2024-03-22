import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Sign from './components/Sign-in';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route index element={<Login/> } />
        <Route path='/' element={<Login />} />
        <Route path='sign' element={<Sign />} />
        </Routes>
        </Router>

    </div>
  );
}

export default App;
