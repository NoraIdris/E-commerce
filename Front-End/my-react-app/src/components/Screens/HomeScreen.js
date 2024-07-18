import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import axios from 'axios';
import {Row, Col, Card} from 'react-bootstrap'

function HomeScreen() {
const [Products, setProducts] = useState([])

useEffect(() => {
  async function fetchProducts(){
    const {data} = await axios.get('/api/products/')
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
                
                <Card className="my-3 p-3 rounded">
                <img src={product.image} alt="" />
                </Card>
                
                <h3>{product.productname}</h3>
                <h6>{product.category}</h6>
                <p>{product.price}</p>
                <p>{product.productinfo}</p>
              </Col>
           ))}
        </Row>

    </Container>
  )
}

export default HomeScreen;
