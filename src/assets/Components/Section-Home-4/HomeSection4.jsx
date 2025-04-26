import React from 'react';
import { motion } from 'framer-motion'; // استيراد Framer Motion
import Icon1 from "/src/assets/images/home-8-icon-01.svg";
import Icon2 from "/src/assets/images/home-8-icon-02.svg";
import Icon3 from "/src/assets/images/home-8-icon-03.svg";
import Icon4 from "/src/assets/images/home-8-icon-04.svg";
import Icon5 from "/src/assets/images/home-8-icon-05.svg";
import Icon6 from "/src/assets/images/home-8-icon-06.svg";

const cards = [
  {
    id: 1,
    image: Icon1,
    title: "Fast and Reliable",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    id: 2,
    image: Icon2,
    title: "Discover Data Everywhere",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    id: 3,
    image: Icon3,
    title: "Enrich Data with Context",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    id: 4,
    image: Icon4,
    title: "Risk Management",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    id: 5,
    image: Icon5,
    title: "Privacy Compliance",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    id: 6,
    image: Icon6,
    title: "Third-Party Management",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  }
];

const HomeSection4 = () => {
  return (
    <div className="section4-container text-center max-w-[1200px] mx-auto py-20 mb-20 px-4 md:px-8 lg:px-16">
      <span className="bg-[#C1FEB4] text-[#1A1A1A] px-5 py-2 rounded-full font-bold text-sm mb-6 inline-block tracking-wider md:text-[15px] md:px-6 md:py-[10px]">
        Solutions
      </span>

      <h1 className="text-white text-[30px] md:text-[40px] font-bold mb-4">
        <span className="text-[#C1FEB4]">End-to-End </span>
        seamless data management solutions
      </h1>

      <p className="text-[#A0A0A0] max-w-[600px] mx-auto mb-12">
        Offers a unified platform that fosters innovation while providing end-to-end data management.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gradient-to-br from-[#072830] to-[#073c47] flex items-start rounded-xl p-8 md:p-10 text-left border border-[#2B4F58] hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] transition-all duration-300"
          >
            <img src={card.image} alt={card.title} className="w-14 h-14" />
            <div className="pl-5">
              <h3 className="text-white text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-[#A0A0A0] text-base">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.a 
        href="#" 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="inline-flex text-xl items-center border border-[#2C6977] text-[#C1FEB4] px-6 py-3 mt-20 rounded-full hover:bg-[#0B5263] hover:border-[#C1FEB4] transition-all duration-300"
      >
        <span className="text-3xl mr-2">+</span>
        View all solutions
      </motion.a>
    </div>
  );
};

export default HomeSection4;
