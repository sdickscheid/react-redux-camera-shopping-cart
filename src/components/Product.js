import React from 'react';
import '../App.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Product = (props) => {
  let {id, title, image, rating, price, on_sale, in_cart} = props.product
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle className="card-product-title">{title}</CardTitle>
          <CardImg
            className="camera-img"
            src={image}
            alt="Camera Image"
          />
          <CardSubtitle>Price: ${price.toFixed(2)}</CardSubtitle>
          <CardText>Rating:<br />
            {rating}
          </CardText>
          <Button>Add to Cart</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Product;
