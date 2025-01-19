import './profile.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


function Profile(){
    return(
        <div className="profile">
            <div className='profile-left-block'>
                <ListGroup as="ol" className='profile-suggestions-list'>
                        <ListGroup.Item className='suggestion-item' as="li">
                            <div className="fw-bold">Top Profiles</div>
                            <hr style={{marginBottom:'0'}}></hr>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start suggestion-item">
                            <div className="image-container">
                                <Image 
                                    src="Group 301.png" 
                                    className="top-user-img" 
                                    roundedCircle 
                                />
                            </div>
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">sdbv sdcjsdc </div>
                                <Link className='view-link'>View Profile</Link>
                            </div>
                            <Link><span class="material-symbols-outlined message-link" style={{fontSize:'1vw'}}>chat_bubble</span></Link>  
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start suggestion-item">
                            <div className="image-container">
                                <Image 
                                    src="Group 301.png" 
                                    className="top-user-img" 
                                    roundedCircle 
                                />
                            </div>
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">sdbv sdcjsdc </div>
                                <Link className='view-link'>View Profile</Link>
                            </div>
                            <Link><span class="material-symbols-outlined message-link" style={{fontSize:'1vw'}}>chat_bubble</span></Link>  
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start suggestion-item">
                            <div className="image-container">
                                <Image 
                                    src="Group 301.png" 
                                    className="top-user-img" 
                                    roundedCircle 
                                />
                            </div>
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">sdbv sdcjsdc </div>
                                <Link className='view-link'>View Profile</Link>
                            </div>
                            <Link><span class="material-symbols-outlined message-link" style={{fontSize:'1vw'}}>chat_bubble</span></Link>  
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start suggestion-item">
                            <div className="image-container">
                                <Image 
                                    src="Group 301.png" 
                                    className="top-user-img" 
                                    roundedCircle 
                                />
                            </div>
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">sdbv sdcjsdc </div>
                                <Link className='view-link'>View Profile</Link>
                            </div>
                            <Link><span class="material-symbols-outlined message-link" style={{fontSize:'1vw'}}>chat_bubble</span></Link>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start suggestion-item">
                            <div className="image-container">
                                <Image 
                                    src="Group 301.png" 
                                    className="top-user-img" 
                                    roundedCircle 
                                />
                            </div>
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">sdbv sdcjsdc </div>
                                <Link className='view-link'>View Profile</Link>
                            </div>
                            <Link><span class="material-symbols-outlined message-link" style={{fontSize:'1vw'}}>chat_bubble</span></Link>
                        </ListGroup.Item>
                    </ListGroup>
                    <div className='top-channels-block'>
                            <p className='fw-bold'>Currently Popular Channels</p>
                            <ListGroup as="ol" >
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start" >
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                    </div>
                                    <Badge className='badge'pill>14 </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                    </div>
                                    <Badge  pill>14</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start channel-item">
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                    </div>
                                    <Badge  pill>14</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start channel-item">
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                    </div>
                                    <Badge  pill>14</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start channel-item">
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                    </div>
                                    <Badge  pill>14</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start channel-item">
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                    </div>
                                    <Badge  pill>14</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                    </div>
                                    <Badge  pill>14</Badge>
                                </ListGroup.Item>
                            </ListGroup>                               
                    </div>
            </div>
            <div className='large-block'>
                <div className='own-profile-img-block'>
                    <Image src="Group 301.png" className='own-profile-img' roundedCircle />
                    <Button className="edit-profile-btn" >
                    <span class="material-symbols-outlined " style={{marginRight:'1vh'}}> edit </span>
                        Edit Profile
                    </Button>
                    <br></br>
                    <Stack direction='horizontal' gap={1} style={{marginTop:'4vh'}}>
                        <Stack direction='vertical' style={{alignItems:'center'}}>
                            <span style={{fontWeight:'bold'}}>6</span>
                            <span>Total Posts</span>
                        </Stack>
                        <Stack direction='vertical' style={{alignItems:'center'}}>
                            <span style={{fontWeight:'bold'}}>6</span>
                            <span>Total Connections</span>
                        </Stack>
                    </Stack>    
                </div>
                <div className='profile-details-block'>
                    <div className='user-text-details'>
                        <p className='fw-bold'>User Details</p>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        defaultValue="Mark"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last name"
                                            defaultValue="Otto"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                        <Form.Label>Username</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            <Form.Control
                                            type="text"
                                            placeholder="Username"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="text" placeholder="abc@gmail.com" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid city.
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                                        <Form.Label>Occupation</Form.Label>
                                        <Form.Control type="text" placeholder="Student" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid state.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} md="9" >
                                        <Form.Label>Skills</Form.Label>
                                        <Form.Control type="text" placeholder="HTML, react, C++, .." required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid city.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                            </Form>
                            <hr style={{marginTop:'4vh', marginBottom:'4vh'}}></hr>
                        </div>
                        <div className='recent-activities-block'>
                            <p className='fw-bold' style={{display:'flex'}}>
                                <span class="material-symbols-outlined" style={{marginRight:'1vh'}}>
                                    history
                                </span> 
                                Recent Activities
                            </p>
                            <div className='history-block'>
                                <ListGroup as="ol" >
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start history-item" >
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        ernhvvkergbkeh hkrfh erkehrer w fhfukjf w kwfk.......
                                        </div>
                                        <Link className='view-post-link'>View Post</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start  history-item">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        ernhvvkergbkeh hkrfh erkehrer w fhfukjf w kwfk.......
                                        </div>
                                        <Link className='view-post-link'>View Post</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start channel-item  history-item">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                            ernhvvkergbkeh hkrfh erkehrer w fhfukjf w kwfk.......
                                        </div>
                                        <Link className='view-post-link'>View Post</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start channel-item history-item">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        ernhvvkergbkeh hkrfh erkehrer w fhfukjf w kwfk.......
                                        </div>
                                        <Link className='view-post-link'>View Post</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start channel-item history-item">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        ernhvvkergbkeh hkrfh erkehrer w fhfukjf w kwfk.......
                                        </div>
                                        <Link className='view-post-link'>View Post</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start channel-item history-item">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        ernhvvkergbkeh hkrfh erkehrer w fhfukjf w kwfk.......
                                        </div>
                                        <Link className='view-post-link'>View Post</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start channel-item history-item">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        ernhvvkergbkeh hkrfh erkehrer w fhfukjf w kwfk.......
                                        </div>
                                        <Link className='view-post-link'>View Post</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start channel-item history-item">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        ernhvvkergbkeh hkrfh erkehrer w fhfukjf w kwfk.......
                                        </div>
                                        <Link className='view-post-link'>View Post</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start channel-item history-item">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        ernhvvkergbkeh hkrfh erkehrer w fhfukjf w kwfk.......
                                        </div>
                                        <Link className='view-post-link'>View Post</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start channel-item history-item">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        ernhvvkergbkeh hkrfh erkehrer w fhfukjf w kwfk.......
                                        </div>
                                        <Link className='view-post-link'>View Post</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start channel-item history-item">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        ernhvvkergbkeh hkrfh erkehrer w fhfukjf w kwfk.......
                                        </div>
                                        <Link className='view-post-link'>View Post</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start channel-item history-item">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        ernhvvkergbkeh hkrfh erkehrer w fhfukjf w kwfk.......
                                        </div>
                                        <Link className='view-post-link'>View Post</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start channel-item history-item">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        ernhvvkergbkeh hkrfh erkehrer w fhfukjf w kwfk.......
                                        </div>
                                        <Link className='view-post-link'>View Post</Link>
                                    </ListGroup.Item>


                                </ListGroup>                   
                            </div>
                        </div>

                    </div>
            </div>

        </div>
    );
}

export default Profile;