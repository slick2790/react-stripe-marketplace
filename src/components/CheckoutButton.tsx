import React, { useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { Product, createCheckoutSession } from '@/lib/stripe';
import { openCashAppPay, CashAppPayment } from '@/lib/cashapp';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import PaymentOptions from './PaymentOptions';

interface CheckoutButtonProps {
  product: Product;
  className?: string;
  children: React.ReactNode;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ 
  product, 
  className = '', 
  children 
}) => {
  const stripe = useStripe();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const handleStripeCheckout = async () => {
    if (!stripe) {
      toast({
        title: "Demo Mode",
        description: "This is a demo. Stripe integration requires valid API keys.",
        variant: "default",
      });
      return;
    }

    setLoading(true);

    try {
      const sessionId = await createCheckoutSession(product);
      
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout Failed",
        description: "Unable to process payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCashAppPay = () => {
    const payment: CashAppPayment = {
      amount: product.price,
      currency: 'USD',
      description: `Purchase: ${product.title}`,
      recipient: 'marketplace' // Replace with actual Cash App handle
    };

    openCashAppPay(payment);
    
    toast({
      title: "Cash App Payment",
      description: "Redirecting to Cash App for payment...",
      variant: "default",
    });
  };

  const handlePaymentMethod = (method: 'stripe' | 'cashapp') => {
    setShowPaymentOptions(false);
    
    if (method === 'stripe') {
      handleStripeCheckout();
    } else {
      handleCashAppPay();
    }
  };

  if (showPaymentOptions) {
    return (
      <div className="space-y-4">
        <PaymentOptions 
          onPaymentMethodSelect={handlePaymentMethod}
          loading={loading}
        />
        <button
          onClick={() => setShowPaymentOptions(false)}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowPaymentOptions(true)}
      disabled={loading}
      className={`${className} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default CheckoutButton;