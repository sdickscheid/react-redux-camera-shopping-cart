import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Product from './Product';

class ProductList extends Component {
  render () {
    let theProducts = this.props.products.map(product => {
      return (
        <Col key={product.id} md={6} className="product-card">
          <Product product={product} />
        </Col>
      )
    })
    return (
      <Container>
        <Row>
          {theProducts}
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state){
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null) (ProductList)
