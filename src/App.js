import React from 'react'
import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { css } from 'styled-components';
import logo from './img/logo.png';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';
import './css/Variables.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrush, faCircleInfo, faCog, faImages, faPalette, faToolbox } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

import NavButton from './components/NavButton.jsx';

// const Test = styled.div`
//   background-color: blue;
//   padding: 50px;
// `

const Test = styled(Container)`
  background-color: blue;
  padding: 50px;
  ${props => props.red && css`
    color: red;
  `}
`

function App() {

  const [navHeight, setNavHeight] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)

  const navbarRef = useRef(null)
  const mainRef = useRef(null)
  const recentPanelRef = useRef(null)

  const getHeights = () => {
    setNavHeight(navbarRef.current.clientHeight)
    setContentHeight(mainRef.current.clientHeight)
  }

  useLayoutEffect(() => {
    getHeights()

    window.addEventListener('resize', getHeights)

  }, [])

  const RecentPanel = styled.div`
    background-color: blue;
    padding: 10px;
    height: 160px;
    display: flex;
    flex-direction: row;
  `

  const RecallPanel = styled.div`
    background-color: var(--secondary-panel-color);
    border-radius: 10px;
    box-shadow: 0 0 10px var(--shadow);
    padding: 20px;
    color: white;
    height: 100%;
  `

  const ImageItem = styled.div`
    background-color: white;
    padding: 10px;
    height: 100%;
    width: 128px;
    border-radius: 3px;
    border: 1px solid #e0e0e0;
    margin-right: 5px;
  `

  const MainContainer = styled(Container)`
    height: 100vh;
  `

  let canvasHeight = 512
  let canvasWidth = 512

  return (
    <MainContainer fluid ref={mainRef}>
      {/* NAV */}
      {/* <Row className='custom-navbar' ref={navbarRef}>
        <Col className="logo">
          <img src={logo} className="app-logo" alt="LUMINARY" />
          <h6>LUMINARY</h6>
        </Col>
        <Col lg={9} className='nav-buttons-container'>
          <NavButton>Create</NavButton>
          <button className='custom-nav-btn'><FontAwesomeIcon className="icon" icon={faBrush} />{' '}CREATE</button>
          <Button className='custom-nav-btn'><FontAwesomeIcon className="icon" icon={faImages} />{' '}GALLERY</Button>
          <Button className='custom-nav-btn'><FontAwesomeIcon className="icon" icon={faPalette} />{' '}PROMPTS</Button>
          <Button className='custom-nav-btn'><FontAwesomeIcon className="icon" icon={faToolbox} />{' '}POST-PROCESSING</Button>
          <Button className='custom-nav-btn'><FontAwesomeIcon className="icon" icon={faCircleInfo} />{' '}ABOUT</Button>
        </Col>
        <Col className='nav-buttons-end'>
          <Button className='custom-nav-btn'><FontAwesomeIcon className="icon" icon={faCog} />{' '}</Button>
        </Col>
      </Row> */}
      
      {/* MAIN CONTENT */}
      {/* <Row style={{"height" : contentHeight - navHeight}} className='main-content'>
        <Col>
          <Row>
            <Col>
              <Row className='bg-info'>
                {/* RECALL PANEL */}
                <Col>
                  <RecallPanel>
                    panel test
                  </RecallPanel>
                </Col>
                {/* PROMPT & CANVAS */}
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
                      height={canvasHeight}
                      width={canvasWidth}
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
                      rounded
                    />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <RecentPanel>
                <ImageItem />
                <ImageItem />
                <ImageItem />
                <ImageItem />
                <ImageItem /> 
                <ImageItem /> 
              </RecentPanel>
            </Col>
          </Row>
        </Col>
        <Col lg={3}>
          <div className='panel'>
            panel test
          </div>
        </Col>
      </Row> */}

    </MainContainer>

  )
}

export default App;
