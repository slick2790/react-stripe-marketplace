import React, { useState } from 'react';
import { CreditCard, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PaymentOptionsProps {
  onPaymentMethodSelect: (method: 'stripe' | 'cashapp') => void;
  loading?: boolean;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({ 
  onPaymentMethodSelect, 
  loading = false 
}) => {
  const [selectedMethod, setSelectedMethod] = useState<'stripe' | 'cashapp' | null>(null);

  const handleMethodSelect = (method: 'stripe' | 'cashapp') => {
    setSelectedMethod(method);
    onPaymentMethodSelect(method);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Choose Payment Method</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Stripe Payment */}
        <Card 
          className={`p-4 cursor-pointer transition-all hover:shadow-md ${
            selectedMethod === 'stripe' ? 'ring-2 ring-blue-500 bg-blue-50' : ''
          }`}
          onClick={() => handleMethodSelect('stripe')}
        >
          <div className="flex items-center space-x-3">
            <CreditCard className="w-6 h-6 text-blue-600" />
            <div>
              <h4 className="font-medium">Card Payment</h4>
              <p className="text-sm text-gray-600">Visa, Mastercard, Amex</p>
            </div>
          </div>
        </Card>

        {/* Cash App Payment */}
        <Card 
          className={`p-4 cursor-pointer transition-all hover:shadow-md ${
            selectedMethod === 'cashapp' ? 'ring-2 ring-green-500 bg-green-50' : ''
          }`}
          onClick={() => handleMethodSelect('cashapp')}
        >
          <div className="flex items-center space-x-3">
            <Smartphone className="w-6 h-6 text-green-600" />
            <div>
              <h4 className="font-medium">Cash App Pay</h4>
              <p className="text-sm text-gray-600">Quick mobile payment</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PaymentOptions;