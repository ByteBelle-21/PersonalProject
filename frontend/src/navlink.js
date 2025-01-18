import Nav from 'react-bootstrap/Nav';
import './Uniformstyle.css';

function Navlink(){
    return(
    <Nav className='navlink' defaultActiveKey="/home">
        <Nav.Item className='me-auto'>
            <Nav.Link style={{marginLeft:'5vw', padding:'0'}} >CScommunity</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link> Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link > Channels</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link > Messages</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link > Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link style={{marginRight:'5vw'}} > Log out</Nav.Link>
        </Nav.Item>
        
    </Nav>
    );
}
export default Navlink;