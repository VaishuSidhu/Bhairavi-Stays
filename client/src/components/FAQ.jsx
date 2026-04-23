import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How to go to Ashram from Sadhaka Homestays ?",
    answer: "You can walk to ashram from our Homestay. It is safe 10 minute walk from our homestay to Ashram."
  },
  {
    question: "What dining options are available at the Homestay ?",
    answer: "For your meals, there is a delivery service. They bring very clean and hygienic food to your door two times every day. There are many different options to choose from, and the price is very low. The food is very healthy and good for you."
  },
  {
    question: "Can we make our own meals at your homestay ?",
    answer: "We have a common kitchen on the terrace for everyone to use. It is an open space where you can cook your food and enjoy the view from the top."
  },
  {
    question: "Is there space for Sadhana at your homestay ?",
    answer: "If you like meditating in the open air, we have a small sadhana space for everyone. It is a common area located just outside the rooms."
  },
  {
    question: "Will there be a discount if I plan to stay for long term?",
    answer: "Yes, you can contact us to have special discounts if you wish to stay for more than a month. These discounts are subject to availability."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-darkkaavi/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-gold uppercase tracking-widest after:opacity-100">Frequently Asked Questions</h2>
          <p className="max-w-xl mx-auto text-cream/70 font-bold italic tracking-wide">
            Everything you need to know before your spiritual journey.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="heritage-card kolam-border bg-darkkaavi/30 border border-gold/10 overflow-hidden transition-all duration-300 hover:border-gold/30"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-serif text-lg md:text-xl font-bold text-cream pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-gold"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-cream/80 leading-relaxed italic border-t border-gold/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
