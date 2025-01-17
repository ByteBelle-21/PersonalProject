import Container from 'react-bootstrap/esm/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './homepage';
import Navlink from './navlink';
import Channels from './channels';

import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';

function App() {
  return (
    <Router >
      <div className='page-layout'>
          <Navlink/>
          <div className='subpages'>
            <Routes>
                <Route path="/" element={<Channels/>}/>
            </Routes>
          </div>
          
      </div>
    </Router>
    
  );
}

export default App;
