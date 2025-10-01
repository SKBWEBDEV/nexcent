import Container from "../Layouts/Container"
import People from "../../assets/people.png"
import Bilding from "../../assets/bilding.png"
import Group from "../../assets/group.png"
const Manage = () => {
  return (
    <div className="font-inter py-[40px]">
      <Container>
        <div className="text-center">
          <h2 className="text-[#4D4D4D] mx-auto w-[542px] text-[36px] font-semibold text-center">
            Manage your entire community in a single system</h2>
          <p className="text-[#717171] font-normal text-[16px] mt-[8px]">Who is Nextcent suitable for?</p>
        </div>


        <div className="flex justify-between mt-16">
          <div className="px-[24px] py-[24px] text-center border-[#ABBED1] shadow-lg shadow-[#ABBED1]/20">
            <img className="m-auto" src={People} alt="" />
            <h3 className="text-[#4D4D4D] text-[28px] font-bold w-[267px]">Membership Organisations</h3>
            <p className="text-[#717171] text-[14px] font-normal w-[251px]">
              Our membership management software provides full automation of membership renewals and payments</p>
          </div>

          <div className="px-[24px] py-[24px] text-center border-[#ABBED1] shadow-lg shadow-[#ABBED1]/20">
            <img className="m-auto" src={Bilding} alt="" />
            <h3 className="text-[#4D4D4D] text-[28px] font-bold w-[267px]">National Associations</h3>
            <p className="text-[#717171] text-[14px] font-normal w-[240px]">
              Our membership management software provides full automation of membership renewals and payments</p>
          </div>

          <div className="px-[24px] py-[24px] text-center border-[#ABBED1] shadow-lg shadow-[#ABBED1]/20">
            <img className="m-auto" src={Group} alt="" />
            <h3 className="text-[#4D4D4D] text-[28px] font-bold w-[231px]">Clubs And Groups</h3>
            <p className="text-[#717171] text-[14px] font-normal w-[251px]">
              Our membership management software provides full automation of membership renewals and payments</p>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Manage