import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
       <NavLink to="/greeting">
           greeting
       </NavLink>
      <Routes>
        <Route path = '/greeting' element={<Greeting />} />
      </Routes>
    </div>
   
  );
}

export default App;
