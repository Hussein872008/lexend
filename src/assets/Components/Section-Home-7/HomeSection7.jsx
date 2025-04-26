import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HomeSection7 = () => {
  const faqs = [
    {
      question: "Do I need to know about how to code?",
      answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend."
    },
    {
      question: "Can I use it for commercial projects?",
      answer: "Feel free to do so. Lexend does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won’t breathe a word)."
    },
    {
      question: "Can I use it for multiple projects?",
      answer: "Definitely! Please use it however you like; we don’t limit it."
    },
    {
      question: "Can I use this to create and sell a product?",
      answer: "Do not ever consider doing it."
    },
    {
      question: "What is your refund policy?",
      answer: "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 mb-20 px-4 md:px-8 lg:px-16">
      {/* العنوان في الشمال (اليسار) */}
      <h1 className='text-4xl md:text-5xl font-bold text-white mb-10 text-left'>
        Frequently asked questions!
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className='bg-transparent p-0 hover:border-[#C1FEB4] transition-all duration-300'
          >
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              {/* السؤال في الشمال (اليسار) */}
              <h2 className="text-white text-lg md:text-xl font-medium text-left w-5/6">
                {faq.question}
              </h2>
              <motion.button
                className="text-white text-2xl bg-[#21383D] rounded-full text-center focus:outline-none w-6 h-6 flex items-center justify-center"
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                aria-expanded={openIndex === index ? "true" : "false"}
                aria-label={openIndex === index ? "Collapse answer" : "Expand answer"}
              >
                {openIndex === index ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    ×
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                )}
              </motion.button>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="text-[#E0F2FE] mt-4 pl-0 text-left"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>

            {/* الخط الفاصل بين الأسئلة */}
            {index < faqs.length - 1 && (
              <div className='h-0.5 w-full bg-[#253A3F] mt-6 mb-6'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection7;
