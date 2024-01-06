import React from "react";
import { Link } from "react-router-dom";

const BannerSection = () => {
     return (
          <div>
               <div className="">
                    <div className="carousel w-full h-[600px]">
                         {/* 1st */}
                         <div
                              id="slide1"
                              className="carousel-item relative w-full"
                         >
                              <img
                                   src="https://i.ibb.co/mq4RZCz/ifs-hero-food-still-life-1920x1080x72.jpg"
                                   className="object-cover w-full"
                              />
                              <div className="absolute h-full flex gap-4 items-center top-0 left-0 w-full">
                                   <div className="mx-auto">
                                        <div className="text-white space-y-3  text-center  ">
                                             <h3 className=" text-3xl md:text-4xl lg:text-5xl mb-5 font-bold">
                                                  Welcome to RJ's Kitchen
                                             </h3>
                                             <p className="text-xl text-white text-center">
                                                  Experience the Finest Culinary
                                                  Delights in Town
                                             </p>

                                             <div className="flex gap-2 justify-center">
                                                  <Link to="/allFoodItems">
                                                       <button className="btn bg-[#FF444A] text-white border-none">
                                                            Our Menus
                                                       </button>
                                                  </Link>
                                                  {/* <button className="btn bg-[#FF444A] text-white border-none">
                                                       Latest Project
                                                  </button> */}
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="absolute flex justify-center md:justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                                   <a href="#slide4" className="btn btn-circle">
                                        ❮
                                   </a>
                                   <a href="#slide2" className="btn btn-circle">
                                        ❯
                                   </a>
                              </div>
                         </div>
                         {/* 2nd */}
                         <div
                              id="slide2"
                              className="carousel-item relative w-full"
                         >
                              <img
                                   src=" https://i.ibb.co/dcH28jR/1647973541988-restaurant-banner.png"
                                   className="object-cover w-full "
                              />
                              <div className="absolute h-full flex gap-4 items-center top-0 left-0 w-full">
                                   <div className="mx-auto">
                                        <div className="text-white space-y-3  text-center  ">
                                             <h3 className=" text-3xl md:text-4xl lg:text-5xl mb-5 font-bold">
                                                  Welcome to RJ's Kitchen
                                             </h3>
                                             <p className="text-xl text-white text-center">
                                                  Experience the Finest Culinary
                                                  Delights in Town
                                             </p>

                                             <div className="flex gap-2 justify-center">
                                                  <Link to="/allFoodItems">
                                                       <button className="btn bg-[#FF444A] text-white border-none">
                                                            Our Menus
                                                       </button>
                                                  </Link>
                                                  {/* <button className="btn bg-[#FF444A] text-white border-none">
                                                       Latest Project
                                                  </button> */}
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                                   <a href="#slide1" className="btn btn-circle">
                                        ❮
                                   </a>
                                   <a href="#slide3" className="btn btn-circle">
                                        ❯
                                   </a>
                              </div>
                         </div>
                         {/* 3rd */}
                         <div
                              id="slide3"
                              className="carousel-item relative w-full"
                         >
                              <img
                                   src="https://i.ibb.co/VjzKSxh/Italian-food-BI.jpg"
                                   // src="https://i.ibb.co/tBTvLZd/sam-moghadam-khamseh-wg551-YMfe-Oc-unsplash.jpg"
                                   className="w-full object-cover"
                              />
                              <div className="absolute h-full flex gap-4 items-center top-0 left-0 w-full">
                                   <div className="mx-auto">
                                        <div className="text-white space-y-3  text-center  ">
                                             <h3 className=" text-3xl md:text-4xl lg:text-5xl mb-5 font-bold">
                                                  Welcome to RJ's Kitchen
                                             </h3>
                                             <p className="text-xl text-white text-center">
                                                  Experience the Finest Culinary
                                                  Delights in Town
                                             </p>

                                             <div className="flex gap-2 justify-center">
                                                  <Link to="/allFoodItems">
                                                       <button className="btn bg-[#FF444A] text-white border-none">
                                                            Our Menus
                                                       </button>
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                                   <a href="#slide2" className="btn btn-circle">
                                        ❮
                                   </a>
                                   <a href="#slide4" className="btn btn-circle">
                                        ❯
                                   </a>
                              </div>
                         </div>
                         {/* 4th */}
                         <div
                              id="slide4"
                              className="carousel-item relative w-full"
                         >
                              <img
                                   src="https://i.ibb.co/y5ZwL1N/burger-banner2.jpg"
                                   className="object-cover w-full "
                              />
                              <div className="absolute h-full flex gap-4 items-center top-0 left-0 w-full">
                                   <div className="mx-auto">
                                        <div className="text-white space-y-3  text-center  ">
                                             <h3 className=" text-3xl md:text-4xl lg:text-5xl mb-5 font-bold">
                                                  Welcome to RJ's Kitchen
                                             </h3>
                                             <p className="text-xl text-white text-center">
                                                  Experience the Finest Culinary
                                                  Delights in Town
                                             </p>

                                             <div className="flex gap-2 justify-center">
                                                  <Link to="/allFoodItems">
                                                       <button className="btn bg-[#FF444A] text-white border-none">
                                                            Our Menus
                                                       </button>
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                                   <a href="#slide3" className="btn btn-circle">
                                        ❮
                                   </a>
                                   <a href="#slide1" className="btn btn-circle">
                                        ❯
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default BannerSection;
