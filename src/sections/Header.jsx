import { useState, useEffect, useRef } from "react";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [missionDropdownOpen, setMissionDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced smooth scroll to top function
  const smoothScrollToTop = () => {
    // Use react-scroll for smooth animation
    scroll.scrollToTop({
      duration: 1200,
      delay: 0,
      smooth: "easeInOutCubic",
    });
  };

  // Handle logo click to go to home page and scroll to header smoothly
  const handleLogoClick = (e) => {
    // Close mobile menu if open
    setOpen(false);
    setMissionDropdownOpen(false);

    // Check if we're already on the home page
    if (location.pathname === "/") {
      // If on home page, prevent default link behavior and smooth scroll to top
      e.preventDefault();
      smoothScrollToTop();
    } else {
      // If on another page (like careers), navigate to home
      // The scroll will happen automatically when the page loads
      navigate("/");
    }
  };

  // Handle scrolling after navigation to home page
  useEffect(() => {
    if (location.pathname === "/") {
      // Small delay to ensure page is fully loaded before scrolling
      const timeoutId = setTimeout(() => {
        smoothScrollToTop();
      }, 150);

      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        triggerRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !triggerRef.current.contains(event.target)
      ) {
        setMissionDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const NavLinkScroll = ({ title }) => (
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

  const handleMissionClick = (e) => {
    e.preventDefault();
    setMissionDropdownOpen(!missionDropdownOpen);
  };

  const handleMissionHover = () => {
    setMissionDropdownOpen(true);
  };

  const handleMissionLeave = () => {
    // Add a small delay to prevent flickering
    setTimeout(() => {
      if (
        !dropdownRef.current?.matches(":hover") &&
        !triggerRef.current?.matches(":hover")
      ) {
        setMissionDropdownOpen(false);
      }
    }, 100);
  };

  const DropdownItem = ({ title, to }) => (
    <LinkScroll
      onClick={() => {
        setOpen(false);
        setMissionDropdownOpen(false);
      }}
      to={to}
      offset={-100}
      spy
      smooth
      className='block px-4 py-3 text-md text-p4 hover:text-p1 hover:bg-p1/10 transition-all duration-200 cursor-pointer border-b border-s4/10 last:border-b-0'
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-5 transition-all duration-500 max-lg:py-4",
        hasScrolled && "bg-black-100 backdrop-blur-[8px]"
      )}
    >
      <div className='container flex justify-between items-center h-16 max-lg:px-5'>
        {/* Logo - Enhanced with smooth scroll */}
        <Link
          to='/'
          className='flex cursor-pointer z-2 hover:scale-105 transition-transform duration-300'
          onClick={handleLogoClick}
        >
          <div className='flex gap-4 items-center h-full'>
            <img
              src='/images/innovatx-logo.svg'
              height={30}
              width={74}
              alt='innovatx startup logo'
              className='shadow-lxl shadow-300 shadow-blue-500 bg-black-100'
            />
            <p className='company-name text-p4 font-bold hover:text-p1 transition-colors duration-300'>
              INNOVATX
            </p>
          </div>
        </Link>

        {/* Navbar - Centered alignment */}
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0 flex-50",
            open ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className='max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-lg:px-4'>
            <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto overflow-visible'>
              <ul className='flex justify-between items-center gap-10 max-lg:block max-lg:px-12 h-16 max-lg:h-auto max-lg:mt-10'>
                <li className='nav-li flex items-center h-full'>
                  <NavLinkScroll title='features' />
                </li>

                {/* Mission Dropdown */}
                <li className='nav-li relative flex items-center h-full'>
                  <div
                    ref={triggerRef}
                    className='base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5 flex items-center gap-1 select-none h-full'
                    onClick={handleMissionClick}
                    onMouseEnter={handleMissionHover}
                    onMouseLeave={handleMissionLeave}
                  >
                    Mission
                    <svg
                      className={clsx(
                        "w-3 h-3 transition-transform duration-300 ml-1",
                        missionDropdownOpen ? "rotate-180" : "rotate-0"
                      )}
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>

                  {/* Dropdown Menu */}
                  {missionDropdownOpen && (
                    <div
                      ref={dropdownRef}
                      className='absolute top-full left-0 mt-2 w-64 bg-black-100/95 backdrop-blur-md border border-p1/20 rounded-xl shadow-2xl overflow-hidden z-[100] max-lg:static max-lg:w-full max-lg:bg-transparent max-lg:border-none max-lg:shadow-none max-lg:mt-2'
                      onMouseEnter={() => setMissionDropdownOpen(true)}
                      onMouseLeave={handleMissionLeave}
                    >
                      <div className='py-2'>
                        <DropdownItem
                          title='Small Business Mission'
                          to='small-business'
                        />
                        <DropdownItem title='Startups Mission' to='startups' />
                        <DropdownItem
                          title='In House Solutions'
                          to='solutions'
                        />
                      </div>
                    </div>
                  )}
                </li>

                <li className='nav-li flex items-center h-full'>
                  <NavLinkScroll title='plans' />
                </li>
                <li className='nav-li flex items-center h-full'>
                  <NavLinkScroll title='faq' />
                </li>
                <li className='nav-li flex items-center h-full'>
                  <NavLinkScroll title='contact' />
                </li>

                {/* Careers Link - Now matches other links */}
                <li className='nav-li flex items-center h-full'>
                  <NavLink
                    to='/careers'
                    className={({ isActive }) =>
                      clsx(
                        "base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5",
                        isActive && "nav-active"
                      )
                    }
                    onClick={() => setOpen(false)}
                  >
                    Careers
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Background Image */}
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
                className='absolute inset-0 mix-blend-soft-light opacity-5'
                alt='outlines'
                width={960}
                height={380}
              />
            </div>
          </div>
        </div>

        {/* Mobile Toggle Button - Centered */}
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
