import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Offcanvas} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Outlet} from "react-router";

export default function Layout() {
    return (
        <>
            <Navbar key={"sm"} bg="light" expand={"sm"} className="mb-3">
                <Container fluid>
                    <Navbar.Brand as={Link} to={"/"} >StartIT</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}/>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className={"text-center"}>
                            <Nav className="justify-content-center flex-grow-1">
                                <Nav.Link as={Link} to={"/"} onClick={() => {
                                    window.location.replace('http://localhost:3000')
                                }}>Home</Nav.Link>
                                <Nav.Link onClick={()=>{
                                    window.location.replace('http://localhost:3000/courses');
                                }}>Courses</Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                    id={`offcanvasNavbarDropdown-expand-lg`}
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    )
}