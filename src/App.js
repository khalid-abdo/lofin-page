import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Sign from './components/Sign-in';
import Login from './components/Login';

function App() {
  return (
    // <div className="App">

    <Routes>
      <Route  path='/' element={<Login />} />
      <Route path='/sign' element={<Sign />} />
    </Routes>


    // </div>
  );
}

export default App;
