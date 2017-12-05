import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          className="footer-container"
          color="info"
          light expand="md"
        >
          <NavbarBrand href="/">Copyright 2017 Scott Dickscheid | All Rights Reserved</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {/* <NavLink href="/components/">Components</NavLink> */}
              </NavItem>
              <NavItem>
                {/* <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink> */}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
