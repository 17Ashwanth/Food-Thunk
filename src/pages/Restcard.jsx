import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link,  } from 'react-router-dom';

function Restcard({restaurant}) {

  return (
            <div>
            <Link to={`/view/${restaurant.id}`} style={{textDecoration:'none'}}>
            <Card style={{ width: '100%', }}>
            <Card.Img height={'350px'} variant="top" src={restaurant.photograph}/>
            <Card.Body>
            <Card.Title className='text-center text-danger'>{restaurant.name}</Card.Title>
            <hr />
            <div className='d-flex justify-content-between'>
                <h6>{restaurant.neighborhood}</h6>
                <h6>{restaurant.cuisine_type}</h6>
            </div>
            </Card.Body>
            </Card>
            </Link>
            </div>
  )
}

export default Restcard