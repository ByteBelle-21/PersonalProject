import Nav from 'react-bootstrap/Nav';
import './Uniformstyle.css';

function Navlink(){
    return(
    <Nav className='navlink' defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey="link-1">Channels</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Messages</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled">Log out</Nav.Link>
        </Nav.Item>
    </Nav>
    );
}
export default Navlink;