import { Check, Star, Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SubscriptionPage = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      icon: <Star className="h-6 w-6" />,
      color: "bg-gray-100 border-gray-200",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      features: [
        "Access to all free workshops",
        "Access to all free tutorials", 
        "Basic forum participation",
        "10% discount on paid workshops",
        "Community support"
      ]
    },
    {
      name: "Pro",
      price: "$19/month",
      icon: <Star className="h-6 w-6" />,
      color: "bg-violet-50 border-violet-200",
      buttonColor: "bg-violet-600 hover:bg-violet-700",
      popular: true,
      features: [
        "Everything in Basic",
        "Access to exclusive workshops",
        "Access to exclusive tutorials",
        "10 free downloads per month",
        "Join live workshops",
        "Priority forum support",
        "Direct creator messaging"
      ]
    },
    {
      name: "Premium",
      price: "$49/month",
      icon: <Crown className="h-6 w-6" />,
      color: "bg-yellow-50 border-yellow-200",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
      features: [
        "Everything in Basic & Pro",
        "Unlimited downloads",
        "Early access to new workshops",
        "One-on-one sessions with creators",
        "Premium support chat",
        "Exclusive creator meetups"
      ]
    },
    {
      name: "Creator",
      price: "$149/month",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200",
      buttonColor: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
      features: [
        "Everything in Premium",
        "Sell your own assets",
        "Host live workshops",
        "Creator analytics dashboard", 
        "Revenue sharing (80/20)",
        "Featured creator opportunities",
        "Custom creator profile",
        "Dedicated account manager",
        "Advanced marketing tools",
        "White-label options"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-yellow-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Creative Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock your creative potential with our flexible subscription plans
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.color} hover:shadow-lg transition-shadow`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-violet-600">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white rounded-full shadow-sm">
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-2">
                  {plan.price}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full ${plan.buttonColor} text-white`}>
                  {plan.name === "Basic" ? "Get Started" : "Subscribe Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include 30-day money-back guarantee
          </p>
          <p className="text-sm text-gray-500">
            Cancel anytime • No hidden fees • Secure payments
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;