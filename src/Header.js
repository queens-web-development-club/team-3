import Logo from "./assets/images/logo.svg";

function Header() {
  return (
    <div className='flex items-center justify-between p-1 text-white bg-custom-purple'>
      <div className='flex items-center'>
        <img src={Logo} alt='Logo' className='h-16 mr-2' />
        <span className='text-lg font-bold'>Queen's Board Game Club</span>
      </div>
      <div className='flex gap-4 pr-6'>
        <a href='/socials' className='pl-6 pr-6 p-1 border rounded-full '>
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
