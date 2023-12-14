import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { IoIosArrowDown } from "react-icons/io";
import ProductList from "../Components/Product/ProductList";
import { FaArrowDown } from "react-icons/fa6";
import Carosal from "../Components/Carosal/Carosal";

function Shop() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hero__section z-10">
          <Header />
          <section>
            <div className="container text-center  ">
              <h2 className="heading mt-[200px] font-moichy text-[43px] leading-[54px]">
                <span className="text-[#0051A0]">Products</span> Within
                <br /> Your Province
              </h2>
              <div className="max-w-[450px]   p-2 mt-[40px] mx-auto bg-white border border-blue-600 rounded-xl flex items-center justify-between ">
                <input
                  type="search"
                  className="w-full h-10 py-4 pl-4 pr-2 bg-transparent cursor-pointer focus:outline-none placeholder:text-textColor "
                  placeholder="Select Province"
                />
                <button className=" bg-blue-700  mt-0 h-10 w-[67px] text-white rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-700 ">
                  <IoIosArrowDown className="text-[20px]" />
                </button>
              </div>
            </div>
          </section>
        </div>
        <main className="flex-1 z-0">
          <section>
            <div className="container">
              <div>
                <ProductList />
              </div>

              <div className="flex justify-center mt-12">
                <button className=" flex justify-center items-center gap-2 text-[20px] w-[115px] h-[50px] text-white rounded-md bg-gradient-to-br from-blue-400 to-blue-800 ">
                  More
                  <FaArrowDown />
                </button>
              </div>

              <div className="container mt-[80px]">
                <div>
                  <h2 className="font-moichy text-[35px] ">
                    You May <span className="text-[#0051A0]">Also Like</span>
                  </h2>
                </div>
                <Carosal />
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className="mt-[150px]">
        <Footer />
      </div>
    </div>
  );
}

export default Shop;
