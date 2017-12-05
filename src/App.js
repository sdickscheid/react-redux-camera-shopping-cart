import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts } from './actions/products';


class App extends Component {

  componentDidMount(){
    this.props.getProducts()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: bindActionCreators(getProducts, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
