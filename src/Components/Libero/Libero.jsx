import Container from '../Layouts/Container'
import { FaArrowRight } from "react-icons/fa6";

const Libero = () => {
  return (
    <div className='bg-[#F5F7FA]'>
      <Container>
        <div className='py-[30px] text-center '>
          <h2 className='text-[#263238] mx-auto font-semibold font-inter text-[64px] w-[887px]'>Pellentesque suscipit fringilla libero eu.</h2>
          <button className="bg-[#4CAF4F] flex items-center gap-2 mx-auto mt-[32px] py-[10px] px-[20px] rounded-md text-white text-[14px]"><a href="">Get a Demo </a> <span><FaArrowRight /></span></button>
        </div>
      </Container>
    </div>
  )
}

export default Libero