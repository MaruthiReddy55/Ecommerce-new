import React from 'react';
import {Table, Button} from 'react-bootstrap';
import { removeFromCart } from '../actionCreators';
import { connect } from 'react-redux';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}

const ShoppingCart = ({ cart, removeFromCart }) => {
    return (
    
        <Table fill>
          <tbody>
            {cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                    <td className="text-right">{product.price}</td>
                    <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCart(product)}> aa </Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

    )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product) {
      dispatch(removeFromCart(product));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
