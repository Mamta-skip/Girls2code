import { useState } from 'react'

import './App.css'
import{Row,Col, Container} from 'react-bootstrap'
import Header from './component/header'
import Sidenav from './component/Sidenav'
import MainContent from './component/MainContent'
import Footer from './component/Footer'
import UseStateWithObject from './component/UseStateWithObject'


function App() {
  

  return (
    
   
   
//     <Container className="border border-primary">
//     <Row className='justify-content-md-center align-items-center  bg-success'  style={{ height: '200px' }}>
//       <Header title="HEADER"/>
//     </Row>
//     <Row  style={{ height: '400px' }}>

// <Col md={4} className='bg-primary d-flex justify-content-md-center align-items-center'><Sidenav title="SIDENAV" /></Col>
// <Col md={8}  className='bg-warning d-flex justify-content-md-center align-items-center'><MainContent title="MAIN CONTENT"/></Col>

//     </Row>
//     <Row className='justify-content-md-center align-items-center bg-secondary '  style={{ height: '200px' }}>
//       <Footer title="FOOTER"/>
//     </Row>
//    </Container>
<>
<UseStateWithObject></UseStateWithObject>
</>
 
  )
}

export default App
