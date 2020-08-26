import React, { Component } from 'react';
import { Navbar, Row, Col } from 'react-bootstrap';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <div>
                <Navbar inverse staticTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Ecommerce</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>

                    <Row>
                    <Col sm={8}>
                        <ProductList/>
                        </Col>
                    <Col sm={4}>
                        <ShoppingCart/>
                        </Col>
                    </Row>
               
                </div>
            </Provider>
        )
    }
}

export default App
