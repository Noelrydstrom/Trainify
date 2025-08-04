import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Calender from './pages/Calender';
import Nutrition from './pages/Nutrition';
import Workouts from './pages/Workouts';

const App = () => {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/calender">Calender</Link>
        <Link to="/nutrition">Nutrition</Link>
        <Link to="/workouts">Workouts</Link>
      </nav>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
