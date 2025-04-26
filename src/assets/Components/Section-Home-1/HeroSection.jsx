import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown } from "lucide-react";
import { ArrowUpRight } from 'lucide-react';
import { MdOutlineExplore, MdOutlineSignalCellularAlt } from "react-icons/md";
import { LuCheck } from "react-icons/lu";
import { Menu, X } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import Rating from '@mui/material/Rating';
import Trustpilot from "/src/assets/images/dark-05.svg";
import Mailchimp from "/src/assets/images/mailchimp.svg";
import Stripe from "/src/assets/images/stipe.svg";
import Zapier from "/src/assets/images/zapier.svg";
import Drive from "/src/assets/images/drive.svg";
import Asana from "/src/assets/images/asana.svg";
import Bitbucket from "/src/assets/images/bitbucket.svg";
import Logo from '/src/assets/images/logo-8-dark.svg';
import icon1 from "/src/assets/images/home-8-icon-01.svg";
import icon2 from "/src/assets/images/home-8-icon-02.svg";
import icon3 from "/src/assets/images/home-8-icon-03.svg";
import icon4 from "/src/assets/images/home-8-icon-04.svg";
import "./HeroSection.css";
import { RiAirplayLine } from 'react-icons/ri';
import { FaBolt, FaChessKnight, FaCircle, FaSquare, FaUnity } from 'react-icons/fa';
import { CiClock2 } from 'react-icons/ci';
import { SiGooglecolab } from 'react-icons/si';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { BsTriangleFill } from 'react-icons/bs';

const MobileMenuItem = ({ item, toggleSidebar, openMenus, setOpenMenus, itemId }) => {
  const isOpen = openMenus[0] === itemId;

  const handleClick = (e) => {
    if (item.subItems) {
      e.preventDefault();
      setOpenMenus(prev => ({
        ...prev,
        0: prev[0] === itemId ? null : itemId
      }));
    } else {
      toggleSidebar();
    }
  };

  return (
    <div>
      <a
        href={item.href}
        className="sidebar-item flex justify-between items-center"
        onClick={handleClick}
      >
        <div className="flex items-center gap-2">
          {item.label}
          {item.subItems && (
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          )}
        </div>
      </a>
      {item.subItems && isOpen && (
        <div className="submenu active">
          {item.subItems.map((subItem, subIndex) => (
            <MobileSubMenuItem
              key={subIndex}
              item={subItem}
              toggleSidebar={toggleSidebar}
              level={1}
              itemId={`${itemId}-${subIndex}`}
              openMenus={openMenus}
              setOpenMenus={setOpenMenus}
            />
          ))}
        </div>
      )}
    </div>
  );
};


const MobileSubMenuItem = ({ item, toggleSidebar, level, itemId, openMenus, setOpenMenus }) => {
  const isOpen = openMenus[level] === itemId;

  const handleClick = (e) => {
    if (item.subItems) {
      e.preventDefault();
      setOpenMenus(prev => ({
        ...prev,
        [level]: prev[level] === itemId ? null : itemId
      }));
    } else {
      toggleSidebar();
    }
  };

  return (
    <>
      <a
        href={item.href}
        className={`sidebar-subitem flex justify-between items-center pl-${level * 8}`}
        onClick={handleClick}
      >
        <div className="flex items-center gap-2">
          {item.label}
          {item.subItems && (
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          )}
        </div>
      </a>
      {item.subItems && isOpen && (
        <div className="submenu active">
          {item.subItems.map((subSubItem, subSubIndex) => (
            <MobileSubMenuItem
              key={subSubIndex}
              item={subSubItem}
              toggleSidebar={toggleSidebar}
              level={level + 1}
              itemId={`${itemId}-${subSubIndex}`}
              openMenus={openMenus}
              setOpenMenus={setOpenMenus}
            />
          ))}
        </div>
      )}
    </>
  );
};


