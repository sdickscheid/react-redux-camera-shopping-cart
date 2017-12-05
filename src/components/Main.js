import React, { Component } from 'react';
import '../App.css';
import ProductList from './ProductList';
import Cart from './Cart';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Main extends Component {
  render () {
    return (
      <div className="main-container">
        <Container fluid>
          <Row>
            <Col lg={8} md={7} sm={6} xs={12}>
              <Form className="filter-container">
                <FormGroup>
                  <Input
                    type="text"
                    name="filter"
                    id="filter"
                    placeholder="Filter for what you're looking for here..." />
                </FormGroup>
              </Form>
              <ProductList />
            </Col>

            <Col lg={4} md={5} sm={6} xs={12}>
              <Cart/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Main;
