import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Sudeep</span>
          <span className="text-[#8245ec]"> </span>
          <span className="text-white">Kumar</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/sudeep-kumar0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/sudeep-kumar-303aa8312"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://leetcode.com/u/sudee_p__kumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
            title="LeetCode"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 1024 1024"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="leetcode-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#FFA116" />
                  <stop offset="100%" stopColor="#000000" />
                </linearGradient>
              </defs>
              <path
                fill="url(#leetcode-gradient)"
                d="M334.3 483.8 506 311.4l99.7-99.8c8.5-8.5 8.5-22.3 0-30.8l-37.8-37.8c-8.5-8.5-22.3-8.5-30.8 0l-308 307.9c-8.5 8.5-8.5 22.3 0 30.8l308 308c8.5 8.5 22.3 8.5 30.8 0l37.8-37.8c8.5-8.5 8.5-22.3 0-30.8L334.3 483.8z"
              />
              <path
                fill="#000000"
                d="M725.3 588.5c-11.2 0-22.5-4.3-31.1-12.9-17.2-17.2-17.2-45.1 0-62.3l92.6-92.6-92.6-92.6c-17.2-17.2-17.2-45.1 0-62.3s45.1-17.2 62.3 0l123.7 123.7c17.2 17.2 17.2 45.1 0 62.3L756.5 575.6c-8.6 8.6-19.8 12.9-31.2 12.9z"
              />
              <path
                fill="#111111"
                d="M592.7 853.4c-44.3 0-88.5-16.8-122.3-50.6l-89.5-89.5c-17.2-17.2-17.2-45.1 0-62.3s45.1-17.2 62.3 0l89.5 89.5c34.9 34.9 91.6 34.9 126.5 0 16.8-16.8 26.1-39.1 26.1-62.3s-9.3-45.5-26.1-62.3c-17.2-17.2-17.2-45.1 0-62.3s45.1-17.2 62.3 0c33.8 33.8 50.6 78 50.6 122.3s-16.8 88.5-50.6 122.3c-33.8 33.8-77.9 50.6-122.3 50.6z"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/codingmastr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