const HeroSection = () => {
  const words = ["ai automation", "business app", "existing tools"];
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordSpeed] = useState(80);
  const [deleteSpeed] = useState(30);
  const [isMobileView, setMobileView] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const [sidebarTheme, setSidebarTheme] = useState('dark');
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;
  const [notAtTop, setNotAtTop] = useState(false);

  const toggleSidebarTheme = () => {
    setSidebarTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setNotAtTop(currentScrollY > 0);

      if (currentScrollY <= 0) {
        setShowNavbar(true);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileMenuItems = [
    {
      label: "Home",
      href: "#",
      subItems: [
        { label: "Home 1", href: "#" },
        { label: "Home 2", href: "#" },
        { label: "Home 3", href: "#" },
        { label: "Home 4", href: "#" },
        { label: "Home 5", href: "#" },
        { label: "Home 6", href: "#" },
        { label: "Home 7", href: "#" },
        { label: "Home 8", href: "#" },
        { label: "Home 9", href: "#" },
        { label: "Home 10", href: "#" },
        { label: "Home RTL", href: "#" }
      ]
    },
    {
      label: "Features",
      href: "#"
    },
    {
      label: "Pricing",
      href: "#"
    },
    {
      label: "About",
      href: "#"
    },
    {
      label: "Career",
      href: "#"
    },
    {
      label: "Inner Pages",
      href: "#",
      subItems: [
        {
          label: "Blog", href: "#",
          subItems: [
            { label: "Full Width", href: "#" },
            { label: "Grid 2 Cols", href: "#" },
            { label: "Sidebar", href: "#" },
            { label: "Sidebar Left", href: "#" },
            { label: "Grid 3 Cols", href: "#" },
            { label: "Grid 4 Cols", href: "#" }
          ]
        },
        {
          label: "Blog-Detail", href: "#",
          subItems: [
            { label: "Blog detail", href: "#" },
            { label: "Blog detail - v2", href: "#" }
          ]
        },
        {
          label: "Useful Pages", href: "#",
          subItems: [
            { label: "Sign Up", href: "#" },
            { label: "Sign In", href: "#" },
            { label: "Reset Password", href: "#" },
            { label: "404 Page", href: "#" },
            { label: "Coming soon", href: "#" }
          ]
        },
        {
          label: "Other Pages", href: "#",
          subItems: [
            { label: "FAQ", href: "#" },
            { label: "Terms of use", href: "#" },
            { label: "Privacy Policy", href: "#" }
          ]
        }
      ]
    },
    {
      label: "Shop",
      href: "#",
      subItems: [
        {
          label: "Shop layouts",
          href: "#",
          subItems: [
            { label: "Shop 4 Cols", href: "#" },
            { label: "Shop 3 Cols", href: "#" },
            { label: "Shop 2 Cols", href: "#" },
            { label: "Shop With Sidebar", href: "#" }
          ]
        },
        { label: "Archive category", href: "#" },
        { label: "Product-Detail", href: "#" },
        { label: "Product-Detail - v2", href: "#" },
        { label: "Cart", href: "#" },
        { label: "Cart - v2", href: "#" },
        { label: "Check out", href: "#" },
        { label: "Archive category", href: "#" },
        { label: "Archive category", href: "#" }
      ]
    }
  ];

  const handleResize = () => {
    setMobileView(window.innerWidth < 1100);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [showMenu, setShowMenu] = useState({
    products: false,
    solutions: false,
    isHovering: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    let timeout;
    const typeEffect = () => {
      const currentFullWord = words[currentIndex];

      if (isDeleting) {
        setCurrentWord(prev => prev.slice(0, prev.length - 1));
      } else {
        setCurrentWord(prev => currentFullWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && currentWord === currentFullWord) {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }

      if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    timeout = setTimeout(typeEffect, isDeleting ? deleteSpeed : wordSpeed);
    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, currentIndex, words, wordSpeed, deleteSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -45 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    })
  };

  const handleMouseEnter = (menu) => {
    if (!isMobileView) {
      setShowMenu(prev => ({
        ...prev,
        [menu]: true,
        isHovering: true
      }));
    }
  };

  const handleMouseLeave = (menu) => {
    if (!isMobileView) {
      setShowMenu(prev => ({ ...prev, [menu]: false, isHovering: false }));
    }
  };

  const handleDropdownEnter = (menu) => {
    if (!isMobileView) {
      setShowMenu(prev => ({
        ...prev,
        [menu]: true,
        isHovering: true
      }));
    }
  };

  const handleDropdownLeave = (menu) => {
    if (!isMobileView) {
      setShowMenu(prev => ({ ...prev, [menu]: false, isHovering: false }));
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const BuilderTools = [
    {
      icon: icon1,
      title: "Email Template Builder",
      description: "Design personalized emails that convert",
    },
    {
      icon: icon2,
      title: "Landing Page Builder",
      description: "Deliver the right message to the right user",
    },
    {
      icon: icon3,
      title: "Reporting & Analytics",
      description: "Track sales & campaign performance",
    },
    {
      icon: icon4,
      title: "Chatbots, Free forever",
      description: "Engage customers with automated support",
    },
  ];

  const aiSolutions = [
    {
      icon: icon1,
      title: "AI-Powered Tools",
      description: "Say hello to your AI growth assistant",
    },
    {
      icon: icon2,
      title: "E-commerce and retail",
      description: "Amplify the conversation across channels",
    },
    {
      icon: icon3,
      title: "Large Community",
      description: "Our services offerings",
    },
    {
      icon: icon4,
      title: "AI-Powered Automation",
      description: "Our services offerings",
    },
  ];

  const moreProducts = [
    {
      icon: icon1,
      title: "Email Template Builder",
      description: "Design personalized emails that convert"
    },
    {
      icon: icon2,
      title: "Landing Page Builder",
      description: "Deliver the right message to the right user"
    },
    {
      icon: icon3,
      title: "Reporting & Analytics",
      description: "Track sales & campaign performance"
    },
    {
      icon: icon4,
      title: "Chatbots, Free forever",
      description: "Track sales & campaign performance"
    }
  ];

  const automationTools = [
    {
      title: 'To-Do List',
      description: 'Managing multiple software and tools for different tasks.',
      icon: <LuCheck />,
    },
    {
      title: 'Reports',
      description: 'The latest industry reports, updates and info.',
      icon: <CiClock2 />,
    },
    {
      title: 'Spreadsheets',
      description: 'Suite of tools that cover all aspects of your business.',
      icon: <MdOutlineSignalCellularAlt />,
    }
  ];

  const teamingTools = [
    {
      title: 'Collaboration',
      description: 'Assign tasks, share files with your team.',
      icon: <SiGooglecolab />,
    },
    {
      title: 'Chatbots',
      description: 'Assign tasks, share files with your team.',
      icon: <IoChatboxEllipsesOutline />,
    },
    {
      title: 'To-Do List',
      description: 'Managing multiple software and tools for different tasks.',
      icon: <LuCheck />,
    }
  ];

  const useCaseTools = [
    {
      title: 'Reports',
      description: 'The latest industry reports, updates and info.',
      icon: <CiClock2 />,
    },
    {
      title: 'Spreadsheets',
      description: 'Suite of tools that cover all aspects of your business.',
      icon: <MdOutlineSignalCellularAlt />,
    },
    {
      title: 'Collaboration',
      description: 'Assign tasks, share files with your team.',
      icon: <SiGooglecolab />,
    }
  ];

  return (
<div className='home-section-1 mb-20'>
<nav className={`nav-home-1 flex items-center text-[20px] justify-between px-16 py-7 transition-all duration-300 fixed top-0 left-0 w-full z-50
  ${showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
  ${notAtTop && showNavbar ? 'bg-[#052128]/90 backdrop-blur-sm shadow-md' : ''}
`}>
        {isMobileView && (
          <button
            onClick={toggleSidebar}
            className="text-white p-2 focus:outline-none"
          >
            {isSidebarOpen ? (
              <X size={24} />
            ) : (
              <Menu size={50} className="menu-icon" />
            )}
          </button>
        )}

        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>

        {!isMobileView && (
          <div className="flex space-x-10 relative">
            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={() => handleMouseLeave('products')}
            >
              <span className="absolute -top-9 left-0 w-full h-[3px] bg-[#93C189] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200 rounded-full"></span>
              <a href="#" className="text-white nav-aa font-medium flex items-center gap-0">
                Products
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </a>

              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[100px] h-6 z-10" />

              {showMenu.products && (
                <div
                  className="products-dropdown absolute top-[calc(100%+20px)] left-[300%] transform -translate-x-1/2 w-[1300px] bg-[#0c4e5f] text-white shadow-lg rounded-md p-6 z-20"
                  onMouseEnter={() => handleDropdownEnter('products')}
                  onMouseLeave={() => handleDropdownLeave('products')}
                >
                  <div className="grid grid-cols-3 gap-24 w-full">
                    {/* Builder Tools */}
                    <div>
                      <span className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <FaUnity className="w-5 h-5 " />
                        Builder Tools
                      </span>

                      <div className="flex flex-col gap-4">
                        {BuilderTools.map((tool, index) => (
                          <a
                            key={index}
                            href="#"
                            className="group flex items-start gap-3 hover:text-[#65A283]"
                          >
                            <img
                              src={tool.icon}
                              alt={`icon-${index}`}
                              className="w-10 h-10 bg-white rounded-lg"
                            />
                            <div>
                              <h2 className="font-semibold text-base transition-colors duration-200">
                                {tool.title}
                              </h2>
                              <p className="text-sm text-gray-200 transition-colors duration-200">
                                {tool.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="mt-4 inline-flex items-center pl-10 text-sm text-white hover:underline hover:text-[#A5E3A6]"
                      >
                        View all products <ArrowUpRight className="w-4 h-5 ml-1" />
                      </a>
                    </div>

                    {/* AI Solutions */}
                    <div>
                      <span className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <FaChessKnight className="w-5 h-5 " />
                        AI Solutions
                      </span>
                      <div className="flex flex-col gap-4">
                        {aiSolutions.map((item, index) => (
                          <a
                            key={index}
                            href="#"
                            className="group flex items-start gap-3 hover:text-[#65A283]"
                          >
                            <img
                              src={item.icon}
                              alt={`icon-${index}`}
                              className="w-10 h-10 bg-white rounded-lg"
                            />
                            <div>
                              <h2 className="font-semibold text-base transition-colors duration-200">
                                {item.title}
                              </h2>
                              <p className="text-sm text-gray-200 transition-colors duration-200">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="mt-4 inline-flex items-center pl-10 text-sm text-white hover:underline hover:text-[#A5E3A6]"
                      >
                        View all products <ArrowUpRight className="w-4 h-5 ml-1" />
                      </a>
                    </div>

                    {/* More Products */}
                    <div>
                      <span className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <FaUnity className="w-5 h-5 " />
                        More Products
                      </span>
                      <div className="flex flex-col gap-4">
                        {moreProducts.map((product, index) => (
                          <a
                            key={index}
                            href="#"
                            className="group flex items-start gap-3 hover:text-[#65A283]"
                          >
                            <img
                              src={product.icon}
                              alt={`icon-${index}`}
                              className="w-10 h-10 bg-white rounded-lg"
                            />
                            <div>
                              <h2 className="font-semibold text-base transition-colors duration-200">
                                {product.title}
                              </h2>
                              <p className="text-sm text-gray-200 transition-colors duration-200">
                                {product.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="mt-4 inline-flex items-center pl-10 text-sm text-white hover:underline hover:text-[#A5E3A6]"
                      >
                        View all products <ArrowUpRight className="w-4 h-5 ml-1" />
                      </a>
                    </div>
                  </div>
                  <hr className="col-span-3 border-t border-[#306A78] w-full mt-10" />
                  <div className="text-sm m-10 flex gap-6 text-white">
                    <a href="#" className="flex items-center gap-2 mx-3 hover:underline hover:text-[#65A283]">
                      <MdOutlineExplore />
                      <span>Explore Apps</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 hover:underline hover:text-[#65A283]">
                      <RiAirplayLine />
                      <span>AI Solutions</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 hover:underline hover:text-[#65A283]">
                      <FaBolt />
                      <span>Join Lexend Early Access</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={() => handleMouseLeave('solutions')}
            >
              <span className="absolute -top-9 left-0 w-full h-[3px] bg-[#93C189] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200 rounded-full"></span>
              <a href="#" className="text-white nav-aa font-medium flex items-center gap-1">
                Solutions
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </a>

              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[100px] h-6 z-10" />

              {showMenu.solutions && (
                <div
                  className="solutions-dropdown absolute top-[calc(100%+20px)] left-[150%] h-[60vh] w-[1300px] transform -translate-x-1/2 bg-[#0c4e5f] text-white shadow-lg rounded-md p-6 z-20 overflow-hidden"
                  onMouseEnter={() => handleDropdownEnter('solutions')}
                  onMouseLeave={() => handleDropdownLeave('solutions')}
                >
                  <div className="flex gap-10 h-full overflow-hidden">
                    {/* Workflow Section */}
                    <div className="flex-1 flex flex-col gap-8 overflow-y-auto pr-4">
                      <div>
                        <h1 className="text-2xl font-semibold mt-5 mb-1">Workflow quick-start automation guide</h1>
                        <p className="text-[15px] text-gray-400">How Lexend can help you automate your work</p>
                      </div>

                      {/* Sections */}
                      <div className="flex gap-8 flex-wrap">
                        {/* Automation */}
                        <div className="min-w-[240px] flex-1">
                          <h2 className="text-md font-semibold mb-3 flex items-center gap-2">
                            <FaSquare />
                            Automation
                          </h2>
                          <a href='#' className="flex flex-col gap-4">
                            {automationTools.map((tool, index) => (
                              <div key={index} className="flex gap-3 items-start">
                                <div className="w-10 h-10 bg-[#C1FEB4] min-w-[40px] rounded-md flex items-center justify-center text-[#0c4e5f] text-lg">
                                  {tool.icon}
                                </div>
                                <div>
                                  <h3 className="font-semibold text-sm">{tool.title}</h3>
                                  <p className="text-xs text-gray-200">{tool.description}</p>
                                </div>
                              </div>
                            ))}
                          </a>
                        </div>

                        {/* Teaming */}
                        <div className="min-w-[220px] flex-1">
                          <h2 className="text-md font-semibold mb-3 flex items-center gap-2">
                            <FaCircle />
                            Teaming
                          </h2>
                          <a href='#' className="flex flex-col gap-4">
                            {teamingTools.map((ttt, index) => (
                              <div key={index} className="flex gap-3 items-start">
                                <div className="w-10 h-10 bg-[#C1FEB4] min-w-[40px] rounded-md flex items-center justify-center text-[#0c4e5f] text-lg">
                                  {ttt.icon}
                                </div>
                                <div>
                                  <h3 className="font-semibold text-sm">{ttt.title}</h3>
                                  <p className="text-xs text-gray-200">{ttt.description}</p>
                                </div>
                              </div>
                            ))}
                          </a>
                        </div>

                        {/* Use Case */}
                        <div className="min-w-[220px] flex-1">
                          <h2 className="text-md font-semibold mb-3 flex items-center gap-2">
                            <BsTriangleFill />
                            Use Case
                          </h2>
                          <a href='#' className="flex flex-col gap-4">
                            {useCaseTools.map((ccc, index) => (
                              <div key={index} className="flex gap-3 items-start">
                                <div className="w-10 h-10 bg-[#C1FEB4] min-w-[40px] rounded-md flex items-center justify-center text-[#0c4e5f] text-lg">
                                  {ccc.icon}
                                </div>
                                <div>
                                  <h3 className="font-semibold text-sm">{ccc.title}</h3>
                                  <p className="text-xs text-gray-200">{ccc.description}</p>
                                </div>
                              </div>
                            ))}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Links Section */}
                    <div className="w-[400px] flex flex-col gap-8 bg-gradient-to-tr from-[#095162] to-[#0C4350] border border-[#2E606B] p-4 rounded-md overflow-y-auto">
                      {/* Section 1 - Get Started */}
                      <div className="flex flex-col pl-[20px]">
                        <h2 className="text-lg font-semibold mb-3 text-white">Get started is Easy!</h2>
                        {[
                          'Hire an Expert',
                          'Customer stories',
                          'Resources',
                          'Blog',
                          'Career',
                          'Help Center'
                        ].map((item, i) => (
                          <a
                            key={i}
                            href="#"
                            className="text-[#7F8A8C] text-sm mb-1 hover:text-[#C1FEB4] hover:underline transition duration-200"
                          >
                            {item}
                          </a>
                        ))}
                      </div>

                      {/* Section 2 - Terms and Privacy */}
                      <div className="flex flex-col pl-[20px]">
                        <h2 className="text-lg font-semibold mb-3 text-white">Terms and Privacy</h2>
                        <a
                          href="#"
                          className="text-[#7F8A8C] text-sm mb-1 hover:text-[#C1FEB4] hover:underline transition duration-200"
                        >
                          Terms of Services
                        </a>
                        <a
                          href="#"
                          className="text-[#7F8A8C] text-sm hover:text-[#C1FEB4] hover:underline transition duration-200"
                        >
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-white nav-aa hover:text-gray-300 font-medium">Blog</a>
            <a href="#" className="text-white nav-aa hover:text-gray-300 font-medium">Pricing</a>
            <a href="#" className="text-white nav-aa hover:text-gray-300 font-medium">Integrations</a>
          </div>
        )}

        {!isMobileView && (
          <button className="text-white bg-gradient-to-l from-[#093743] to-[#0C4F60] px-6 py-2 border border-[#45707c] rounded-full font-medium">
            Contact sales
          </button>
        )}
      </nav>
      {/* Mobile Sidebar */}
      {isMobileView && (
        <>
          <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar} />
          <div className={`sidebar-menu ${isSidebarOpen ? 'active' : ''} ${sidebarTheme}-sidebar`}>
            {/* Sidebar Header */}
            <div className="sidebar-header">
              <img src={Logo} alt="Logo" className="sidebar-logo" />
              <button
                onClick={toggleSidebar}
                className={`text-white p-2 focus:outline-none transition-all duration-300
      ${showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
    `}
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={50} className="menu-icon" />}
              </button>
            </div>

            {/* Search Bar */}
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
                aria-label="Search"
              />
            </div>

            {/* Menu Items */}
            <div className="sidebar-contain flex flex-col h-full pt-4">
              <div className="flex-grow overflow-y-auto">
                {mobileMenuItems.map((item, index) => (
                  <div key={index} className="menu-item-wrapper">
                    <MobileMenuItem
                      item={item}
                      toggleSidebar={toggleSidebar}
                      openMenus={openMenus}
                      setOpenMenus={setOpenMenus}
                      itemId={`menu-${index}`}
                    />
                  </div>
                ))}
              </div>

              {/* Footer Section */}
              <div className="sidebar-footer">
                {/* Authentication Buttons */}
                <div className="sidebar-auth-buttons">
                  <a
                    href="#"
                    className="sidebar-auth-btn sidebar-signup"
                    onClick={toggleSidebar}
                  >
                    Create Account
                  </a>
                  <a
                    href="#"
                    className="sidebar-auth-btn sidebar-login"
                    onClick={toggleSidebar}
                  >
                    Sign In
                  </a>
                </div>

                {/* Social Icons */}
                <div className="sidebar-social-icons">
                  <a href="#" className="sidebar-social-icon" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                  <a href="#" className="sidebar-social-icon" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                  <a href="#" className="sidebar-social-icon" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <a href="#" className="sidebar-social-icon" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </a>
                </div>

                {/* Theme Toggle */}
                <button
                  className="theme-toggle-btn"
                  onClick={toggleSidebarTheme}
                  aria-label="Toggle sidebar theme"
                >
                  {/* ... أيقونة التبديل ... */}
                  {sidebarTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="hero-container"
      >
        {/* Circles with icons */}
        <div className="circle circle-1">
          <motion.img
            custom={0}
            variants={iconVariants}
            src={Mailchimp}
            alt="Mailchimp"
            className="circle-icon"
          />
          <motion.img
            custom={1}
            variants={iconVariants}
            src={Stripe}
            alt="Stripe"
            className="circle-icon"
          />
        </div>

        <div className="circle circle-2">
          <motion.img
            custom={2}
            variants={iconVariants}
            src={Zapier}
            alt="Zapier"
            className="circle-icon"
          />
          <motion.img
            custom={3}
            variants={iconVariants}
            src={Drive}
            alt="Google Drive"
            className="circle-icon"
          />
        </div>

        <div className="circle circle-3">
          <motion.img
            custom={4}
            variants={iconVariants}
            src={Asana}
            alt="Asana"
            className="circle-icon"
          />
          <motion.img
            custom={5}
            variants={iconVariants}
            src={Bitbucket}
            alt="Bitbucket"
            className="circle-icon"
          />
        </div>

        {/* Main content */}
        <motion.div
          variants={containerVariants}
          className="hero-content"
        >
          <motion.h5
            variants={itemVariants}
            className="hero-badge"
          >
            Get started today!
          </motion.h5>

          <motion.h1
            variants={itemVariants}
            className="hero-title"
          >
            Seamless integrations with your <span className="highlight-text">{currentWord}</span><span className="blinking-cursor">|</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="hero-subtitle"
          >
            See how we help your team solve today's biggest challenges.
          </motion.p>



          <motion.a
            href="#"
            className="bg-[#C1FEB4] text-[#1A1A1A] px-9 py-4 rounded-full font-bold no-underline mb-10 transition-all duration-300 ease-in-out border-2 border-transparent text-lg shadow-[0_4px_15px_rgba(193,254,180,0.3)] relative overflow-hidden hover:bg-transparent hover:text-[#C1FEB4] hover:border-[#C1FEB4] hover:shadow-[0_4px_20px_rgba(193,254,180,0.4)]"
          >
            <span className="relative z-10">Start your free trial</span>
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent translate-x-[-100%] transition-transform duration-600 ease-in-out group-hover:translate-x-[100%]"></span>
          </motion.a>


          <motion.div
            variants={itemVariants}
            className="flex justify-center f-hero items-center gap-1 hero-rating-container"
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
            <div className="flex items-center  text-white gap-2">
              <span>5,200+ reviews on</span>
              <img src={Trustpilot} alt="Trustpilot" className="h-6 sm:h-8" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;