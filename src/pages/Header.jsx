import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import { search } from '../slice/FoodSlice'

function Header() {
  const dispatch = useDispatch()
  return (
    <div>
        <Navbar className="bg-body-dark">
        <Container>
        <Navbar.Brand className='d-flex justify-content-evenly'>
        <div>
            <Link to={'/'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}>
            <i class="fa-solid fa-bowl-food" style={{color:'orangered'}} ></i> HOT <span style={{color:'orangered'}}>BUCKET.</span>
            </Link>
      </div>
      <div>          
      <Form.Control onChange={(e)=>dispatch(search(e.target.value))} style={{marginLeft:'50rem', width:'30%'}}
            required
            type ="text"
            placeholder="Enter the Neighborhood"/>      
      </div>
      </Navbar.Brand>
    </Container>
  </Navbar>
    </div>
  )
}

export default Header