# Stripe Live Mode Setup

Your application is now configured for Stripe live mode! Here's what you need to do:

## Environment Variables Setup

1. Update your `.env` file with your live Stripe keys:
   ```
   VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_actual_live_publishable_key
   STRIPE_SECRET_KEY=sk_live_your_actual_live_secret_key
   ```

2. If deploying to Vercel/Netlify, update your environment variables in the deployment dashboard.

## What Changed

- Updated `.env.example` to show live key format
- Your Stripe integration is already set up to handle live payments
- Payment methods include both card and Cash App Pay
- Success/cancel URLs are properly configured

## Important Notes

- Test your checkout flow thoroughly before going live
- Monitor your Stripe dashboard for real transactions
- Ensure webhook endpoints are configured if needed
- Consider adding more payment methods as needed

## Payment Flow

1. User clicks "Buy Now" on any product
2. Stripe Checkout session is created with live keys
3. User completes payment securely through Stripe
4. User is redirected to success page
5. Real money is processed through your business account

Your marketplace is now ready for live transactions!