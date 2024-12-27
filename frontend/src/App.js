import Homepage from './homepage';
import './App.css';
import AllChannels from './allChannels';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
    const [hasAuthentication, setHasAuthentication] = useState(false)
    const [authenticatedUser, setAuthenticatedUser] = useState(()=>{
        const user = sessionStorage.getItem('auth_user')
        if (user){
            setHasAuthentication(true)
            return user;
        }
        return '';
    })

    useEffect(() => {
        sessionStorage.setItem('auth_user', authenticatedUser)
    }, [authenticatedUser]);

    const authentication = (hasAccess,current_user)=>{
        setHasAuthentication(hasAccess);
        setAuthenticatedUser(current_user);
    }

    const removeAuthentication = ()=>{
        setHasAuthentication(false);
        setAuthenticatedUser('');
    }

  return (
    <Routes>
                <Route path="/" element={<Homepage authentication={authentication} />} />
                <Route path="/all-channels" element={hasAuthentication ? <AllChannels removeAuthentication={removeAuthentication}/> : <Navigate to="/" />}/>
     </Routes>
  );
}

export default App;
