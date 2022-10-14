import React from 'react'
import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import logo from './img/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrush, faCircleInfo, faCog, faImages, faPalette, faToolbox } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'


function App() {

  const [navHeight, setNavHeight] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)

  const navbarRef = useRef(null)
  const mainRef = useRef(null)

  const getHeights = () => {
    setNavHeight(navbarRef.current.clientHeight)
    setContentHeight(mainRef.current.clientHeight)
  }

  useLayoutEffect(() => {
    getHeights()

    window.addEventListener('resize', getHeights)

  }, [])

  return (

    <div className="main" ref={mainRef}>
      <Container fluid className='fill'>
        {/* NAV */}
        <Row className='custom-navbar' ref={navbarRef}>
          <Col className="logo">
            <img src={logo} className="app-logo" alt="LUMINARY" />
            <h6>LUMINARY</h6>
          </Col>
          <Col lg={9} className='nav-buttons-container'>
            <Button className='custom-nav-btn'><FontAwesomeIcon className="icon" icon={faBrush} />{' '}CREATE</Button>
            <Button className='custom-nav-btn'><FontAwesomeIcon className="icon" icon={faImages} />{' '}GALLERY</Button>
            <Button className='custom-nav-btn'><FontAwesomeIcon className="icon" icon={faPalette} />{' '}PROMPTS</Button>
            <Button className='custom-nav-btn'><FontAwesomeIcon className="icon" icon={faToolbox} />{' '}POST-PROCESSING</Button>
            <Button className='custom-nav-btn'><FontAwesomeIcon className="icon" icon={faCircleInfo} />{' '}ABOUT</Button>
          </Col>
          <Col className='nav-buttons-end'>
            <Button className='custom-nav-btn'><FontAwesomeIcon className="icon" icon={faCog} />{' '}</Button>
          </Col>
        </Row>
        
        {/* MAIN CONTENT */}
        <Row style={{"height" : contentHeight - navHeight}} className='main-content'>
          <Col>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <div className='panel'>
                      panel test
                    </div>
                  </Col>
                  <Col>
                    {/* PROMPT INPUT */}
                    <Row>
                      <Col>
                        <FloatingLabel controlId="floatingTextarea2" label="Prompt">
                          <Form.Control
                            as="textarea"
                            placeholder="Enter a prompt"
                            style={{ height: '80px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    {/* CANVAS */}
                    <Row>
                      <Col>
                      <Image
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
                        rounded
                      />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <h1 className='bg-info'>MAIN CONTENT</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 className='bg-info'>MAIN CONTENT</h1>
              </Col>
            </Row>
          </Col>
          <Col lg={3}>
            <div className='panel'>
              panel test
            </div>
          </Col>
        </Row>

      </Container>
    </div>

  )
}

export default App;
