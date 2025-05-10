import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
  // state for toggling navbar
  const [open, setOpen] = useState(false);
  // handle scroll event state
  const [hasScrolled, setHasScrolled] = useState(false);

  // scroll event listener
  useEffect(() => {
    const handelScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  // NavLink component using react-scroll

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass='nav-active'
      className='base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5'
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-5 transition-all duration-500 max-lg:py-4 ",
        hasScrolled && " bg-black-100 backdrop-blur-[8px]"
      )}
    >
      <div className='container flex  justify-between h-14 items-center max-lg:px-5'>
        {/* logo */}
        <a href='/' className='flex cursor-pointer z-2'>
          <div className='flex  gap-4 items-center mt-8 -ml-2 '>
            <img
              src='/images/innovatx-logo.svg'
              height={30}
              width={74}
              logo='innovatx startup logo'
              className='shadow-lxl shadow-300 shadow-blue-500 bg-black-100'
            />
            <p className='company-name '>INNOVATX</p>
          </div>
        </a>
        {/* navbar */}
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0 flex-50",
            open ? "max-lg:opacity-100" : "max-lg:pointer-events-none "
          )}
        >
          <div className='max-lg:relative  max-lg:flex  max-lg:flex-col  max-lg:min-h-screen  max-lg:p-6  max-lg:overflow-hidden sidebar-before  max-lg:px-4 '>
            <nav className=' max-lg:relative  max-lg:z-2  max-lg:my-auto   overflow-y-hidden '>
              <ul className='flex justify-between gap-10 max-lg:block max-lg:px-12'>
                <li className='nav-li'>
                  <NavLink title='features' />
                </li>
                <li className='nav-li'>
                  <NavLink title='Mission' />
                </li>
                <li className='nav-li'>
                  <NavLink title='plans' />
                </li>
                <li className='nav-li'>
                  <NavLink title='faq' />
                </li>

                <li className='nav-li'>
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
