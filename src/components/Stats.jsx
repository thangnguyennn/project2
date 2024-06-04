import React, { useRef, useEffect, useState } from 'react';
import { stats } from '../constants';
import styles from '../style';
import CountUp from 'react-countup';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } 
    );

    observer.observe(statsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={statsRef} className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <p className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.prefix}</p>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
            {isVisible && <CountUp duration={4} end={stat.value} />}
            {stat.postfix}
          </h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
