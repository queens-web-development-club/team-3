import { FaDiscord, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function HomePage() {
  return (
    <div className='text-text-white bg-custom-orange font-bree'>
      {/* {Main} */}
      <section className="">
        <div className="flex flex-col justify-center items-center pt-20 gap-y-4">
          <h1 className="text-6xl">WELCOME TO</h1>
          <h1 className="text-4xl">THE</h1>
          <h1 className="text-custom-purple text-6xl">QUEEN'S</h1>
          <h1 className="text-custom-purple text-6xl">BOARD GAME</h1>
          <h1 className="text-custom-purple text-6xl">CLUB</h1>
        </div>
      </section>

      {/* {Meetings} */}
      <section className="flex flex-row justify-around pt-32 text-center items-start">
        <div className="flex flex-col justify-center w-5/12">
          <h3 className="text-6xl">Meeting Times</h3>
          <h7 className="text-xl pt-6"> We meet weekly on _____ and ______ at _______ and _________</h7>

        </div>
        <div className="w-5/12 text-left text-lg">
          <h3 className="text-6xl text-center pb-6">Special Events</h3>
          <li className="list-disc">September 9: Event number 1</li>
          <li className="list-disc">October 12: Event number 2</li>
          <li className="list-disc">November 9: Event number 3</li>
          <li className="list-disc">December 9: Event number 4</li>
          <li className="list-disc">January 9: Event number 5</li>
          <li className="list-disc">Febuaray 23: Event number 6</li>
        </div>
        


      </section>

      {/* {Socials} */}
      <section className=''>
        <div className='p-32'>
          <div className='text-5xl'>Socials</div>
          <div className='p-10 text-custom-purple text-2xl'>
            Step into the world of strategy and fun at Queen's University Board Game Club! Connect with us on Discord to join lively game nights,
            strategy sessions, and club meetings in real-time. Follow us on Instagram for the latest club photos, event updates, and a peek into our
            board game adventures. Our club is more than just games; it's a community of friends and enthusiasts eager to welcome new members. Stay
            updated, get involved, and share your love for board games with us. Join our Discord and Instagram today and be part of our ever-growing
            family of gamers. Welcome to the game!
          </div>
        </div>
        {/* {Icons} */}
        <div className='flex justify-center items-center space-x-40'>
          <a href='https://discord.com' target='_blank' rel='noopener noreferrer'>
            <FaDiscord className='text-7xl' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='text-7xl' />
          </a>
          <a href='https://gmail.com' target='_blank' rel='noopener noreferrer'>
            <MdEmail className='text-7xl' />
          </a>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <FaFacebookF className='text-7xl' />
          </a>
        </div>
      </section>

      {/* {FAQ} */}
      <section>FAQ Section</section>
    </div>
  );
}

export default HomePage;
