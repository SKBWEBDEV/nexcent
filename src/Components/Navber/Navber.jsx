import Container from "../Layouts/Container"
import Logo from "../../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";


const Navber = () => {
  const [show,setShow] = useState (false)

  return (
    <div className="bg-[#F5F7FA] py-[22px] font-inter">
      <Container>
        <div className="hidden md:flex md:items-center md:justify-between">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="md:block hidden">
            <ul className="md:flex md:gap-[50px]">
              <li>Home</li>
              <li>Service</li>
              <li>Feature</li>
              <li>Product</li>
              <li>Testimonial</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="flex items-center gap-[14px]">
            <button className="border border-transparent text-[#4CAF4F] text-[14px] hover:border-[#4CAF4F] py-[10px] 
            px-[20px] rounded-xl "><a href="">Login</a></button>
            <button className="bg-[#4CAF4F] py-[10px] px-[20px] rounded-xl text-white text-[14px]">
              <a href="">Sign up</a></button>
          </div>
          </div>


          








       <div className="flex  items-center justify-between  md:px-0">
          <div className="md:hidden block">
          <img src={Logo} alt="" />
        </div>

        <div className="flex md:hidden">
          {
          show ? (
            <div className="md:hidden  bg-white absolute top-[70px] left-0 z-10  py-5 px-5 w-full md:px-0 md:py-0">
              <ul className="  font-bold font-poppins ">
                 <li className="py-3 md:py-0"><a href="">Home</a></li>
                 <li className="py-3 md:py-0"><a href="">Service</a></li>
                 <li className="py-3 md:py-0"><a href="">Feature</a></li>
                 <li className="py-3 md:py-0"><a href="">Product</a></li>
                 <li className="py-3 md:py-0"><a href="">Testimonial</a></li>
                 <li className="py-3 md:py-0"><a href="">FAQ</a></li>
                 <button className="border border-transparent text-[#4CAF4F] text-[14px] hover:border-[#4CAF4F] py-[10px] px-[20px] rounded-xl "><a href="">Login</a></button>
            
            <button className="bg-[#4CAF4F] py-[10px] px-[20px] ml-5 rounded-xl text-white text-[14px]">
              <a href="">Sign up</a></button>
            </ul>
            </div>
          ): ""
        }
        </div>

        
          <div className="text-2xl md:hidden">
            {
              show ? <RxCross2 onClick={()=> setShow(!show)}/> : <FaBars onClick={()=> setShow(!show)}/>
            
            }
          </div>
        </div>
          


        
      </Container>
    </div>
  )
}

export default Navber