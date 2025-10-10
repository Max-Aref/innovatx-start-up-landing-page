import { memo, useCallback } from "react";
import { socials } from "../constants/index.jsx";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleCareersClick = useCallback(() => {
    // Scroll to top when careers link is clicked
    window.scrollTo(0, 0);
  }, []);

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
          <div className='flex flex-col mx-auto items-center justify-center gap-4 xl:flex-3/4 w-full max-w-full px-2'>
            <div className='flex flex-nowrap items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-6 w-full max-w-full overflow-x-auto scrollbar-hide'>
              <Link
                to='/privacy-policy'
                onClick={handleCareersClick}
                className='text-p5 transition-all duration-500 hover:text-p1 cursor-pointer text-center text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0'
              >
                Privacy Policy
              </Link>
              <span className='text-p5/30 text-[10px] xs:text-xs sm:text-sm hidden xs:inline flex-shrink-0'>
                •
              </span>
              <Link
                to='/terms-of-use'
                onClick={handleCareersClick}
                className='text-p5 transition-all duration-500 hover:text-p1 cursor-pointer text-center text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0'
              >
                Terms of Use
              </Link>
              <span className='text-p5/30 text-[10px] xs:text-xs sm:text-sm hidden xs:inline flex-shrink-0'>
                •
              </span>
              <Link
                to='/careers'
                onClick={handleCareersClick}
                className='text-p5 transition-all duration-500 hover:text-p1 cursor-pointer text-center text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0'
              >
                Careers
              </Link>
              <span className='text-p5/30 text-[10px] xs:text-xs sm:text-sm hidden xs:inline flex-shrink-0'>
                •
              </span>
              <Link
                to='/about'
                onClick={handleCareersClick}
                className='text-p5 transition-all duration-500 hover:text-p1 cursor-pointer text-center text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0'
              >
                About
              </Link>
              <span className='text-p5/30 text-[10px] xs:text-xs sm:text-sm hidden xs:inline flex-shrink-0'>
                •
              </span>
              <Link
                to='/sitemap'
                onClick={handleCareersClick}
                className='text-p5 transition-all duration-500 hover:text-p1 cursor-pointer text-center text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0'
              >
                Site Map
              </Link>
            </div>

            <div className='flex items-center justify-center w-full mt-2'>
              <p className='opacity-70 text-[10px] xs:text-xs sm:text-sm text-center px-2 sm:px-4 leading-relaxed'>
                © 2025 Copyright Innovatx technologies,LLC. All rights reserved.
              </p>
            </div>
          </div>
          {/* social media icons */}
          <ul className='flex justify-center items-center gap-3 max-md:mt-10'>
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className='social-icon' aria-label={title}>
                  <img
                    src={icon}
                    className='size-1/3 object-contain'
                    alt={title}
                    loading='lazy'
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
