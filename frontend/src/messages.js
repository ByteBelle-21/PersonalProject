import './messages.css';
import './channels.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function Messages(){
    return(
        <div className="channels">
           <div className='message-left-block'>
                <p className='fw-bold' style={{margin:'1vh'}}>Other Direct Messages</p>
                <ListGroup as="ol">
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start direct-message-item">
                        <div className="image-container">
                            <Image 
                                src="Group 301.png" 
                                className="top-user-img" 
                                roundedCircle 
                            />
                        </div>
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">sdbv sdcjsdc </div>
                            <Link className='view-link'>View conversations</Link>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start direct-message-item">
                        <div className="image-container">
                            <Image 
                                src="Group 301.png" 
                                className="top-user-img" 
                                roundedCircle 
                            />
                        </div>
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">sdbv sdcjsdc </div>
                            <Link className='view-link'>View conversations</Link>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start direct-message-item">
                        <div className="image-container">
                            <Image 
                                src="Group 301.png" 
                                className="top-user-img" 
                                roundedCircle 
                            />
                        </div>
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">sdbv sdcjsdc </div>
                            <Link className='view-link'>View conversations</Link>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start direct-message-item">
                        <div className="image-container">
                            <Image 
                                src="Group 301.png" 
                                className="top-user-img" 
                                roundedCircle 
                            />
                        </div>
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">sdbv sdcjsdc </div>
                            <Link className='view-link'>View conversations</Link>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start direct-message-item">
                        <div className="image-container">
                            <Image 
                                src="Group 301.png" 
                                className="top-user-img" 
                                roundedCircle 
                            />
                        </div>
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">sdbv sdcjsdc </div>
                            <Link className='view-link'>View conversations</Link>
                        </div>
                    </ListGroup.Item> 
                </ListGroup>

           </div>
           <div className='middle-block'>
               <div className='connected-user-logo-block'>

               </div>
           </div>
           <div className='message-right-block '>
                <ListGroup as="ol" className='connected-user-profile'>
                    <ListGroup.Item className='profile-item ' as="li">
                        <Image src="Group 301.png" className='profile-img' roundedCircle />
                        <p className='rfont' style={{margin:'0', fontWeight:'bold'}}>Nitya dfjhj shdfj</p>
                        <p style={{fontSize:'medium'}}>ByteBelle</p>
                        <p >Nitys is jhfjcherf hf fh f fejhfjhc sbsc jshd cbc sjd c hvsjd vbjdvbj vs vjh </p>
                    </ListGroup.Item>
                    <ListGroup.Item as="li"  className='profile-item'>
            
                    </ListGroup.Item>
                    <ListGroup.Item className='profile-skills-item' as="li">
                        <hr></hr>
                        <p  style={{marginTop:'0'}}>
                            • Total Connections : 
                            <span style={{fontWeight:'bold', marginLeft:'1vh'}}>6</span>
                        </p>
                        <p  style={{marginTop:'0'}}>
                            • Total Posts : 
                            <span style={{fontWeight:'bold' , marginLeft:'1vh'}}>6</span>
                        </p>
                        <p  style={{marginTop:'0'}}>
                            • Skill Set : 
                            <span style={{fontWeight:'bold' , marginLeft:'1vh'}}> 
                                hrnl. hbjh, hjsd, jhdgsdl , nsgd, sdvchgd, sjghdchd
                            </span>
                        </p>
                        <hr></hr>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className='activity-item'>
                        <p  style={{fontWeight:'bold' }}>Browse Tanya's posts</p>
                        <div className='activity-block'>
                            <ListGroup as="ol" className='activity-list'>
                                <ListGroup.Item as="li">
                                    <div className="fw-bold" style={{color:'#d84434'}}>sdbv sdcjsdc </div>
                                    <p style={{fontSize:'small'}} >erjhbgejhf ehrf jvef efhfefkve ergkerj ef erfer .....</p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <div className="fw-bold" style={{color:'#d84434'}}>sdbv sdcjsdc </div>
                                    <p style={{fontSize:'small'}} >erjhbgejhf ehrf jvef efhfefkve ergkerj ef erfer .....</p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <div className="fw-bold" style={{color:'#d84434'}}>sdbv sdcjsdc </div>
                                    <p style={{fontSize:'small'}} >erjhbgejhf ehrf jvef efhfefkve ergkerj ef erfer .....</p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <div className="fw-bold" style={{color:'#d84434'}}>sdbv sdcjsdc </div>
                                    <p style={{fontSize:'small'}} >erjhbgejhf ehrf jvef efhfefkve ergkerj ef erfer .....</p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <div className="fw-bold" style={{color:'#d84434'}}>sdbv sdcjsdc </div>
                                    <p style={{fontSize:'small'}} >erjhbgejhf ehrf jvef efhfefkve ergkerj ef erfer .....</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                        
                    </ListGroup.Item>
                </ListGroup>
           </div>
        </div>
    );
}

export default Messages;