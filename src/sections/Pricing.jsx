import { useState, memo, useCallback } from "react";
import clsx from "clsx";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import { plans } from "../constants";
import CountUp from "react-countup";
import { scroller } from "react-scroll";

import Button from "../components/Button";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  const [expandedCards, setExpandedCards] = useState({}); // Changed to object to track multiple cards

  const featuresLimit = 4; // Show only 4 features initially

  const toggleExpanded = useCallback(
    (planId) => {
      const wasExpanded = expandedCards[planId];

      setExpandedCards((prev) => ({
        ...prev,
        [planId]: !prev[planId], // Toggle specific card
      }));

      // If collapsing (was expanded), scroll back to plans section with slower animation
      if (wasExpanded) {
        setTimeout(() => {
          scroller.scrollTo("plans", {
            duration: 1500, // Increased from 800 to 1500ms for slower scroll
            delay: 200, // Increased delay for smoother transition
            smooth: "easeInOutQuart",
            offset: -100,
          });
        }, 300); // Increased timeout for better UX
      }
    },
    [expandedCards]
  );

  return (
    <section className='mb-40'>
      <Element name='plans'>
        <div className='container'>
          <div className='max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16'>
            <h3 className='h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm'>
              Flexible plans for businesses of all sizes
            </h3>
            {/* switch buttons */}
            <div className='relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]'>
              <button
                onClick={() => setMonthly(true)}
                className={clsx("pricing-head_btn", monthly && "text-p4")}
              >
                monthly{" "}
              </button>
              <button
                onClick={() => setMonthly(false)}
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
              >
                Annual{" "}
              </button>
              {/* the switch button backdrop */}
              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500 ",
                  !monthly && "translate-x-full"
                )}
              />
            </div>
            {/* button area background image */}
            <div className='pricing-bg'>
              <img
                src='/images/bg-outlines.svg'
                width={960}
                height={380}
                alt='outline'
                className='relative z-2'
              />
              <img
                src='/images/bg-outlines-fill.png'
                width={960}
                height={380}
                alt='outline'
                className='absolute inset-0 opacity-5 mix-blend-soft-light'
              />
            </div>
          </div>
          {/* pricing section */}
          <div className='scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6'>
            {plans.map((plan, index) => {
              const isExpanded = expandedCards[plan.id] || false; // Check specific card
              const hasMoreFeatures = plan.features.length > featuresLimit;
              const displayFeatures = isExpanded
                ? plan.features
                : plan.features.slice(0, featuresLimit);

              return (
                <div
                  key={plan.id}
                  className={clsx(
                    "pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)] flex flex-col transition-all duration-500",
                    // Ensure proper border classes for all cards with consistent borders
                    "border-2 border-s2",
                    // Additional border styling based on position
                    index === 0 && "xl:border-none",
                    index === 1 && "xl:border-2",
                    index === 2 && "xl:border-none"
                  )}
                >
                  {index === 1 && (
                    <div className='g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl' />
                  )}

                  <div
                    className={clsx(
                      "absolute left-0 right-0 z-2 flex items-center justify-center",
                      index === 1 ? "-top-6" : "-top-6 xl:-top-11"
                    )}
                  >
                    <img
                      src={plan.logo}
                      alt={plan.title}
                      className={clsx(
                        "object-contain drop-shadow-2xl",
                        index === 1 ? "size-[120px]" : "size-[90px]"
                      )}
                    />
                  </div>

                  <div
                    className={clsx(
                      "relative flex flex-col items-center",
                      index === 1 ? "pt-24" : "pt-12"
                    )}
                  >
                    <div
                      className={clsx(
                        "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                        index === 1
                          ? "border-p3 text-p3 text-center"
                          : "border-p1 text-p1 text-center"
                      )}
                    >
                      {plan.caption}
                    </div>
                    <div className='relative z-2 flex items-center justify-center w-[225px] h-[50px]'>
                      <div
                        className={clsx(
                          "h-num flex items-start",
                          index === 1 ? "text-p3" : "text-p1"
                        )}
                      >
                        {/* <CountUp
                          start={plan.priceMonthly}
                          end={monthly ? plan.priceMonthly : plan.priceYearly}
                          duration={0.4}
                          useEasing={false}
                          preserveValue
                        /> */}
                      </div>
                      <div className='small-1 relative top-3 ml-1 uppercase'>
                        {/* / mo */}
                      </div>
                    </div>
                  </div>

                  <div className='body-1 relative z-2 mb-10 w-full pb-9 text-center text-p4 border-b border-s2'>
                    {plan.title}
                  </div>

                  {/* features section */}
                  <ul className='mx-auto space-y-4 xl:px-7 flex-grow'>
                    {displayFeatures.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className='relative flex items-center gap-5'
                      >
                        <img
                          src='/images/check.png'
                          alt='check'
                          className='size-10 object-contain'
                        />
                        <p className='flex-1'>{feature}</p>
                      </li>
                    ))}
                  </ul>

                  {/* Get Started button */}
                  <div className='mt-10 flex w-full justify-center'>
                    <Link to='/book-consultation'>
                      <Button icon={plan.icon}>Get Started</Button>
                    </Link>
                  </div>

                  {/* Learn More button - now below Get Started */}
                  {hasMoreFeatures && (
                    <div className='flex justify-center mt-4'>
                      <button
                        onClick={() => toggleExpanded(plan.id)}
                        className={clsx(
                          "text-sm px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105",
                          index === 1
                            ? "border-p3 text-p3 hover:bg-p3/10"
                            : "border-p1 text-p1 hover:bg-p1/10"
                        )}
                      >
                        {isExpanded
                          ? "Show Less"
                          : `Learn More (+${
                              plan.features.length - featuresLimit
                            })`}
                      </button>
                    </div>
                  )}

                  {index === 1 && (
                    <p className='small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-["-"] after:mx-2.5 after:content-["-"]'>
                      Limited time offer
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Element>
      <div className='mb-52'></div>
    </section>
  );
};

export default memo(Pricing);
