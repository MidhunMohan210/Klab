/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { GoArrowUpRight } from "react-icons/go";


function Carosal({data}) {
  console.log(data);

  return (
    <div className="mt-[30px] lg:mt-[55px]  ">
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
       {data.map((product, index) => (
         <SwiperSlide key={index}>
    
    {/* item start */}
    
    <div>
        <div className="p-3 m-8 transition-transform transform rounded-2xl shadow-lg lg:p-5 hover:scale-105 sm:m-4 lg:m-0  ">
          <div>
            <img src={product.image} alt="" className=" rounded-md  h-[200px] w-[200px]  " />
          </div>
          <h2 
          title={product.title}
          className="text-[18px] leading-[30px]  lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
          {product.title.length >30 ?`${product.title.slice(0,30)}...`:product.title}
          </h2>

          <div className="flex items-center justify-between gap-8 mt-2 lg:mt-4 ">
            <span className="bg-[#CCF0F3] text-irisBlueColor rounded-2xl py-1 px-2 lg:py-2  lg:px-6 text-[12px] leading-4 lg:text-[12px] lg:leading-7 font-semibold ">
            {`₹${product.price}`}
            </span>
            <div className="bg-blue-200 rounded-full p-2 mr-4 mb-3">
                <GoArrowUpRight className="text-[30px]" />
            </div>
          </div>
        </div>
      </div>
      {/* item end */}
  </SwiperSlide>
))}

    </Swiper>
  </div>
  )
}

export default Carosal