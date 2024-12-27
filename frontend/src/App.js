import Homepage from './homepage';
import './App.css';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';


function App() {
  return (
    <Routes>
                <Route path="/" element={<Homepage />} />
     </Routes>
  );
}

export default App;
