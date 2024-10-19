import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
  const menuItems = [
    {
      text: "Shop",
      url: "https://www.sorteddeli.com/shop",
    },
    {
      text: "Blog",
      url: "https://www.sorteddeli.com/blog",
    },
    {
      text: "About Us",
      url: "https://www.sorteddeli.com/about-us",
    },
    {
      text: "Contact Us",
      url: "https://www.sorteddeli.com/contact-us",
    },
  ];
  const newListItems = [
    {
      text: "FAQ",
      url: "https://www.sorteddeli.com/faq",
    },
    {
      text: "Terms and Conditions",
      url: "https://www.sorteddeli.com/terms-and-conditions",
    },
    {
      text: "Privacy Policy",
      url: "https://www.sorteddeli.com/privacy-policy",
    },
    {
      text: "Shipping Policy",
      url: "https://www.sorteddeli.com/shipping-policy",
    },
    {
      text: "Refund and Returns Policy",
      url: "https://www.sorteddeli.com/refund-and-returns-policy",
    },
  ];

  return (
    <div>
      <footer className="bg-[#1e1e1e]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-14">
          <div className="md:flex pb-[20px]">
            <div className="pl-14 flex flex-col gap-9 w-[487px] ml-[15px]">
              <img
                src="/sdlogo.png"
                className="h-[90px] w-[40px]"
                alt="SD Logo"
              />
              <div className="flex items-center gap-6 text-base max-w-max border rounded-r p-2 font-semibold whitespace-nowrap dark:text-white">
                <FaPhoneVolume />
                <p className="font-bold">+91 77580 99608</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pl-[75px]">
              <div>
                <h2 className="mb-6 text-[17px] font-semibold text-gray-900  dark:text-white">
                  Pages
                </h2>
                <ul className="text-white text-[14px] dark:text-gray-400 font-medium">
                  {menuItems.map((item, index) => (
                    <li key={index} className="mb-4">
                      <a href={item.url} className="text-white text-[14px]">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                  How can we help
                </h2>
                <ul className="text-white text-[14px] dark:text-gray-400 font-medium">
                  {newListItems.map((item, index) => (
                    <li key={index} className="mb-4">
                      <a href={item.url} className="text-white text-[14px]">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
