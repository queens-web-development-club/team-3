import { FaDiscord, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function HomePage() {
  return (
    <div className='text-white bg-custom-orange'>
      {/* {Main} */}
      <section>HomePage Section</section>

      {/* {Meetings} */}
      <section>Meeting Section</section>

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
