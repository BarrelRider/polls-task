import React, { useState } from "react";
import Link from "next/link";
import {
  Container,
  Navbar,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
} from "reactstrap";

const NavigationWrapper = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container>
        <section id="navbar">
          <Navbar color="light" light expand="md">
            <Link href="/">
              <a>
                <NavbarBrand tag="span">PollsTask</NavbarBrand>
              </a>
            </Link>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link href="/questions">
                    <a className="nav-link">Soru Listesi</a>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </section>
      </Container>
      <section id="wrapper">{children}</section>
    </>
  );
};

export default NavigationWrapper;
