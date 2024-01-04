import React from 'react'
import { Button, Col, ListGroupItem, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../pages/RestReview';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

function View() {
    const {id} = useParams()
    console.log(id);
  
    const allrestaurant = useSelector((state)=>state.foodSlice.allrestaurent)
    console.log(allrestaurant);
    const searchedRes = allrestaurant.find((item)=>item.id==id)
    console.log(searchedRes);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Row className='container'>
            <Col md={4}>
                <img width={'100%'} src={searchedRes.photograph} alt="" />
            </Col>
            <Col md={8}>
                <hr />
                <h2 className='text-center'>HOT<span className='text-danger'> BUCKET.</span> DETAILS</h2>
                <hr />
                <div className="container border w-100">
                    <h3 className="mt-3 text-center">{searchedRes.name}</h3>
                    <ListGroup className='mt-5 p-2' variant="flush">
                    <ListGroup.Item>Neighborhood: {searchedRes.neighborhood}</ListGroup.Item>
                    <ListGroup.Item>Cuisine Type: {searchedRes.cuisine_type}</ListGroup.Item>
                    <ListGroup.Item>Address: {searchedRes.address}</ListGroup.Item>
                    <ListGroup.Item  className='p-5 fw-bold text-center'>
                        <button style={{height:'50px'}} onClick={handleShow} className='btn btn-outline-danger me-2' >Operating Hours</button>
                        <RestReview review={searchedRes.reviews}/>
                            <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Operating Hours</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <ListGroup>
                            <ListGroup.Item>Monday : {searchedRes.operating_hours.Monday}</ListGroup.Item>     
                            <ListGroup.Item>Tuesday : {searchedRes.operating_hours.Tuesday}</ListGroup.Item>     
                            <ListGroup.Item>Wednesday : {searchedRes.operating_hours.Wednesday}</ListGroup.Item>     
                            <ListGroup.Item>Thursday : {searchedRes.operating_hours.Thursday}</ListGroup.Item>     
                            <ListGroup.Item>Friday : {searchedRes.operating_hours.Friday}</ListGroup.Item>     
                            <ListGroup.Item>Saturday : {searchedRes.operating_hours.Saturday}</ListGroup.Item>     
                            <ListGroup.Item>Sunday : {searchedRes.operating_hours.Sunday}</ListGroup.Item>     
                                 
                            </ListGroup>
                            </Modal.Body>
                            </Modal>
                        

                    
                    </ListGroup.Item>
                    </ListGroup>
                    
                </div>
                <hr />
            </Col>

        </Row>
    </div>
  )
}

export default View