/* eslint-disable react/prop-types */
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function ProductCard({ data }) {

  const navigate = useNavigate();
  return (
    
    <div className="grid grid-cols-1 gap-[60px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {data.map((product, index) => (
        <div key={index}>
          <div className="p-3 m-8 transition-transform transform rounded-2xl shadow-lg lg:p-5 hover:scale-105 sm:m-4 lg:m-0 ">
            <div className=" p-10">
              <img
                src={product.image}
                alt=""
                className=" rounded-md h-[200px] w-[200px] object-contain "
              />
            </div>
            <h2
              className="text-[18px] h-[80px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5"
              title={product.title}
            >
              {product.title.length > 30
                ? `${product.title.slice(0, 30)}...`
                : product.title}
            </h2>

            <div className="flex items-center justify-between gap-8 mt-2 lg:mt-4 ">
              <span className="bg-[#CCF0F3] text-irisBlueColor rounded-2xl py-1 px-2 lg:py-2  lg:px-6 text-[12px] leading-4 lg:text-[12px] lg:leading-7 font-semibold ">
              {`₹${product.price}`}
              </span>
              <div className="bg-blue-200 rounded-full p-2 mr-4 mb-3 hover:scale-110 transition ease-in-out hover:bg-green-300">
                <GoArrowUpRight
                  onClick={() => navigate(`/productDetails/${product.id}`)}
                  className="text-[30px]  "
                />
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default ProductCard;
