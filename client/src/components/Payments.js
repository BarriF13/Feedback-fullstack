import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

// we use dollar as currency
export class Payments extends Component {
  render() {

    return (

      <StripeCheckout
        name="HOW DO WE DO"
        description="$5 for 5 survey credits"
        amount={500}
        token={token => console.log(token)}//callback function with token or secret which stripe will give us back
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          Add Credits
        </button>
        </StripeCheckout>

    )
  }
}

export default Payments;
