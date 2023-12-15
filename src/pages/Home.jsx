import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import emoji from "../assets/Images/emoji.png";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import ProductList2 from "../Components/Product/ProductList2";
import { FiArrowUpRight } from "react-icons/fi";
import recipie1 from "../assets/Images/r1.jpg";
import recipie2 from "../assets/Images/r2.jpg";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ModalVideo from "react-modal-video";

// import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=4");
    const jsonData = await response.json();
    setProducts(jsonData);
  };
  console.log(products);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        videoId="phnS0X7Trgo"

        // eslint-disable-next-line no-irregular-whitespace
      />

      <div>
        <div className="flex flex-col min-h-screen ">
          <div className="z-10">
            <Header />
          </div>
          <main className="flex-1 z-0">
            <div className="flex justify-center  mt-[200px]  font-semibold flex-col items-center  ">
              <h2 className="bg-blue-100 p-1 px-2 rounded-xl  text-[#0051A0]">
                UNIQUE CURRY POWDERS
              </h2>

              <div className=" font-moichy text-[60px] mt-5 flex items-center gap-5 ">
                Wake Up Your{" "}
                <span>
                  <img src={emoji} alt="" />
                </span>
              </div>
              <div>
                <h1 className="font-moichy text-[60px] ">Taste Buds With Us</h1>
              </div>
            </div>

         

            {/* search */}

            <div className="container flex flex-col items-center mt-[150px]">
              <h2 className="heading mt-[200px] font-moichy text-[43px] leading-[54px] flex justify-center">
                <span className="text-[#0051A0] mr-2">Products</span> Within
              </h2>
              <h2 className="heading  font-moichy text-[43px] leading-[54px]">
                Your Province
              </h2>
              <div className="max-w-[450px]   p-1 mt-[40px] mx-auto bg-white border border-blue-600 rounded-xl flex items-center justify-between ">
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

            {/* list of products */}

            <section>
              <div className="container mt-10">
                <ProductList2 data={products} />
              </div>

              <div className="flex justify-center mt-[100px]">
                <button
                  onClick={() => navigate("/shop")}
                  className="hover:shadow-form rounded-md bg-gradient-to-br from-blue-400 to-blue-800 py-3 px-8 text-base font-semibold
                   text-white outline-none flex justify-center items-center gap-2 hover:scale-105 transition duration-100 ease-in-out cursor-pointer"
                >
                  More Products
                  <FiArrowUpRight className="text-[20px]" />
                </button>
              </div>
            </section>
            {/* cook with favourite recipie */}
            <section>
              <div className="container flex flex-col items-center mt-12">
                <h1 className="text-[43px] font-moichy">
                  <span className="text-[#0051A0]">Cook</span> With Favorite
                  Recipe
                </h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[100px] gap-4 ">
                  <div className="w-[500px] rounded-lg h-[330px] bg-[#0051A0] col-span-2 relative">
                    <div className="flex items-center justify-center h-full relative">
                      <div className="absolute right-[-2px] bg-gradient-to-t from-white/10 rounded-2xl h-[50.333%] w-[91.333%] rotate-[17deg]"></div>
                      <div className="mx-4 h-[330px] text-white text-left flex flex-col justify-evenly">
                        <div className="flex justify-center ">
                          <h1 className="text-[25px]">
                            Step 01 ------- Step 02 ------ Step 03
                          </h1>
                        </div>

                        <p>
                          Prepared with Currease’s Duck roast instant curry mix,
                          the tender and juicy meat with its crispy skin glazed
                          with honey can be the perfect holiday main dish for
                          occasions such as Thanksgiving, Christmas, or New
                          Year’s eve.
                          <br />
                          <br />
                          Honey can be the perfect holiday main dish for
                          occasions such as Thanksgiving, Christmas, or New
                          Year’s eve.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <img
                      src={recipie1}
                      alt=""
                      className="h-[330px] object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src={recipie2}
                      alt=""
                      className="h-[330px] object-contain rounded-lg"
                    />
                    <FaRegCirclePlay
                      onClick={() => setOpen(true)}
                      className=" text-white text-4xl absolute hover:scale-110 transform ease-in-out cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        <div className="mt-[120px]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
