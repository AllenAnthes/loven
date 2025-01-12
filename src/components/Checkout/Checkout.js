import React, { Component } from 'react';
import { Button } from '../Button';

class Checkout extends Component {
  componentDidMount() {
    console.log(process.env.NODE_ENV);
    this.stripe = window.Stripe(process.env.GATSBY_STRIPE_PUBLIC_KEY);
  }

  redirectToCheckout = async () => {
    const { error } = await this.stripe.redirectToCheckout({
      items: [
        {
          plan:
            process.env.NODE_ENV === 'production'
              ? 'plan_FA1maWmEMVsFUe'
              : 'plan_EbzcEa5yCpjaMM',
          quantity: 1,
        },
      ],
      successUrl: 'https://lovenbakeshop.com/thank_you/',
      cancelUrl: 'https://lovenbakeshop.com/subscribe/',
    });

    if (error) {
      console.warn('Error:', error);
    }
  };

  render() {
    return (
      <Button onClick={this.redirectToCheckout} theme="secondary">
        Checkout
      </Button>
    );
  }
}

export default Checkout;
