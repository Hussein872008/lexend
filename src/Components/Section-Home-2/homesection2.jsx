import React from 'react';
import { motion } from "framer-motion";
import Icon1 from "/src/images/home-8-icon-01.svg";
import Icon2 from "/src/images/home-8-icon-02.svg";
import Icon3 from "/src/images/home-8-icon-03.svg";
import Icon4 from "/src/images/home-8-icon-06.svg";
import Capsule from "/src/images/brand-01.svg";
import AltShift from "/src/images/brand-03.svg";
import Polymatc from "/src/images/brand-05.svg";
import BoltShift from "/src/images/brand-07.svg";
import "./HomeSection2.css";

const cards = [
  {
    id: 1,
    icon: Icon1,
    title: "Enrich Data with Context & Risk Management",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Intuitive dashboard for at-a-glance insights",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Automated data analysis and reporting",
  },
  {
    id: 4,
    icon: Icon4,
    title: "Scalable plans to fit any business size",
  },
];

const brandLogos = [
  { id: 1, src: Capsule, alt: "Capsule" },
  { id: 2, src: AltShift, alt: "AltShift" },
  { id: 3, src: Polymatc, alt: "Polymatc" },
  { id: 4, src: BoltShift, alt: "BoltShift" },
];

// Animations
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  }),
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.5 }
  }),
};

const HomeSection2 = () => {
  return (
    <div className="section-container mb-20 px-4 md:px-8 lg:px-16">
      {/* Cards Section */}
      <div className="cards-grid">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="feature-card cursor-pointer"
          >
            <img
              src={card.icon}
              alt={card.title}
              className="card-icon"
            />
            <h3 className="card-title">{card.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Trusted Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="trusted-text"
      >
        Trusted by over most popular companies worldwide
      </motion.p>

      {/* Logos Grid */}
      <div className="logos-grid">
        {brandLogos.map((logo, index) => (
          <motion.div
            key={logo.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={logoVariants}
            whileHover={{ scale: 1.1 }}
            className="logo-container cursor-pointer"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="brand-logo"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection2;
