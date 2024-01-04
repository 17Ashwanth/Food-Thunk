import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';


function RestReview(props) {
  const review = props.review
  console.log(review);

  const [open, setOpen] = useState(false);
  return (
    <>
         <button style={{height:'50px'}}  onClick={() => setOpen(!open)} className='btn btn-outline-danger' >Click Here To Save The Reviews</button>

         <Collapse in={open} dimension="width">
          <div>
            { review.map((item)=>(<>
              <hr/>
              <h6>{item.name} {item.date}</h6>
              <p>Rating :{item.rating}</p>
              <p>{item.comments}</p>
              </>))
              
            }

            
          </div>
        </Collapse>

    </>
  )
}

export default RestReview