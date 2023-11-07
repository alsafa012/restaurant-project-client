import React from 'react';
import { GiPartyPopper } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineHomeWork } from "react-icons/md";

const FirstExtraSection = () => {
     return (
          <div className='container mx-auto'>
          <div className="my-5 md:my-14">
          <div>
               <h2 className="text-center text-3xl font-bold">
                   <span className='text-[#fcb900]'></span> Welcome to Our Restaurant..
               </h2>
               <p className="w-[50%] mx-auto text-center my-5 text-sm font-light">
               At our restaurant, we believe in creating unique dining experiences for our valued customers. Our culinary creations are tailored to your tastes and preferences. We don't want you to ask, "Can I dine here?" but rather, "When can I savor our delicious dishes?"
               </p>
          </div>
          <div className="grid gap-5  md:grid-cols-2 lg:grid-cols-4 font-light mx-4 md:mx-auto">
               <div className="text-center space-y-3 shadow-lg py-5 rounded-lg">
                    <div className="flex justify-center text-5xl my-2 ">
                         <MdOutlineHomeWork></MdOutlineHomeWork>
                    </div>
                    <p>Discover the Perfect Venue</p>
               </div>
               <div className="text-center space-y-3 shadow-lg py-5 rounded-lg">
                    <div className="flex justify-center text-5xl my-2 ">
                         <BiCommentDetail></BiCommentDetail>
                    </div>
                    <p>Connect with Top Vendors</p>
               </div>
               <div className="text-center space-y-3 shadow-lg py-5 rounded-lg">
                    <div className="flex justify-center text-5xl my-2 ">
                         <FaHandsHelping></FaHandsHelping>
                    </div>
                    <p>Let Us Make Your Event a Success</p>
               </div>
               <div className="text-center space-y-3 shadow-lg py-5 rounded-lg">
                    <div className="flex justify-center text-5xl my-2 ">
                         <GiPartyPopper></GiPartyPopper>
                    </div>
                    <p>Celebrate with Friends and Loved Ones</p>
               </div>
          </div>
     </div>
     </div>
     );
};

export default FirstExtraSection;