import { memo, useState, useCallback } from "react";
import clsx from "clsx";
import { Collapse } from "react-collapse";
import PropTypes from "prop-types";

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);
  const active = activeId === item.id;

  const handleToggle = useCallback(() => {
    setActiveId((prevId) => (prevId === item.id ? null : item.id));
  }, [item.id]);

  return (
    <div className='relative z-2 mb-16'>
      <div
        className='group relative flex cursor-pointer items-center justify-between gap-10 px-7'
        onClick={handleToggle}
      >
        <div className='flex-1'>
          <div className='small-compact mb-1.5 text-p3 max-lg:hidden'>
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "max-lg:text-p1"
            )}
          >
            {item.question}
          </div>
        </div>
        {/* icon */}
        <div
          className={clsx(
            "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
            active && "before:bg-p1 after:rotate-0 after:bg-p1"
          )}
        >
          <div className='g4 size-11/12 rounded-full shadow-300' />
        </div>
      </div>

      <Collapse isOpened={activeId === item.id}>
        <div className='body-3 px-7 py-3.5'>{item.answer}</div>
      </Collapse>

      {/* adding background to active question and answer */}
      <div
        className={clsx(
          "g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl transition-opacity duration-500 absolute opacity-0",
          active ? "opacity-100" : ""
        )}
      >
        <div className='g4 absolute inset-0.5 -z-1 rounded-3xl' />
        <div className='absolute left-8 top-0 h-0.5 w-40 bg-p1' />
      </div>
    </div>
  );
};
FaqItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default memo(FaqItem);
