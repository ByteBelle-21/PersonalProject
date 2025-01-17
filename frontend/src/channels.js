import './channels.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function Channels(){
    return(
        <div className="channels">
           <div className='left-block'>
                <Button className='add-channel-btn'><span class="material-symbols-outlined"> add</span> New Channel</Button>
                <div className='channel-list'>
                    <p>All Channels</p>
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
                            className="d-flex justify-content-between align-items-start ">
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
           <div className='middle-block'>

           </div>
           <div className='right-block'>
                <ListGroup as="ol" className='profile-list'>
                    <ListGroup.Item className='list-item first-item' as="li">
                        <Image src="Group 301.png" className='profile-img' roundedCircle />
                        <p className='rfont' style={{margin:'0', fontWeight:'bold'}}>Name is my</p>
                        <p style={{margin:'0'}}>My pofession is </p>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className='list-item' >
                        <p style={{margin:'0'}}>Total Posts</p>
                        <p style={{margin:'0' , fontWeight:'bold'}}>35</p>
                    </ListGroup.Item>
                    <ListGroup.Item className='list-item' as="li">
                        <p style={{margin:'0'}}>Total Connections</p>
                        <p style={{margin:'0', fontWeight:'bold'}}>6</p>
                    </ListGroup.Item>
                    <ListGroup.Item className='list-item' as="li">
                        <Link className='profile-link'>View Profile</Link>
                    </ListGroup.Item>
                </ListGroup>
                <div className='suggestions'>
                    <ListGroup as="ol" className='suggestions-list'>
                        <ListGroup.Item  as="li">
                            <div className="fw-bold">Top Profiles</div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
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
                            <Link className='message-link'>Message</Link>   
                        </ListGroup.Item>
                        
                    </ListGroup>

                </div>
               
                
           </div>
        </div>
    );
}

export default Channels;