import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions'
// we use dollar as currency
export class Payments extends Component {
  render() {

    return (

      <StripeCheckout
        name="HOW DO WE DO"
        description="$5 for 5 survey credits"
        amount={500}
        token={token => this.props.handleToken(token)}//callback function with token or secret which stripe will give us back
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          Add Credits
        </button>
        </StripeCheckout>

    )
  }
}

export default connect(null, actions )(Payments);
