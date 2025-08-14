# Digital Marketplace with Stripe Integration

A modern React marketplace application with integrated Stripe payment processing.

## Features

- 🛍️ Digital product marketplace
- 💳 Multiple payment options (Stripe + Cash App Pay)
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 📱 Responsive design
- ✅ Payment success handling

## Quick Start

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env.local`
   - Add your Stripe keys from dashboard.stripe.com:
     ```
     VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
     STRIPE_SECRET_KEY=sk_test_...
     ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **For production deployment:**
   ```bash
   npm run build
   ```

## Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard → Developers → API keys
3. Use test keys (pk_test_/sk_test_) for development
4. Replace with live keys (pk_live_/sk_live_) for production

## Project Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Page components
- `src/lib/` - Utility functions and configurations
- `api/` - Serverless API endpoints
- `src/components/ui/` - shadcn/ui components

## Deployment

This app is configured for Vercel deployment with serverless functions for Stripe integration.

## Tech Stack

- React 18 + TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui for components
- Stripe for payments
- React Router for navigation