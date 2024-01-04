import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Restcard from '../pages/Restcard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFood } from '../slice/FoodSlice'

function Home() {
    // accessing state inorder to display content
    const allrestaurants = useSelector((state)=> state.foodSlice.allrestaurent)
    console.log(allrestaurants);
    const dispatch = useDispatch()

    useEffect(()=>{
        //called thunk function
        dispatch(fetchFood())
    },[])

  return (
    <>
        <Row className='p-5'>
            { allrestaurants?.length>0?
            allrestaurants.map((restaurant)=>(<Col sm={6} md={4} className='p-5'>
            <Restcard restaurant = {restaurant}/>
        </Col>))
            :<p className='text-danger fs-4'>Nothing To Display</p>
           }
        </Row>
    </>
  )
}

export default Home