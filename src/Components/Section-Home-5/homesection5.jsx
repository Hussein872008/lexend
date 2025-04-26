import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HomeSection5 = () => {
  const [activePlan, setActivePlan] = useState('monthly');

  const pricingPlans = {
    monthly: [
      {
        id: 'starter',
        name: 'Starter',
        price: '$19',
        period: 'month',
        features: [
          'Up to 10 users',
          'Basic analytics',
          'Email support',
          '1GB storage'
        ],
        cta: 'Get Started'
      },
      {
        id: 'professional',
        name: 'Professional',
        price: '$49',
        period: 'month',
        features: [
          'Up to 50 users',
          'Advanced analytics',
          'Priority support',
          '10GB storage',
          'API access'
        ],
        cta: 'Start Free Trial',
        popular: true
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: '$99',
        period: 'month',
        features: [
          'Unlimited users',
          'Advanced analytics',
          '24/7 support',
          '100GB storage',
          'API access',
          'Dedicated account manager'
        ],
        cta: 'Contact Sales'
      }
    ],
    yearly: [
      {
        id: 'starter',
        name: 'Starter',
        price: '$190',
        period: 'year',
        features: [
          'Up to 10 users',
          'Basic analytics',
          'Email support',
          '1GB storage',
          '2 months free'
        ],
        cta: 'Get Started'
      },
      {
        id: 'professional',
        name: 'Professional',
        price: '$490',
        period: 'year',
        features: [
          'Up to 50 users',
          'Advanced analytics',
          'Priority support',
          '10GB storage',
          'API access',
          '2 months free'
        ],
        cta: 'Start Free Trial',
        popular: true
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: '$990',
        period: 'year',
        features: [
          'Unlimited users',
          'Advanced analytics',
          '24/7 support',
          '100GB storage',
          'API access',
          'Dedicated account manager',
          '2 months free'
        ],
        cta: 'Contact Sales'
      }
    ]
  };

  return (
    <div className="bg-gradient-to-br from-[#0D5566] to-[#093946] rounded-3xl max-w-[1500px] py-16 px-4 md:px-8 lg:mx-16 mb-20">
      <div className="text-center mb-16">
        <span className="bg-[#C1FEB4] text-[#1A1A1A] px-5 py-2 rounded-full font-bold text-sm mb-6 inline-block tracking-wider md:text-[15px]">
          Pricing
        </span>

        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Scalable plans <span className="text-[#C1FEB4]">to fit any business size</span>
        </h1>

        <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
          Choose the perfect plan for your team. All plans include a 14-day free trial.
        </p>
      </div>

      <div className="flex justify-center mb-12">
  <div className="flex bg-white/10 backdrop-blur-sm rounded-2xl p-1 border border-[#2C5058]">
    <button
      onClick={() => setActivePlan('monthly')}
      className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
        activePlan === 'monthly'
          ? 'bg-[#C1FEB4] text-[#1A1A1A] shadow-lg'
          : 'bg-transparent text-white hover:bg-white/5'
      }`}
    >
      <span className="relative z-10">Monthly Billing</span>
      {activePlan === 'monthly' && (
        <motion.span
          layoutId="activePlanBg"
          className="absolute inset-0 bg-[#C1FEB4] rounded-xl z-0"
          initial={false}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </button>
    
    <button
      onClick={() => setActivePlan('yearly')}
      className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
        activePlan === 'yearly'
          ? 'bg-[#C1FEB4] text-[#1A1A1A] shadow-lg'
          : 'bg-transparent text-white hover:bg-white/5'
      }`}
    >
      <span className="relative z-10">
        Yearly Billing <span className="text-[#0a5c07] font-medium">(Save 20%)</span>
      </span>
      {activePlan === 'yearly' && (
        <motion.span
          layoutId="activePlanBg"
          className="absolute inset-0 bg-[#C1FEB4] rounded-xl z-0"
          initial={false}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </button>
  </div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans[activePlan].map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col justify-between bg-gradient-to-b from-[#0D5566] to-[#093946] rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${plan.popular
              ? 'border-[#C1FEB4] scale-105 shadow-lg shadow-[#C1FEB4]/20'
              : 'border-[#2B4F58] hover:border-[#C1FEB4]/50'
              }`}
          >
            <div>
              {plan.popular && (
                <div className="bg-[#C1FEB4] text-[#1A1A1A] text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-white text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-white text-4xl font-bold">{plan.price}</span>
                <span className="text-[#A0A0A0]">/{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-[#A0A0A0]">
                    <svg
                      className="w-5 h-5 mr-2 text-[#C1FEB4]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`w-full mt-auto py-3 px-6 rounded-lg font-bold transition-all duration-300 ${plan.popular
                ? 'bg-[#C1FEB4] text-[#1A1A1A] hover:bg-[#A5E3A6]'
                : 'bg-transparent border-2 border-[#C1FEB4] text-[#C1FEB4] hover:bg-[#C1FEB4] hover:text-[#1A1A1A]'
                }`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>

      <p className='text-center py-10 text-gray-500 text-lg'>
        *Yearly discount available on select plans.
      </p>
    </div>
  );
};

export default HomeSection5;
