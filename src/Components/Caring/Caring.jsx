import Container from "../Layouts/Container"
import Cheina from "../../assets/cheina.png"
import Laptop from "../../assets/laptop.png"
import Laptopone from "../../assets/laptopOne.png"
import { FaArrowRight } from "react-icons/fa6";

const Caring = () => {
  return (
    <div className=" py-25 md:py-[100px]">
      <Container>
        <div className="font-inter text-center">
          <h2 className="text-[#4D4D4D] text-[25px] md:text-[36px] font-semibold">Caring is the new marketing</h2>
          <p className="text-[#717171] mx-auto text-[16px] font-normal w-fit md:w-[628px]">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>

        <div className="mt-[16px]  md:flex md:justify-between">


          <div className="relative">
            <img src={Cheina} alt="" />
            <div className="text-center rounded-md absolute top-[190px] ml-2.5 md:ml-[25px] px-[5px] md:px-[16px] py-[16px] bg-[#F5F7FA] shadow-lg 
            shadow-[#ABBED1]/40 w-fit">
              <p className="text-[#717171] text-[20px] w-[285px]">Creating Streamlined Safeguarding Processes with OneRen</p>
              <div className="flex gap-2 justify-center items-center text-[16px] font-normal text-[#4CAF4F]">
                <p>Readmore</p>
                <FaArrowRight />
              </div>
            </div>
          </div>


          <div className="relative mt-20 md:mt-0">
            <img src={Laptop} alt="" />
            <div className="text-center rounded-md absolute top-[190px] ml-2.5 md:ml-[25px] px-[5px] md:px-[16px] py-[16px] bg-[#F5F7FA] shadow-lg 
            shadow-[#ABBED1]/40 w-fit">
              <p className="text-[#717171] text-[20px] w-[285px]">What are your safeguarding responsibilities and how can you manage them?</p>
              <div className="flex gap-2 justify-center items-center text-[16px] font-normal text-[#4CAF4F]">
                <p>Readmore</p>
                <FaArrowRight />
              </div>
            </div>
          </div>


          <div className="relative mt-25 md:mt-0">
            <img src={Laptopone} alt="" />
            <div className="text-center rounded-md absolute top-[190px]  px-[16px] md:px-[30px] 
            py-[16px] bg-[#F5F7FA] shadow-lg  md:ml-7 ml-3
            shadow-[#ABBED1]/40 w-fit">
              <p className="text-[#717171] text-[20px] w-[250px]">Revamping the Membership Model with Triathlon Australia</p>
              <div className="flex gap-2 justify-center items-center text-[16px] font-normal text-[#4CAF4F]">
                <p>Readmore</p>
                <FaArrowRight />
              </div>
            </div>
          </div>



        </div>
      </Container>
    </div>
  )
}

export default Caring