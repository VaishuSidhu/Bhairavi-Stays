import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-cream/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-gold transition-colors group"
      >
        <span className="text-lg font-medium pr-8">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gold shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-cream/30 group-hover:text-gold shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-cream/70 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How to go to Ashram from Bhairavi Home Stay?",
      answer: "You can walk to the ashram from our Homestay. It is a safe 10-minute walk through a peaceful path."
    },
    {
      question: "What dining options are available at the Homestay?",
      answer: "For your meals, there is a reliable delivery service that brings clean and hygienic food to your door twice every day. There are many healthy options to choose from at very affordable prices."
    },
    {
      question: "Can we make our own meals at your homestay?",
      answer: "Yes! We have a common kitchen on the terrace for everyone to use. It is an open space where you can cook your food and enjoy the mountain views."
    },
    {
      question: "Is there space for Sadhana at your homestay?",
      answer: "Absolutely. We have a dedicated small sadhana space for everyone who likes meditating in the open air. It is a common area located just outside the rooms."
    },
    {
      question: "Will there be a discount if I plan to stay for long term?",
      answer: "Yes, we offer special discounts for stays longer than a month. Please contact us directly to discuss long-term rates, subject to availability."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-darkkaavi/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div className="mt-12 heritage-card p-8 md:p-12">
          <div className="divide-y divide-cream/10">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
        
        <div className="kolam-divider mt-12" />
      </div>
    </section>
  );
};

export default FAQ;
