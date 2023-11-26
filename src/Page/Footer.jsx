import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000000', padding: '20px 0', marginTop: '50px' }}>
      <Container>
        <Row>
          <Col md={6} style={{color:'white'}}>
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu urna vitae odio volutpat ultricies.</p>
          </Col>
          <Col md={6} style={{color:'white'}}>
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12} className="text-center" style={{color:'white'}}>
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
