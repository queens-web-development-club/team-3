import React, { useState } from "react"; // Step 1
import Logo from "./assets/images/logo.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Step 2

  return (
    <div className='flex items-center justify-between p-1 text-white bg-custom-purple'>
      <div className='flex items-center'>
        <img src={Logo} alt='Logo' className='h-16 mr-2' />
        <span className='text-lg font-bold'>Queen's Board Game Club</span>
      </div>
      <div className='md:hidden flex items-center' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {" "}
        {/* Step 3 */}
        <div className='h-6 w-6 flex flex-col justify-between cursor-pointer'>
          <div className='h-0.5 w-full bg-white'></div>
          <div className='h-0.5 w-full bg-white'></div>
          <div className='h-0.5 w-full bg-white'></div>
        </div>
      </div>
      <div className={`flex gap-4 pr-6 ${isMenuOpen ? "flex" : "hidden"} md:flex`}>
        {" "}
        {/* Step 4 */}
        <a href='/socials' className='pl-6 pr-6 p-1 border rounded-full'>
          Socials
        </a>
        <a href='/meetings' className='pl-6 pr-6 p-1 border rounded-full'>
          Meetings
        </a>
        <a href='/faq' className='pl-6 pr-6 p-1 border rounded-full'>
          FAQ
        </a>
      </div>
    </div>
  );
}

export default Header;
