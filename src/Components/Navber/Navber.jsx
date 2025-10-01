import Container from "../Layouts/Container"
import Logo from "../../assets/logo.png"

const Navber = () => {
  return (
    <div className="bg-[#F5F7FA] py-[22px] font-inter">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <ul className="flex gap-[50px]">
              <li>Home</li>
              <li>Service</li>
              <li>Feature</li>
              <li>Product</li>
              <li>Testimonial</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="flex itmes-center gap-[14px]">
            <button className="border border-transparent text-[#4CAF4F] text-[14px] hover:border-[#4CAF4F] py-[10px] 
            px-[20px] rounded-xl "><a href="">Login</a></button>
            <button className="bg-[#4CAF4F] py-[10px] px-[20px] rounded-xl text-white text-[14px]"><a href="">Sign up</a></button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navber