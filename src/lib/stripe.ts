import { loadStripe } from '@stripe/stripe-js';

// Get the publishable key from environment variables
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

// Initialize Stripe with fallback for missing key
export const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;

// Product interface
export interface Product {
  id: string;
  title: string;
  price: number;
  creator: string;
  description?: string;
}

// Create checkout session
export const createCheckoutSession = async (product: Product) => {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: product.id,
        productName: product.title,
        price: product.price,
        creator: product.creator,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const { sessionId } = await response.json();
    return sessionId;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};