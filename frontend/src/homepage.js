import './Homepage.css';
import './Uniformstyle.css';
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
        <div className='homepage'>
            <Stack direction="horizontal" gap={4} className='welcome-block'>
                    <div className="me-auto">
                        <p className='welcome-headline'> 
                            Welcome to <br></br> Our Community
                        </p>
                        <p className='mfont'> 
                            Feeling stuck and can't find solutions ?
                            <br></br>Post your question and let our community guide you to the answer. 
                        </p>
                        <Button className='rfont action-button'> Get Started </Button>
                    </div>
                    <div>
                        <img className='hero-img' src="/Group 210.png"/>
                    </div>
                </Stack>
                <div>
                <Stack direction="horizontal" gap={5} className='highlights'>
                    <div className='hero-points'>
                        <span class="material-symbols-outlined">rocket_launch</span>
                        <p>
                            Step into the spotlight by launching your own channel, 
                            where you can share your unique viewpoint,
                             spark meaningful conversations, and connect with like-minded individuals
                        </p>
                    </div>
                    <div className='hero-points'>
                        <span class="material-symbols-outlined">location_searching</span>
                        <p>
                        Quickly discover exactly what you're looking for by searching 
                        for people, channels, or posts that match your interests, 
                        ensuring a seamless browsing experience
                        </p>
                    </div>
                    <div className='hero-points'>
                        <Stack direction='horizontal'>
                        <span class="material-symbols-outlined">description</span>
                        </Stack>
                        <p>
                        Make your posts more engaging by easily uploading images, files, and 
                        code snippets. Share your ideas in full detail and 
                        connect with others through rich, multimedia content.
                        </p>
                    </div>
                   
                </Stack>
                <Stack className='feature-block' direction='horizontal'gap={4} >
                    <img src="/Vector.png" className=' vector-img'></img>
                    <div>
                        <p className={device==0?'lfont':'mfont'} style={{fontWeight:'bold'}}>
                            Connect Directly: Message and network with Ease
                        </p>
                        <p className='rfont'>
                            With our new direct messaging feature, you can now 
                            connect with people one-on-one. <br/>Start conversations, 
                            exchange ideas, and build your network effortlessly.
                        </p>
                    </div>     
                </Stack> 

                </div>


            
        </div>    
    );
}

export default Homepage;