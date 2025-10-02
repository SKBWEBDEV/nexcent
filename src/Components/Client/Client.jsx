import Container from "../Layouts/Container"
import One from "../../assets/one.png"
import Two from "../../assets/two.png"
import Three from "../../assets/three.png"
import Four from "../../assets/four.png"
import Five from "../../assets/five.png"
import Six from "../../assets/six.png"

const Client = () => {
  return (
    <div className="py-[40px] font-inter">
      <Container>
        <div>
          <div className="text-center">
            <h2 className="md:text-[36px] text-[25px] text-[#4D4D4D] font-semibold">Our Clients</h2>
            <p className="text-[#717171]">We have been working with some Fortune 500+ clients</p>
          </div>

          <div className="flex justify-between mt-[40px]">
            <img src={One} alt="" />
            <img src={Two} alt="" />
            <img src={Three} alt="" />
            <img src={Four} alt="" />
            <img src={Five} alt="" />
            <img src={Six} alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Client