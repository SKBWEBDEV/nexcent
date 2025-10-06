
import Container from '../Layouts/Container'
import Image from "../../assets/image.png"
import Two from "../../assets/two.png"
import Three from "../../assets/three.png"
import Four from "../../assets/four.png"
import Five from "../../assets/five.png"
import Six from "../../assets/six.png"
import Blue from "../../assets/blue.png"

import { FaArrowRight } from "react-icons/fa6";

const Tim = () => {
  return (
    <div className='bg-[#F5F7FA]'>
      <Container>
        <div className='font-inter md:flex items-center py-[32px] md:justify-between'>
          <div>
            <img className='animate-pulse' src={Image} alt="image" />
          </div>
          <div>
            
            <p className='text-[#717171] md:text-[16px] font-normal md:w-[748px] text-center'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <h2 className='text-[#4CAF4F] text-[20px] font-semibold mt-[16px] text-center'>Tim Smith</h2>
            <p className='text-[#89939E] text-[16px] font-normal text-center'>British Dragon Boat Racing Association</p>

            <div className='md:flex md:items-center md:justify-between mt-[32px]'>
              <div className='flex md:gap-[41px] gap-1'>
                <img src={Blue} alt="" />
                <img src={Two} alt="" />
                <img src={Three} alt="" />
                <img src={Four} alt="" />
                <img src={Five} alt="" />
                <img src={Six} alt="" />
              </div>
              <div className='flex items-center gap-2 mt-3 text-[#4CAF4F]'>
                <p><a href="">Meet all customers</a></p>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Tim