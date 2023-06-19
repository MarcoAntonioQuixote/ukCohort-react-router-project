import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import Profile from './components/Profile';
import Compare from './components/Compare';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App-header">

      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddStudent/>} />
        <Route path="/profile/:id" element={<Profile/>} />
        <Route path="/compare" element={<Compare/>} />
      </Routes>
      Such as this.
    </div>
  );
}

export default App;
