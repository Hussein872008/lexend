import React from 'react';
import { motion } from 'framer-motion';
import Rating from '@mui/material/Rating';
import Trustpilot from "/src/images/dark-05.svg";
import Image1 from "/src/images/home-8-feature-01.png";
import Image2 from "/src/images/home-8-feature-02.png";
import Image3 from "/src/images/home-8-feature-03.png";
import Image4 from "/src/images/home-8-feature-04.png";
import Image5 from "/src/images/home-8-feature-05.png";
import Image6 from "/src/images/home-8-feature-06.png";

const HomeSection3 = () => {
  const features = [
    {
      id: 1,
      image: Image1,
      title: "Seamless integrations with your app tools",
      link: "#",
    },
    {
      id: 2,
      image: Image2,
      title: "Intuitive dashboard for at-a-glance insights",
      link: "#",
    },
    {
      id: 3,
      image: Image3,
      title: "Get more value from your tools",
      link: "#",
    },
    {
      id: 4,
      image: Image4,
      title: "Enrich Data with Risk Management",
      link: "#",
    },
    {
      id: 5,
      image: Image5,
      title: "Scalable plans to fit any business size",
      link: "#",
    },
    {
      id: 6,
      image: Image6,
      title: "Automated data analysis and reporting",
      link: "#",
    }
  ];

  return (
    <section className="relative bg-[#0F6073] rounded-3xl p-[30px] my-20 mx-4 md:mx-8 lg:mx-16 md:p-[50px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] overflow-hidden mb-20">      <div className="absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-[radial-gradient(circle,rgba(193,254,180,0.15)_0%,rgba(193,254,180,0)_70%)]"></div>

      <div className="max-w-[1500px] mx-auto flex flex-col items-center text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#C1FEB4] text-[#1A1A1A] px-5 py-2 rounded-full font-bold text-sm mb-6 inline-block tracking-wider  md:text-[15px] md:px-6 md:py-[5px]"
        >
          Main Features
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-white text-[2rem] mb-6 leading-8 font-bold tracking-tight  lg:text-[4rem] lg:leading-snug"
        >
          Automate your workflow with our 
          <span className="text-[#C1FEB4] relative inline-block">
            1000+ apps integrations
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#A0A0A0] text-2lg mb-[60px] leading-relaxed lg:text-[1.3rem]"
        >
          Connect your tools, connect your teams with Lexend.
        </motion.p>

        <div className="grid grid-cols-1 gap-4 w-full mb-[60px] md:grid-cols-2 lg:grid-cols-2 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#252525] rounded-2xl p-2 md:p-3 transition-all duration-300 ease-in-out flex flex-col items-center relative overflow-hidden border border-[#333] hover:translate-y-[-8px] hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:border-[#C1FEB4] group"
            >

              {/* خلفية متداخلة جميلة */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F6073] via-[#0f6073aa] to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500 z-0"></div>

              {/* تأثير الخط العلوي */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C1FEB4] origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 z-10"></div>

              {/* الصورة */}
              <div className="mb-8 px-1 transition-transform duration-300 ease-in-out  z-10">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full max-w-[300px] pt-3 h-auto object-contain  transition-all duration-300 ease-in-out group-hover:grayscale-0 rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>

              {/* محتوى النص */}
              <div className=" z-10">
                <h3 className="text-white text-[1.6rem] pl-4 text-start mb-5  font-semibold leading-snug">{feature.title}</h3>
                <a href={feature.link} className="text-[#C1FEB4] font-semibold pb-5 inline-flex  gap-2 transition-all duration-300 ease-in-out relative hover:text-white">
                  Learn more
                  <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-2">→</span>
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-[#C1FEB4] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#C1FEB4] text-[#1A1A1A] px-9 py-4 rounded-full font-bold no-underline mb-10 transition-all duration-300 ease-in-out border-2 border-transparent text-lg shadow-[0_4px_15px_rgba(193,254,180,0.3)] relative overflow-hidden hover:bg-transparent hover:text-[#C1FEB4] hover:border-[#C1FEB4] hover:shadow-[0_4px_20px_rgba(193,254,180,0.4)]"
        >
          <span className="relative z-10">Start your free trial</span>
        </motion.a>

        {/* Rating Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-5 text-white text-lg flex flex-wrap justify-center items-center gap-2.5"
        >
          <span className="text-center font-medium sm:text-left">Super!</span>
          <Rating
            name="read-only"
            value={5}
            precision={1}
            readOnly
            size="large"
            sx={{ color: '#C1FEB4' }}
          />
          <div className="flex items-center text-white gap-2">
            <span>5,200+ reviews on</span>
            <img src={Trustpilot} alt="Trustpilot" className="h-6 sm:h-8" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection3;
