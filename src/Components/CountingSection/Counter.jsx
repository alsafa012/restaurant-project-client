import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
     const [scrollTrigger, setScrollTrigger] = useState(false);
     return (
          <div className="">
               <ScrollTrigger
                    onEnter={() => setScrollTrigger(true)}
                    onExit={() => setScrollTrigger(false)}
               >
                    <div className="relative w-full">
                    <div className="h-[300px] bg-[url('https://i.ibb.co/1Xs8qWX/counter-bg.jpg')] bg-fixed bg-cover object-fill bg-center opacity-70"></div>
                         <div className="absolute top-4 space-y-3 md:space-y-0 md:top-[45%] w-full md:flex md:justify-around text-center md:items-center md:gap-5">
                              <div>
                                   <h2 className="text-3xl md:text-4xl font-bold text-black">
                                        {scrollTrigger && (
                                             <CountUp
                                             className="text-[#FF444A]"
                                                  start={0}
                                                  end={65}
                                                  duration={2.75}
                                             />
                                        )}
                                        +
                                   </h2>
                                   <p className="text-3xl md:text-4xl font-bold text-black">Reviews</p>
                              </div>
                              <div>
                                   <h2 className="text-3xl md:text-4xl font-bold text-black">
                                        <span>Up to</span>
                                        {scrollTrigger && (
                                             <CountUp
                                             className="text-[#FF444A] ml-3"
                                                  start={0}
                                                  end={50}
                                                  duration={2.75}
                                             />
                                        )}
                                        +
                                   </h2>
                                   <p className="text-3xl md:text-4xl font-bold text-black">Food Items </p>
                              </div>
                              <div>
                                   <h2 className="text-3xl md:text-4xl font-bold text-black">
                                        {scrollTrigger && (
                                             <CountUp
                                             className="text-[#FF444A]"
                                                  start={0}
                                                  end={100}
                                                  duration={2.75}
                                             />
                                        )}
                                        %
                                   </h2>
                                   <p className="text-3xl md:text-4xl font-bold text-black">Hygienic</p>
                              </div>
                         </div>
                    </div>
                    {/* </div> */}
               </ScrollTrigger>
          </div>
     );
};

export default Counter;
