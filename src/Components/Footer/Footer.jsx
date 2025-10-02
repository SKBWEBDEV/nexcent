import Container from "../Layouts/Container"
import Footimg from "../../assets/footimg.png"
import { FaSquareInstagram } from "react-icons/fa6";
import { IoIosBasketball } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-[#263238]">
      <Container>
        <div className=" py-[70px] md:flex md:justify-between">
          <div>
            <img src={Footimg} alt="" />
            <p className="text-[#F5F7FA] mt-[40px] text-[14px] font-inter font-normal">Copyright © 2025 Nexcent ltd.</p>
            <p className="text-[#F5F7FA]  text-[14px] font-inter font-normal mt-3">All rights reserved</p>
            <div className="flex gap-[16px] mt-5 md:mt-[40px] text-white">
              <p className="py-[8px] px-[8px] rounded-full bg-[#3C474C]"><FaSquareInstagram /></p>
              <p className="py-[8px] px-[8px] rounded-full bg-[#3C474C]"><IoIosBasketball /></p>
              <p className="py-[8px] px-[8px] rounded-full bg-[#3C474C]"><FaTwitter /></p>
              <p className="py-[8px] px-[8px] rounded-full bg-[#3C474C]"><FaYoutube /></p>
            </div>
          </div>


          <div className="mt-5">
            <ul className="text-[#F5F7FA]">
              <h3 className="text-white text-[20px] font-inter font-semibold">Company</h3>
              <li className="mt-2 text-[14px] text-[#F5F7FA]">About us</li>
              <li className="mt-2 text-[14px] text-[#F5F7FA]">Blog</li>
              <li className="mt-2 text-[14px] text-[#F5F7FA]">Contact us</li>
              <li className="mt-2 text-[14px] text-[#F5F7FA]">Pricing</li>
              <li className="mt-2 text-[14px] text-[#F5F7FA]">Testimonials</li>
            </ul>
          </div>


          <div className="mt-5">
            <ul className="text-[#F5F7FA]">
              <h3 className="text-white text-[20px] font-inter font-semibold">Support</h3>
              <li className="mt-2 text-[14px] text-[#F5F7FA]">About us</li>
              <li className="mt-2 text-[14px] text-[#F5F7FA]">Blog</li>
              <li className="mt-2 text-[14px] text-[#F5F7FA]">Contact us</li>
              <li className="mt-2 text-[14px] text-[#F5F7FA]">Pricing</li>
              <li className="mt-2 text-[14px] text-[#F5F7FA]">Testimonials</li>
            </ul>
          </div>


       <div className="text-[#F5F7FA] w-fut max-w-sm mt-5">
      
      <h3 className="text-white text-lg font-semibold mb-2">Stay up to date</h3>

      
      <div className="relative md:w-full">
        <input
          className="bg-[#515B60] w-fit py-2 px-10 pl-3 rounded-md text-white placeholder-gray-300 
          focus:outline-none"
          type="text"
          placeholder="Your email address"
        />
        <SiMinutemailer className="absolute md:left-50 left-40 md:right-3 top-3 md:top-1/2 md:-translate-y-1/2 text-gray-300 text-lg" />
      </div>
    </div>


        </div>
      </Container>
    </div>
  )
}

export default Footer