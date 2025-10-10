import { memo } from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className='relative mt-20 pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 max-md:mt-[100px] hero-overflow-safe'>
      <Element name='hero'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl overflow-x-hidden'>
          {/* Text section */}
          <div className='hero-text-container'>
            <div className='caption small-2 uppercase text-p3'>
              <p>YOUR GROWTH, SIMPLIFIED</p>
            </div>
            <h1 className='mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12'>
              DIGITAL SOLUTIONS THAT DELIVER
            </h1>
            <p className='max-w-440 mb-14 body-1 max-md:mb-10 max-lg:max-w-full max-lg:mx-auto'>
              Our expertise turns complexity into clarity. Boost leads,
              strengthen your brand, and watch your business thrive with
              streamlined, results-driven strategies.
            </p>
            <div className='max-lg:flex max-lg:justify-center'>
              <Link to='/book-consultation'>
                <Button icon='/images/zap.svg'>free consultation</Button>
              </Link>
            </div>
          </div>

          {/* Image section */}
          <div className='hero-img-desktop hero-img-xl hero-img-2xl'>
            <img
              src='/images/hero.png'
              className='w-full h-auto object-contain max-w-full'
              alt='hero'
              loading='lazy'
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default memo(Hero);
