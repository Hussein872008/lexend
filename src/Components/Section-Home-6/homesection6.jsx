import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Client1 from "/src/images/01.png";
import Client2 from "/src/images/02.png";
import Client3 from "/src/images/03.png";
import Client4 from "/src/images/05.png";
import Client5 from "/src/images/06.png";
import Client6 from "/src/images/07.png";
import Client7 from "/src/images/08.png";
import Client8 from "/src/images/10.png";
import Client9 from "/src/images/11.png";
import Rate from "/src/images/stars.png";
import Capsule from "/src/images/brand-01.svg";
import AltShift from "/src/images/brand-03.svg";
import Polymatc from "/src/images/brand-05.svg";
import BoltShift from "/src/images/brand-07.svg";

const clients = [
  { image: Client1, name: "Mark Zellers", role: "CEO, TechCorp", feedback: "We’re looking for people who share our vision! most of our time used to be taken up by most of alternate to help our employees." },
  { image: Client2, name: "Jason Barella", role: "Marketing Director", feedback: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes." },
  { image: Client3, name: "Sarah Edrissi", role: "Product Manager", feedback: "Look for service suppliers that comply with this regulation, and as we look to create our website, this builder is just outstanding!" },
  { image: Client4, name: "Anna Yon", role: "CTO, InnovateCo", feedback: "We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees." },
  { image: Client5, name: "Ederson Hani", role: "Sales Director", feedback: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes." },
  { image: Client6, name: "Jaden Karl", role: "Operations Lead", feedback: "We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees." },
  { image: Client7, name: "Matt Peterson", role: "EU Compliance Officer", feedback: "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder is just outstanding!" },
  { image: Client8, name: "Muhammed Khan", role: "Digital Strategist", feedback: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.”" },
  { image: Client9, name: "Natalia Cherry", role: "HR Director", feedback: "We’re looking for people who share our vision! Most of our time used to be taken up by most of the alternate administrative work whereas now we can focus on building out to help our employees." }
];

const brandLogos = [
  { id: 1, src: Capsule, alt: "Capsule" },
  { id: 2, src: AltShift, alt: "AltShift" },
  { id: 3, src: Polymatc, alt: "Polymatc" },
  { id: 4, src: BoltShift, alt: "BoltShift" },
];

const HomeSection6 = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleClients = isExpanded ? clients.length : 3;

  return (
    <div className="bg-[#052128] py-20 relative overflow-hidden mb-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-[#C1FEB4] text-[#1A1A1A] px-5 py-2 rounded-full font-bold text-sm mb-6 inline-block tracking-wider ">
            Clients feedback
          </span>

          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight">
            What our <span className="text-[#C1FEB4]">satisfied clients</span> said about us!
          </h1>
        </div>

        <div className="relative">
          {/* First row - always visible */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.slice(0, 3).map((client, index) => (
              <TestimonialCard key={index} client={client} />
            ))}
          </div>

          {/* Second row - conditionally rendered */}
          {isExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {clients.slice(3).map((client, index) => (
                <TestimonialCard key={index + 3} client={client} />
              ))}
            </div>
          )}

          {/* Gradient fade effect when collapsed */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#052128] to-transparent pointer-events-none"></div>
          )}

          {/* Button, text and logos */}
          <div className={`flex flex-col items-center ${isExpanded ? 'mt-12' : 'mt-8'}`}>
            <div className="flex flex-col items-center justify-center gap-6 mt-8 w-full">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-[#C1FEB4] text-[#1A1A1A] px-8 py-3 rounded-full font-bold hover:bg-[#A5E3A6] transition-all duration-300 shadow-lg whitespace-nowrap"
              >
                {isExpanded ? 'Close feadbacks' : 'View all feadbacks'}
              </button>
              <p className="text-xl text-gray-500 text-center md:text-left">
                Trusted by most popular companies worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {brandLogos.map((logo) => (
                  <motion.div
                    key={logo.id}
                    whileHover={{ scale: 1.05, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#0D4E5F] rounded-lg p-3 md:p-4 flex items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-6 md:h-8 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
      <span className='h-0.5 w-full border-[1px] border-[#253A3F] mt-12 block'></span>
    </div>
  );
};

const TestimonialCard = ({ client }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-gradient-to-br from-[#0D5566] to-[#093946] rounded-2xl p-8 border border-[#2B4F58] hover:border-[#C1FEB4] transition-all duration-300 flex flex-col"
  >
    <p className="text-[#E0F2FE] mb-6">"{client.feedback}"</p>
    <div className="mt-auto">
      <div className="flex items-center mb-2">
        <img
          src={client.image}
          alt={client.name}
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[#C1FEB4]"
        />
        <div>
          <h3 className="text-white font-semibold">{client.name}</h3>
          <p className="text-[#A0A0A0] text-sm">{client.role}</p>
        </div>
      </div>
      <img src={Rate} alt="5-star rating" className="w-24" />
    </div>
  </motion.div>
);

export default HomeSection6;
