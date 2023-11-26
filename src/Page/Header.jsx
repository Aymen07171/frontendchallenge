import React, { useState } from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';

export default function Header() {
  const [isLinkActive, setIsLinkActive] = useState(false);

  const handleClick = () => {
    setIsLinkActive(!isLinkActive);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Logo and Link Text */}
          <Navbar.Brand href="#home">
            <img
              alt="Logo"
              src="https://img.logoipsum.com/327.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
              <button
              type="button"
              onClick={handleClick}
              style={{ color: isLinkActive ? 'white' : 'gray', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {'| Help Center '}
            </button>
          </Navbar.Brand>

          {/* Link Text and Example of two buttons */}
          <div className="d-flex align-items-center">
           <Button variant="outline-light">
              Submit a request
            </Button>
            <div className="spacer"></div>
            <Button variant="primary">
              Sign in
            </Button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
