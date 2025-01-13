import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { useRef } from 'react';
import Alert from 'react-bootstrap/Alert';
import {recognizeDevice} from './functions.js';
import ModalBody from 'react-bootstrap/esm/ModalBody.js';

function Homepage(){

    const [device, setDevice] = useState();
    useEffect(() => {
        const fetchDeviceType= ()=>{
            try {
                const response = recognizeDevice();
                if (response != null) {
                    setDevice(response);
                } 
            }catch (error) {
                console.error("Catched error during retrieving popular channels: ",error);    
            }
        }
        window.addEventListener('resize', fetchDeviceType);
        fetchDeviceType(); 
        return () => window.removeEventListener('resize', fetchDeviceType);
    }, []);


    return(
       
            <p>Hello</p>
       
    );
}

export default Homepage;