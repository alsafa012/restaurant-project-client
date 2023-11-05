import { Link } from "react-router-dom";

const Footer = () => {
     return (
          <div>
               <div>
                    <footer className="p-10 bg-[#272530] text-white font-medium rounded">
                         <div className="footer container mx-auto">
                              <aside>
                                   <img
                                        className="w-[80px] h-[80px]"
                                        src="https://i.ibb.co/0ZS9j4k/pngtree-chef-restaurant-logo-png-image-6136204.png"
                                        alt=""
                                   />
                                   <p className="text-xl font-medium">
                                        RJ's kitchen
                                        <br />
                                        Providing reliable tech since 2022
                                   </p>
                              </aside>
                              <nav>
                                   <header className="footer-title">
                                        Services
                                   </header>
                                   <a className="link link-hover">Branding</a>
                                   <a className="link link-hover">
                                        Home Delivery
                                   </a>
                                   <a className="link link-hover">
                                        Online Booking
                                   </a>
                              </nav>
                              <nav>
                                   <header className="footer-title">
                                        Company
                                   </header>
                                   <Link to="/about">
                                        <a className="link link-hover">
                                             About us
                                        </a>
                                   </Link>
                                   <Link to="/contact">
                                        <a className="link link-hover">
                                             Contact
                                        </a>
                                   </Link>
                                   <a className="link link-hover">Jobs</a>
                              </nav>
                              <nav>
                                   <header className="footer-title">
                                        Legal
                                   </header>
                                   <a className="link link-hover">
                                        Terms of use
                                   </a>
                                   <a className="link link-hover">
                                        Privacy policy
                                   </a>
                                   <a className="link link-hover">
                                        Cookie policy
                                   </a>
                              </nav>
                         </div>
                    </footer>
               </div>
          </div>
     );
};

export default Footer;
