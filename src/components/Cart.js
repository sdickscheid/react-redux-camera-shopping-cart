import React, { Component } from 'react';
import '../App.css';
import { Connect } from 'react-redux';
import Product from './Product';
import { Table, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa';

class Cart extends Component {
  // let {id, title, price, on_sale, in_cart} = props.product
  render () {

    return (
      <div>
        <Card>
          <CardBody className="cart-card">
            <CardTitle className="cart-card-title">Your Cart<FontAwesome.FaShoppingCart className="shopping-cart-icon"/></CardTitle>
            <hr />
            <CardText className="cart-item-container">Cart Item 1<FontAwesome.FaTrash size={20} className="shopping-cart-delete-icon"/></CardText>
            <CardText className="cart-item-container">Cart Item 2<FontAwesome.FaTrash size={20} className="shopping-cart-delete-icon"/></CardText>
            <br />
            <Table size="sm">
              <tbody>
                <tr>
                  <th scope="row">Subtotal:</th>
                  <td>$</td>
                </tr>
                <tr>
                  <th scope="row">Tax:</th>
                  <td>$</td>
                </tr>
                <tr>
                  <th scope="row">Total:</th>
                  <td>$</td>
                </tr>
              </tbody>
            </Table>
            {/* <CardText>Subtotal: $</CardText>
            <CardText>Tax: $</CardText>
            <CardText>Total: $</CardText> */}
            <hr />
            <Button className="cart-checkout-btn">CHECKOUT</Button>
          </CardBody>
        </Card>
      </div>
    );

  }

};

export default Cart;
