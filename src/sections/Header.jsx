import clsx from "clsx";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";

// NavLink component using react-scroll

const NavLink = ({ title }) => (
  <LinkScroll className='base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5'>
    {title}
  </LinkScroll>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 z-50 w-full py-10'>
      <div className='container flex h-14 items-center max-lg:px-5'>
        <a href='/' className='lg:hidden flex-1 cursor-pointer z-2'>
          <img
            src='/images/xora.svg'
            height={55}
            width={115}
            logo='innovatx startup logo'
          />
        </a>
        {/* navbar */}
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            open ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className='max-lg:relative  max-lg:flex  max-lg:flex-col  max-lg:min-h-screen  max-lg:p-6  max-lg:overflow-hidden sidebar-before  max-lg:px-4 '>
            <nav className=' max-lg:relative  max-lg:z-2  max-lg:my-auto'>
              <ul className='flex max-lg:block max-lg:px-12'>
                <li className='nav-li'>
                  <NavLink title='features' />
                  <div className='dot' />
                  <NavLink title='pricing' />
                </li>
                <li className='nav-logo'>
                  <LinkScroll
                    to='hero'
                    offset={-100}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transform transition-transform duration-500 cursor-pointer"
                    )}
                  >
                    <img
                      src='/images/xora.svg'
                      height={55}
                      width={160}
                      alt='innovatx logo'
                    />
                  </LinkScroll>
                </li>
                <li className='nav-li'>
                  <NavLink title='faq' />
                  <div className='dot' />
                  <NavLink title='contact' />
                </li>
              </ul>
            </nav>
            {/* Bg image */}
            <div className='lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90'>
              <img
                src='/images/bg-outlines.svg'
                alt='outline'
                width={960}
                height={380}
                className='relative z-2'
              />
              <img
                src='/images/bg-outlines-fill.png'
                class='absolute inset-0 mix-blend-soft-light opacity-5'
                alt='outlines'
                width={960}
                height={380}
              />
            </div>
          </div>
        </div>
        {/* toggle button with icon changing on click */}
        <button
          className='lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center'
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${open ? "close" : "magic"}.svg`}
            className='size-1/2 object-contain'
            alt='toggle button'
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
