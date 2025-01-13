import Container from 'react-bootstrap/esm/Container';
import './App.css';
import Homepage from './homepage';
import Navlink from './navlink';

import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';

function App() {
  return (
    <Container >
      <Navlink/>
        <Routes>
            <Route path="/" element={<Homepage/>} />
        </Routes>
    </Container>
    
  );
}

export default App;
