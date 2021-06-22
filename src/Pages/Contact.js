
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Jumbotron,
  Card,  
  CardText,
  CardBody,
  CardTitle, 
  CardSubtitle,
  Container, 
  Row, 
  Col
 
} from 'reactstrap';

const Contact = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/"><Jumbotron className="title"><h1>Contact Me</h1></Jumbotron></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      <div>
      <Container fluid="md">
  <Row xs="2">
    <Col>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Email Me</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">sky@bastproductions.com</CardSubtitle>
          <CardText>The only way to make an appointment with me is by email.</CardText>
        </CardBody>
      </Card>      
    </Col>
    <Col>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Text Me</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">867-5309</CardSubtitle>
          <CardText>This is the best way to communicate with me, outside of work.</CardText>
        </CardBody>
      </Card>      
    </Col>
    <Col>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Call Me</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">867-5309</CardSubtitle>
          <CardText>I never answer the phone.</CardText>
        </CardBody>
      </Card>      
    </Col>
    <Col>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Send me a package?</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Cemetery Ridge, U.S.A.</CardSubtitle>
          <CardText>If you want to send something to The Addams Family, send it to the address above.</CardText>
        </CardBody>
      </Card>      
    </Col>
  </Row>
</Container>
    </div>

    </div>

    
  );
}

export default Contact;