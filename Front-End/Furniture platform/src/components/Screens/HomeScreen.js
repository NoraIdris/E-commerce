import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import axios from 'axios';
import {Row, Col, Card} from 'react-bootstrap'

function HomeScreen() {
const [Products, setProducts] = useState([])

useEffect(() => {
  async function fetchProducts(){
    const {data} = await axios.get('/api/Products/')
    setProducts(data)
  }
  fetchProducts()
},[])


  return (
    <Container>  
      <br />  
        <h1>Products</h1>

        <Row>
           {Products.map((product) =>(
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <img src="{product._image}" alt="" />
                <h3>{product.productname}</h3>
                <h6>{product.category}</h6>
                <p>{product.price}</p>
              </Col>
           ))}
        </Row>

    </Container>
  )
}

export default HomeScreen;
