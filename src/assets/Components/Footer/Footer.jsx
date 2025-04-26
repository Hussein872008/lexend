import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Trustpilot from "/src/assets/images/dark-05.svg";
import Logo from "/src/assets/images/logo-8-dark.svg";
import Rating from '@mui/material/Rating';
import { TiWorldOutline } from 'react-icons/ti';
import { IoIosArrowDown } from "react-icons/io";
import { FaLinkedin, FaDribbble } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { BsTwitterX } from 'react-icons/bs';
import { LuInstagram } from 'react-icons/lu';
import { IoLogoYoutube } from 'react-icons/io';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(prev => !prev);
  };

  return (
    <>
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col items-center bg-[#08313B] border-2 border-[#2C5058] rounded-xl p-8 md:p-16 lg:p-32 mb-20 mx-4 md:mx-8 lg:mx-16'
    >

      {/* CTA Button */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#C1FEB4] text-[#1A1A1A] px-9 py-4 rounded-full font-bold no-underline mb-10 transition-all duration-300 ease-in-out border-2 border-transparent text-lg shadow-[0_4px_15px_rgba(193,254,180,0.3)] relative overflow-hidden hover:bg-transparent hover:text-[#C1FEB4] hover:border-[#C1FEB4] hover:shadow-[0_4px_20px_rgba(193,254,180,0.4)]"
      >
        <span className="relative z-10">Start your free trial</span>
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent translate-x-[-100%] transition-transform duration-600 ease-in-out group-hover:translate-x-[100%]"></span>
      </motion.a>

      {/* Rating Section */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center items-center gap-1 hero-rating-container"
      >
        <span className="text-center text-white sm:text-left">Super</span>
        <Rating
          name="read-only"
          value={5}
          precision={0.5}
          readOnly
          size="large"
          sx={{ color: '#C1FEB4' }}
        />
        <div className="flex items-center text-white gap-2">
          <span>5,200+ reviews on</span>
          <img src={Trustpilot} alt="Trustpilot" className="h-6 sm:h-8" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between w-full mt-12 mb-12">
        {/* Left Side */}
        <div className="flex flex-col items-start text-white mb-8 ">
          <div className="gap-4">
            <img src={Logo} alt="Logo" className="mb-4 w-36" />
            <p className="text-[18px] max-w-[350px] text-[#9EBAC1] sm:text-left">
              Design amazing digital experiences that create more happy in the world.
            </p>
          </div>

          {/* Language Selector */}
          <div className="flex items-center pt-[50px] gap-2 relative">
            <TiWorldOutline className="text-white text-2xl" />
            <div className="relative">
              <div
                onClick={handleDropdownClick}
                className="bg-transparent text-white border-none outline-none cursor-pointer pr-8 py-2 text-lg flex items-center gap-2"
              >
                English
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white pointer-events-none"
                >
                  <IoIosArrowDown size={20} />
                </motion.div>
              </div>

              {/* Animate Dropdown */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-12 bg-[#08313B] text-white w-32 rounded-md shadow-md"
                  >
                    <li className="p-2 hover:bg-[#0d4a56] cursor-pointer">English</li>
                    <li className="p-2 hover:bg-[#0d4a56] cursor-pointer">العربية</li>
                    <li className="p-2 hover:bg-[#0d4a56] cursor-pointer">中文</li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Side Links */}
        <div className="flex text-white">
          <div className="flex flex-wrap justify-between gap-16 sm:gap-8 md:gap-16">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 hover:text-gray-400 transition duration-300">
              <a href="#" className='hover:text-white'>How it works</a>
              <a href="#" className='hover:text-white'>Features</a>
              <a href="#" className='hover:text-white'>Key Goods</a>
              <a href="#" className='hover:text-white'>Pro Elements</a>
              <a href="#" className='hover:text-white'>Pricing</a>
              <a href="#" className='hover:text-white'>Changelog</a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 hover:text-gray-400 transition duration-300">
              <a href="#" className='hover:text-white'>About us</a>
              <a href="#" className='hover:text-white'>Careers</a>
              <a href="#" className='hover:text-white'>Press</a>
              <a href="#" className='hover:text-white'>News</a>
              <a href="#" className='hover:text-white'>Media kit</a>
              <a href="#" className='hover:text-white'>Contact</a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 hover:text-gray-400 transition duration-300">
              <a href="#" className='hover:text-white'>Blog</a>
              <a href="#" className='hover:text-white'>Newsletter</a>
              <a href="#" className='hover:text-white'>Events</a>
              <a href="#" className='hover:text-white'>Help center</a>
              <a href="#" className='hover:text-white'>Tutorials</a>
              <a href="#" className='hover:text-white'>Support</a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='h-0.5 w-full bg-[#253A3F] mt-6 mb-6'></div>

      {/* Bottom Section */}
      <div className='flex flex-col md:flex-row justify-between items-center w-full pt-6'>
        <p className='text-[#93B0B8] text-lg mb-6 md:mb-0'>
          Lexend © 2025, All rights reserved.
        </p>

        {/* Social Icons */}
        <div className='flex gap-6'>
          {[ 
            { icon: FaLinkedin },
            { icon: ImFacebook2 },
            { icon: BsTwitterX },
            { icon: LuInstagram },
            { icon: IoLogoYoutube },
            { icon: FaDribbble }
          ].map((Item, idx) => (
            <motion.a
              key={idx}
              href="#"
              whileHover={{ scale: 1.2, color: "#C1FEB4" }}
              className='text-2xl text-[#93B0B8] transition duration-75'
            >
              <Item.icon />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
    <div className="bg-[##052128] h-1"></div> 

    </>

  );
}

export default Footer;
