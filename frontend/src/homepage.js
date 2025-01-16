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

function Homepage({authentication}){


    const navigateTo = useNavigate()
    

    // Sign up functionality
    const [signupShow, setSignupShow] = useState(false);
    const [signupUsername, setSignupUsername] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupName, setSignupName] = useState('');
    const [signupOccupation, setSignupOccupation] = useState('');
    
    const [signupSkills, setSignupSkills] = useState('');
    const [showSignupAlert, setShowSignupAlert] = useState(false);
    const [showSignUp401, setShowSignUp401] = useState(false);
    const [signUp401Message, setSignUp401Message] = useState('');

    const openSignUp=()=>{
        setSignupShow(true);
    }
    const closeSignup= ()=>{
        setSignupShow(false);
        setShowLogIn401(false);
        setShowLoginAlert(false);
        setShowSignUp401(false);
        setShowSignupAlert(false);

    }


    const setActive=()=>{
        const form = document.getElementsByClassName("form");
        form[0].classList.add("active");

    }

    const removeActive=()=>{
        const form = document.getElementsByClassName("form");
        form[0].classList.remove("active");

    }

    // Functionality to move between signup forms
    const carouselRef = useRef(null)
    const goToNextForm=()=>{
        if (carouselRef.current) {
            carouselRef.current.next()
        }
    }

    const goToPrevForm=()=>{
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    }

    const handleSignup =async(e)=>{
        e.preventDefault();
        const skillsArray = signupSkills.split(',').map(item => item.trim()).join(',');
        if(skillsArray.length ==0 || !signupUsername || !signupEmail || !signupPassword || !signupName || !signupOccupation ){
            setShowSignupAlert(true);
            return;
        }
        openSignUp(false);
        const signupAvatar = '/Group 216.png'
        const data = {
            signupUsername, signupEmail, signupPassword, signupName, signupOccupation, skills: skillsArray, signupAvatar
        }
        try {
            const response = await axios.post('https://jrg814-4000.theiadockernext-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai//signup', data);
            if (response.status === 200) {
                authentication(true,signupUsername);
                navigateTo('/all-channels');
            } 
        } catch (error) {
            if(error.response.status === 401){
                setShowSignUp401(true);
                setSignUp401Message(error.response.data);
               
            }
            else{
                console.error("Catched axios error: ",error);
            }
        }
      
    }
    
    
    // Log in functionality
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [showLoginAlert, setShowLoginAlert] = useState(false);
    const [showLogIn401, setShowLogIn401] = useState(false);
    const [logIn401Message, setLogIn401Message] = useState('');
   
    const handleLogin =async(e)=>{
        e.preventDefault();
        if( !loginUsername || !loginPassword){
            setShowLoginAlert(true);
            return;
        }
        
        const data = {
            loginUsername, loginPassword
        }
        try {
            const response = await axios.post('https://jrg814-4000.theiadockernext-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai//login', data);
            if (response.status === 200) {
                authentication(true,loginUsername);
                navigateTo('/all-channels');
            }     
        } catch (error) {
            if(error.response.status === 401){
                setShowLogIn401(true);
                setLogIn401Message(error.response.data);
            }
            else{
                console.error("Catched axios error: ",error);
            }     
        } 
    }

    return(
        <div className='homepage'>
             <Modal size='lg' 
                   backdrop="static" 
                   keyboard={false} 
                   show={signupShow} 
                   onHide={closeSignup} 
                   centered style={{"--bs-modal-border-radius":'2vw',
                   '--bs-modal-padding':0,
                   '--bs-modal-margin':0}} >
                <ModalBody>
                    <div className="form">
                        <div className='slide-over'>
                            <div className='slide-panel left-slide-over'>
                                <p className='mfont' style={{fontWeight:'bold'}}>
                                    Hello, Friend!
                                </p>
                                <p className='rfont'>Don't have an account ?</p>
                                <Button onClick={setActive}  className='buttonText' >
                                    Sign Up
                                </Button>
                            </div>
                            <div className=' slide-panel right-slide-over'>
                                <p className='mfont' style={{fontWeight:'bold'}}>
                                    Welcome Back!
                                </p>
                                <p className='rfont'>Already have an account ?</p>
                                <Button onClick={removeActive} className='buttonText'>
                                    Log In
                                </Button>
                            </div> 
                        </div>
                        <div className='form-field login'>
                            {showLoginAlert && <p className='sfont' style={{padding:'0.1vw', color:'red'}}>     
                                                    Please fill out all required fields
                                                </p>}
                            {showLogIn401 && <p className='sfont' style={{padding:'0.1vw', color:'red'}}>  
                                                    {logIn401Message}
                                                    </p> }
                            {!showLogIn401 && !showLoginAlert  && 
                                <p className='mfont' style={{fontWeight:'bold'}}>
                                    Log In
                            </p>}
                            <Form onSubmit={handleLogin}>
                                <Form.Group controlId="signup-username" >
                                    <Form.Label className='rfont'>Username</Form.Label>
                                    <Form.Control  type="text" 
                                                  placeholder="Enter username" 
                                                  className='mb-3 ' 
                                                  style={{fontSize:'calc(0.4em + 1vmin)'}}
                                                  onChange={(e) => {
                                                    setLoginUsername(e.target.value); 
                                                    setShowLoginAlert(false);}} />
                                </Form.Group>
                                <Form.Group controlId="signup-password">
                                    <Form.Label className='rfont' >Password</Form.Label>
                                    <Form.Control type="password" 
                                                  placeholder="Password" 
                                                  style={{fontSize:'calc(0.4em + 1vmin)'}}
                                                  className='mb-3' 
                                                  onChange={(e) =>{
                                                    setLoginPassword(e.target.value); 
                                                    setShowLoginAlert(false);}} />
                                </Form.Group>
                                <Stack direction="horizontal" gap={3}>
                                    <Button  className="btn btn-primary w-100 buttonText" 
                                             onClick={closeSignup} >
                                        Cancle
                                    </Button>
                                    <Button onClick={handleLogin} className="btn btn-primary w-100 buttonText">
                                        Log in
                                    </Button>
                                </Stack>   
                            </Form>

                        </div>
                        <div className='form-field SignUp'>
                            {showSignupAlert && <p className='sfont' style={{padding:'0.1vw', color:'red'}}>     
                                                    Please fill out all required fields
                                                </p>}
                            {showSignUp401 && <p className='sfont' style={{padding:'0.1vw', color:'red'}}>  
                                                    {signUp401Message}
                                                    </p> }
                                        
                            {!showSignUp401 && !showSignupAlert &&  
                            <p className='mfont' style={{fontWeight:'bold'}}> Sign Up</p> }
                            <Carousel style={{height:'70%'}} interval={600000} 
                                className='vertical-placement' 
                                ref={carouselRef}>
                                <Carousel.Item className='vertical-placement'>
                                    <Form onSubmit={handleSignup}>
                                            <Form.Group controlId="signup-username" >
                                                <Form.Label className='rfont'>Username</Form.Label>
                                                <Form.Control type="text" style={{fontSize:`calc(0.4em + 1vmin)`}}
                                                placeholder="Enter username" className='mb-3' 
                                                onChange={(e) => {setSignupUsername(e.target.value); setShowSignupAlert(false);}} />
                                            </Form.Group>
                                            <Form.Group controlId="signup-email">
                                                <Form.Label className='rfont'>Email address</Form.Label>
                                                <Form.Control type="email" 
                                                style={{fontSize:'calc(0.4em + 1vmin)'}} 
                                                placeholder="Enter email" 
                                                className='mb-3' 
                                                onChange={(e) => {setSignupEmail(e.target.value); setShowSignupAlert(false);}} />
                                            </Form.Group>
                                            <Form.Group controlId="signup-password">
                                                <Form.Label className='rfont'>Password</Form.Label>
                                                <Form.Control 
                                                type="password" 
                                                style={{fontSize:'calc(0.4em + 1vmin)'}}  
                                                placeholder="Password" 
                                                className='mb-3' 
                                                onChange={(e) => {setSignupPassword(e.target.value); setShowSignupAlert(false);}} />
                                            </Form.Group>
                                            <Stack direction="horizontal" gap={3}>
                                                <Button  className="btn btn-primary w-100 buttonText" onClick={closeSignup} >Cancle</Button>
                                                <Button  className="btn btn-primary w-100 buttonText" onClick={goToNextForm} >Continue</Button>
                                            </Stack>   
                                        </Form>
                                </Carousel.Item>
                                <Carousel.Item className='vertical-placement'>
                                  
                                    <Form onSubmit={handleSignup}>
                                        <Form.Group controlId="signup-name" >
                                            <Form.Label className='rfont'>Name</Form.Label>
                                            <Form.Control 
                                            type="text" 
                                            style={{fontSize:'calc(0.4em + 1vmin)'}} 
                                            placeholder="Enter name" className='mb-3' 
                                            onChange={(e) => {setSignupName(e.target.value) ; setShowSignupAlert(false);}} />
                                        </Form.Group>
                                        <Form.Group controlId="signup-occupation">
                                            <Form.Label className='rfont'>Occupation</Form.Label>
                                            <Form.Control 
                                            type="text" 
                                            style={{fontSize:'calc(0.4em + 1vmin)'}} 
                                            placeholder="Enter occupation" 
                                            className='mb-3' 
                                            onChange={(e) => {setSignupOccupation(e.target.value) ; setShowSignupAlert(false);}} />
                                        </Form.Group>
                                        <Form.Group controlId="signup-skills">
                                            <Form.Label className='rfont'>Skills</Form.Label>
                                            <Form.Control 
                                            type="text" 
                                            style={{fontSize:'calc(0.4em + 1vmin)'}} 
                                            placeholder="Enter skills" 
                                            className='mb-3' 
                                            onChange={(e) => {setSignupSkills(e.target.value) ; setShowSignupAlert(false);}} />
                                        </Form.Group>
                                        <Stack direction="horizontal" gap={3}>
                                            <Button  className="btn btn-primary w-100 buttonText" onClick={goToPrevForm} >Go back</Button>
                                            <Button className="btn btn-primary w-100 buttonText" onClick={handleSignup} >Sign Up</Button>
                                        </Stack>
                                    </Form>
                                    
                                </Carousel.Item>
                            </Carousel>
                        </div> 
                    </div >
                </ModalBody>
           </Modal>
            <Stack direction="horizontal" gap={4} className='welcome-block'>
                <div className="me-auto">
                    <p className='welcome-headline'> 
                        Welcome to <br></br> Our Community
                    </p>
                    <p className='mfont'> 
                        Feeling stuck and can't find solutions ?
                        <br></br>Post your question and let our community guide you to the answer. 
                    </p>
                    <Button className='rfont action-button' onClick={openSignUp}> Get Started </Button>
                </div>
                <div>
                    <img className='hero-img' src="/Group 210.png"/>
                </div>
            </Stack>
            <div>
                <Stack direction="horizontal" gap={5} className='highlights'>
                    <div className='hero-points rfont'>
                        <span class="material-symbols-outlined icons">rocket_launch</span>
                        <p>
                            Step into the spotlight by <span style={{color:'#f54d3b'}}>launching your own channel</span>, 
                            where you can share your unique viewpoint,
                            spark meaningful conversations, and connect with like-minded individuals
                        </p>
                    </div> 
                    <div className='hero-points rfont'>
                        <span class="material-symbols-outlined icons">location_searching</span>
                        <p>
                        Quickly discover exactly what you're looking for by <span style={{color:'#f54d3b'}}>searching 
                        for people, channels, or posts </span>that match your interests, 
                        ensuring a seamless browsing experience
                        </p>
                    </div>
                    <div className='hero-points rfont'>
                        <Stack direction='horizontal'>
                        <span class="material-symbols-outlined icons">description</span>
                        </Stack>
                        <p>
                        Make your posts more engaging by <span style={{color:'#f54d3b'}}>easily uploading images, files, and 
                        code snippets.</span> Share your ideas in full detail and 
                        connect with others through rich, multimedia content.
                        </p>
                    </div>
                </Stack>
            </div>
            <Stack className='feature-block' direction='horizontal'gap={4} >
                <img src="/Vector.png" className=' me-auto vector-img'></img>
                <div>
                    <p className='lfont' style={{fontWeight:'bold'}}>
                        <span style={{color:'#f54d3b'}}>Connect Directly:</span> Message and network with Ease
                    </p>
                    <p className='rfont'>
                        With our new direct messaging feature, you can now 
                        connect with people one-on-one. <br/>Start conversations, 
                        exchange ideas, and build your network effortlessly.
                    </p>
                </div>     
            </Stack>
            <div className='footbar'>
                <p className='mfont' style={{fontWeight:'bold'}}>Join Our Community</p>
                <p className='rfont'> Don’t miss out! Join others who are already 
                    engaging, learning, and growing. 
                    <br></br>
                    Get started now – 
                    it's free and easy!
                </p>
               <Button className='footbar-btn' onClick={openSignUp}> Join Us </Button> 
            </div> 
        </div>
     
    );
}

export default Homepage;