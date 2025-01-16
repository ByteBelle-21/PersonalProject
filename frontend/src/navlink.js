import Nav from 'react-bootstrap/Nav';
import './Uniformstyle.css';

function Navlink(){
    return(
    <Nav className='navlink' defaultActiveKey="/home">
        <Nav.Item className='me-auto'>
            <Nav.Link style={{marginLeft:'5vw', padding:'0'}} >CScommunity</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className='join-button'>Join Us</Nav.Link>
        </Nav.Item>
    </Nav>
    );
}
export default Navlink;