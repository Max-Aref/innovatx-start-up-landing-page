import { socials } from "../constants/index.jsx";
const Footer = () => {
  return (
    <footer>
      <div className='container py-10 flex flex-col items-center justify-center gap-4'>
        <div
          className='flex
          justify-center
         items-center
          space-between
            w-full max-md:flex-col
             max-md:items-center
              max-md:gap-4
               max-md:justify-center
                max-lg:space-between'
        >
          <div className='flex flex-col mx-auto items-center justify-center gap-2 xl:flex-3/4'>
            <div className='flex   mx-auto items-center justify-center gap-2'>
              <p className='  relative m-auto text-p5 transition-all duration-500 hover:text-p1'>
                Privacy Policy
              </p>
              <p className='  relative m-auto text-p5 transition-all duration-500 hover:text-p1'>
                Terms of Use
              </p>
              <p className=' m-auto text-p5 transition-all duration-500 hover:text-p1'>
                Site Map
              </p>
            </div>

            <div className='small-compact flex flex-1 flex-wrap items-center  gap-5'>
              <p className='opacity-70 leading-wider'>
                © 2024 Copyright Innovatx technologies,LLC. All rights reserved.
              </p>
            </div>
          </div>
          {/* social media icons */}
          <ul className='flex  justify-center items-center gap-3 max-md:mt-10  '>
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className='social-icon'>
                  <img src={icon} className='size-1/3 object-contain' />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
