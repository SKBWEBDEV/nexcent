import Container from "../Layouts/Container"
import Man from "../../assets/man.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Banner = () => {

   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-[#F5F7FA] py-[96px] font-inter">
      <Container>
        


        <Slider {...settings}>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-[25px] md:text-[64px]  md:w-[660px] text-[#4D4D4D]">
              Lessons and insights <span className="text-[#4CAF4F]  text-[25px] md:text-[64px]  md:w-[660px]">from 8 years</span></h1>
              
              <p className="text-[#717171] font-normal w-[200px] md:w-full text-[16px] mt-[16px]">Where to grow your business as a photographer: site or social media?</p>
              <button className="bg-[#4CAF4F] mt-[32px] py-[10px] px-[20px] rounded-xl text-white text-[14px]"><a href="">Register</a></button>

          </div>
          <div>
            <img src={Man} alt="" />
          </div>
        </div>
      </div>



      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-[25px] md:text-[64px]  md:w-[660px] text-[#4D4D4D]">
              Lessons and insights <span className="text-[#4CAF4F]  text-[25px] md:text-[64px]  md:w-[660px]">from 8 years</span></h1>
              
              <p className="text-[#717171] font-normal w-[200px] md:w-full text-[16px] mt-[16px]">Where to grow your business as a photographer: site or social media?</p>
              <button className="bg-[#4CAF4F] mt-[32px] py-[10px] px-[20px] rounded-xl text-white text-[14px]"><a href="">Register</a></button>

          </div>
          <div>
            <img src={Man} alt="" />
          </div>
        </div>
      </div>




      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-[25px] md:text-[64px]  md:w-[660px] text-[#4D4D4D]">
              Lessons and insights <span className="text-[#4CAF4F]  text-[25px] md:text-[64px]  md:w-[660px]">from 8 years</span></h1>
              
              <p className="text-[#717171] font-normal w-[200px] md:w-full text-[16px] mt-[16px]">Where to grow your business as a photographer: site or social media?</p>
              <button className="bg-[#4CAF4F] mt-[32px] py-[5px] px-[10px] md:py-[10px]  md:px-[20px] rounded-xl text-white text-[14px]"><a href="">Register</a></button>

          </div>
          <div>
            <img src={Man} alt="" />
          </div>
        </div>
      </div>
      
    </Slider>










      </Container>
    </div>
  )
}

export default Banner