import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import NavigationWrapper from "../components/NavigationWrapper";

const Home = () => {
  return (
  <NavigationWrapper>
      <Container>
          <Row>
              <Col>
                <h1>Merhaba.</h1>
              </Col>
          </Row>
      </Container>
  </NavigationWrapper>)
};

export default Home;
