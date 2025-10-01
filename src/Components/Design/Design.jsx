
import Container from '../Layouts/Container'
import Pana from "../../assets/pana.png"

const Design = () => {
  return (
    <div className='py-[48px]'>
      <Container>
        <div className='font-inter flex items-center justify-between'>
          <div>
            <img src={Pana} alt="" />
          </div>
          <div>
            <h2 className='text-[#4D4D4D] text-[36px] font-semibold w-[601px]'>
              How to design your site footer like we did</h2>
            <p className='text-[#717171] text-[14px] font-normal w-[601px]'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button className="bg-[#4CAF4F] mt-[32px] py-[10px] px-[20px] rounded-md text-white text-[14px]"><a href="">Learn More</a></button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Design