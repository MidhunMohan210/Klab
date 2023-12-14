import Product from "../../assets/Images/product.png";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function ProductCard() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 gap-[60px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {/* item start */}
      <div>
        <div className="p-3 m-8 transition-transform transform rounded-2xl shadow-lg lg:p-5 hover:scale-105 sm:m-4 lg:m-0 ">
          <div className="bg-gray-400 p-10">
            <img src={Product} alt="" className="w-full rounded-md " />
          </div>
          <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
            Duck Roast Instant Curry Mix
          </h2>

          <div className="flex items-center justify-between gap-8 mt-2 lg:mt-4 ">
            <span className="bg-[#CCF0F3] text-irisBlueColor rounded-2xl py-1 px-2 lg:py-2  lg:px-6 text-[12px] leading-4 lg:text-[12px] lg:leading-7 font-semibold ">
              150g
            </span>
            <div className="bg-blue-200 rounded-full p-2 mr-4 mb-3 hover:scale-110 transition ease-in-out hover:bg-green-300">
              <GoArrowUpRight
                onClick={() => navigate("/productDetails")}
                className="text-[30px]  "
              />
            </div>
          </div>
        </div>
      </div>
      {/* item end */}
      {/* item start */}
      <div>
        <div className="p-3 m-8 transition-transform transform rounded-2xl shadow-lg lg:p-5 hover:scale-105 sm:m-4 lg:m-0 ">
          <div className="bg-gray-400 p-10">
            <img src={Product} alt="" className="w-full rounded-md " />
          </div>
          <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
            Duck Roast Instant Curry Mix
          </h2>

          <div className="flex items-center justify-between gap-8 mt-2 lg:mt-4 ">
            <span className="bg-[#CCF0F3] text-irisBlueColor rounded-2xl py-1 px-2 lg:py-2  lg:px-6 text-[12px] leading-4 lg:text-[12px] lg:leading-7 font-semibold ">
              150g
            </span>
            <div className="bg-blue-200 rounded-full p-2 mr-4 mb-3 hover:scale-110 transition ease-in-out hover:bg-green-300">
              <GoArrowUpRight
                onClick={() => navigate("/productDetails")}
                className="text-[30px]  "
              />
            </div>
          </div>
        </div>
      </div>
      {/* item end */}
      {/* item start */}
      <div>
        <div className="p-3 m-8 transition-transform transform rounded-2xl shadow-lg lg:p-5 hover:scale-105 sm:m-4 lg:m-0 ">
          <div className="bg-gray-400 p-10">
            <img src={Product} alt="" className="w-full rounded-md " />
          </div>
          <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
            Duck Roast Instant Curry Mix
          </h2>

          <div className="flex items-center justify-between gap-8 mt-2 lg:mt-4 ">
            <span className="bg-[#CCF0F3] text-irisBlueColor rounded-2xl py-1 px-2 lg:py-2  lg:px-6 text-[12px] leading-4 lg:text-[12px] lg:leading-7 font-semibold ">
              150g
            </span>
            <div className="bg-blue-200 rounded-full p-2 mr-4 mb-3 hover:scale-110 transition ease-in-out hover:bg-green-300">
              <GoArrowUpRight
                onClick={() => navigate("/productDetails")}
                className="text-[30px]  "
              />
            </div>
          </div>
        </div>
      </div>
      {/* item end */}
      {/* item start */}
      <div>
        <div className="p-3 m-8 transition-transform transform rounded-2xl shadow-lg lg:p-5 hover:scale-105 sm:m-4 lg:m-0 ">
          <div className="bg-gray-400 p-10">
            <img src={Product} alt="" className="w-full rounded-md " />
          </div>
          <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
            Duck Roast Instant Curry Mix
          </h2>

          <div className="flex items-center justify-between gap-8 mt-2 lg:mt-4 ">
            <span className="bg-[#CCF0F3] text-irisBlueColor rounded-2xl py-1 px-2 lg:py-2  lg:px-6 text-[12px] leading-4 lg:text-[12px] lg:leading-7 font-semibold ">
              150g
            </span>
            <div className="bg-blue-200 rounded-full p-2 mr-4 mb-3 hover:scale-110 transition ease-in-out hover:bg-green-300">
              <GoArrowUpRight
                onClick={() => navigate("/productDetails")}
                className="text-[30px]  "
              />
            </div>
          </div>
        </div>
      </div>
      {/* item end */}
      {/* item start */}
      <div>
        <div className="p-3 m-8 transition-transform transform rounded-2xl shadow-lg lg:p-5 hover:scale-105 sm:m-4 lg:m-0 ">
          <div className="bg-gray-400 p-10">
            <img src={Product} alt="" className="w-full rounded-md " />
          </div>
          <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
            Duck Roast Instant Curry Mix
          </h2>

          <div className="flex items-center justify-between gap-8 mt-2 lg:mt-4 ">
            <span className="bg-[#CCF0F3] text-irisBlueColor rounded-2xl py-1 px-2 lg:py-2  lg:px-6 text-[12px] leading-4 lg:text-[12px] lg:leading-7 font-semibold ">
              150g
            </span>
            <div className="bg-blue-200 rounded-full p-2 mr-4 mb-3 hover:scale-110 transition ease-in-out hover:bg-green-300">
              <GoArrowUpRight
                onClick={() => navigate("/productDetails")}
                className="text-[30px]  "
              />
            </div>
          </div>
        </div>
      </div>
      {/* item end */}
      {/* item start */}
      <div>
        <div className="p-3 m-8 transition-transform transform rounded-2xl shadow-lg lg:p-5 hover:scale-105 sm:m-4 lg:m-0 ">
          <div className="bg-gray-400 p-10">
            <img src={Product} alt="" className="w-full rounded-md " />
          </div>
          <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
            Duck Roast Instant Curry Mix
          </h2>

          <div className="flex items-center justify-between gap-8 mt-2 lg:mt-4 ">
            <span className="bg-[#CCF0F3] text-irisBlueColor rounded-2xl py-1 px-2 lg:py-2  lg:px-6 text-[12px] leading-4 lg:text-[12px] lg:leading-7 font-semibold ">
              150g
            </span>
            <div className="bg-blue-200 rounded-full p-2 mr-4 mb-3 hover:scale-110 transition ease-in-out hover:bg-green-300">
              <GoArrowUpRight
                onClick={() => navigate("/productDetails")}
                className="text-[30px]  "
              />
            </div>
          </div>
        </div>
      </div>
      {/* item end */}
    </div>
  );
}

export default ProductCard;
