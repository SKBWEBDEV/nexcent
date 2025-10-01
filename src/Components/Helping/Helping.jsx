import Container from "../Layouts/Container"
import Icon from "../../assets/icon.png"
import IconOne from "../../assets/iconOne.png"
import IconTwo from "../../assets/iconTwo.png"
import IconThree from "../../assets/iconThree.png"

const Helping = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <Container>
        <div className="py-[64px] flex justify-between items-center">

          <div>
            <h2 className="text-[36px] font-semibold w-[480px]">Helping a local </h2>
              <span className="text-[#4CAF4F] text-[36px] font-semibold w-[480px]">business reinvent itself</span>
            <p className="text-[16px] text-[#18191F]">We reached here with our hard work and dedication</p>
          </div>

       <div>
          <div className="flex gap-[50px]">
           <div className="flex items-center gap-[16px]">
            <div>
              <img src={Icon} alt="" />
            </div>
            <div>
              <h2 className="text-[28px] font-bold text-[#4D4D4D]">2,245,341</h2>
              <p className="text-[#717171] text-[16px] font-normal font-inter">Members</p>
            </div>
          </div>

           <div className="flex items-center gap-[16px]">
            <div>
              <img src={IconOne} alt="" />
            </div>
            <div>
              <h2 className="text-[28px] font-bold text-[#4D4D4D]">828,867</h2>
              <p className="text-[#717171] text-[16px] font-normal font-inter">Event Bookings</p>
            </div>
          </div>
         </div>


        <div className="flex gap-[50px] mt-[40px]">
           <div className="flex items-center gap-[16px]">
            <div>
              <img src={IconTwo} alt="" />
            </div>
            <div>
              <h2 className="text-[28px] font-bold text-[#4D4D4D]">2,245,341</h2>
              <p className="text-[#717171] text-[16px] font-normal font-inter">Members</p>
            </div>
          </div>

           <div className="flex items-center gap-[16px]">
            <div>
              <img src={IconThree} alt="" />
            </div>
            <div>
              <h2 className="text-[28px] font-bold text-[#4D4D4D]">828,867</h2>
              <p className="text-[#717171] text-[16px] font-normal font-inter">Event Bookings</p>
            </div>
          </div>
         </div>
       </div>


        </div>
      </Container>
    </div>
  )
}

export default Helping