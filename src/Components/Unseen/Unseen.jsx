import Container from "../Layouts/Container"
import Frame from "../../assets/frame.png"

const Unseen = () => {
  return (
    <div className="font-inter py-[42px]">
      <Container>
        <div className="md:flex md:justify-between md:items-center">
          <div>
            <img src={Frame} alt="" />
          </div>
          <div>
            <h2 className="text-[#4D4D4D] md:w-[601px] font-semibold md:text-[36px] text-[25px] text-center">The unseen of spending three years at Pixelgrade</h2>
            <p className="text-[#717171] md:w-[601px] font-normal text-center text-[14px] mt-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className="bg-[#4CAF4F] mt-[32px] m-auto py-[5px] md:py-[10px] px-[10px] md:px-[20px] rounded-md text-white 
            text-[14px]"><a href="">Learn More</a></button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Unseen