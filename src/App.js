import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './components/screens/Home';
import { Login } from './components/screens/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
