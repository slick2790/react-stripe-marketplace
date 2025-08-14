// Cash App Pay integration utilities

export interface CashAppPayment {
  amount: number;
  currency: string;
  description: string;
  recipient: string; // Cash App $cashtag
}

export const createCashAppPayment = (payment: CashAppPayment) => {
  // Generate Cash App Pay URL
  const baseUrl = 'https://cash.app/pay';
  const params = new URLSearchParams({
    amount: payment.amount.toString(),
    note: payment.description,
    recipient: payment.recipient.startsWith('$') ? payment.recipient : `$${payment.recipient}`
  });
  
  return `${baseUrl}?${params.toString()}`;
};

export const openCashAppPay = (payment: CashAppPayment) => {
  const paymentUrl = createCashAppPayment(payment);
  
  // Check if mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Try to open Cash App directly
    window.location.href = paymentUrl;
  } else {
    // Open in new tab for desktop
    window.open(paymentUrl, '_blank');
  }
};

// Mock Cash App verification (replace with actual webhook in production)
export const verifyCashAppPayment = async (transactionId: string): Promise<boolean> => {
  // In production, this would verify the payment with Cash App's API
  // For demo purposes, we'll simulate verification
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random() > 0.1); // 90% success rate for demo
    }, 2000);
  });
};