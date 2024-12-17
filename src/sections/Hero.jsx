import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className='relative mt-20 pt-60 pb-40 max-lg:pt-52 max-lg:pb-36  max-md:pt-36 max-md:pb-32   '>
      <Element name='hero'>
        <div className='container'>
          {/* left section - text section */}
          <div className='relative z-2 max-w-512 max-lg:max-w-388'>
            <div className='caption small-2 uppercase text-p3'>
              <p> YOUR GROWTH, SIMPLIFIED</p>
            </div>
            <h1 className='mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12'>
              DIGITAL SOLUTIONS THAT DELIVER
            </h1>
            <p className='max-w-440 mb-14 body-1 max-md:mb-10'>
              Our expertise turns complexity into clarity. Boost leads,
              strengthen your brand, and watch your business thrive with
              streamlined, results-driven strategies.
            </p>
            <LinkScroll to='contact' offset={-100} spy smooth>
              <Button icon='/images/zap.svg'>free consultation </Button>
            </LinkScroll>
          </div>
          {/* right section - Image section */}
          <div className='absolute -top-20 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res'>
            <img
              src='/images/hero.png'
              className='size-1230 max-lg:h-auto'
              alt='hero'
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
