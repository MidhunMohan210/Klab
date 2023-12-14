/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { useParams } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Swal from "sweetalert2";

function ProductDetails() {
  const [details, setDetails] = useState({});
  const [count, setCount] = useState(0);

  const { id } = useParams();
  const fetchDetails = async () => {
    const responce = await fetch(`https://fakestoreapi.com/products/${id}`);
    const jsonData = await responce.json();
    setDetails(jsonData);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const addToCart=()=>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your product is added to cart",
      showConfirmButton: "true",
      confirmButtonText: "Go to cart",
      
    });
  }

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="z-10">
          <Header />
        </div>
        <main className="flex-1 z-0 mt-[100px]">
          <div>
            <section className="overflow-hidden bg-white py-11 font-poppins">
              <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4 md:w-1/2 ">
                    <div className="sticky top-0 z-50 overflow-hidden ">
                      <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                        <img
                          src={details.image}
                          alt=""
                          className="w-full lg:h-full object-cover "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2 ">
                    <div className="lg:pl-20">
                      <div className="mb-8  ">
                        <span className="text-lg font-medium  bg-blue-200 p-1 rounded-md ">
                          New
                        </span>
                        <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold  md:text-4xl">
                          {details.title}
                        </h2>
                        <div className="flex items-center mb-6">
                          <p className="text-[15px] ">Description:</p>
                        </div>
                        <p className="max-w-md mb-8 text-gray-700">
                          {details.description}
                        </p>
                        <p className="inline-block mb-8 text-4xl font-bold text-gray-700 ">
                          <span> {`₹${details.price}`}</span>
                          <span className="text-base font-normal text-gray-500 line-through">
                            100
                          </span>
                        </p>
                      </div>
                      <div className="flex-wrap hidden md:flex ">
                        <div className="w-1/2 p-2 sm:w-1/4">
                          <a
                            href="#"
                            className="block border border-blue-300 dark:border-transparent hover:border-blue-300"
                          >
                            <img
                              src={details.image}
                              alt=""
                              className="object-contain w-full lg:h-20"
                            />
                          </a>
                        </div>
                        <div className="w-1/2 p-2 sm:w-1/4">
                          <a
                            href="#"
                            className="block border border-transparent  hover:border-blue-300"
                          >
                            <img
                              src={details.image}
                              alt=""
                              className="object-contain w-full lg:h-20"
                            />
                          </a>
                        </div>
                        <div className="w-1/2 p-2 sm:w-1/4">
                          <a
                            href="#"
                            className="block border border-transparent d hover:border-blue-300"
                          >
                            <img
                              src={details.image}
                              alt=""
                              className="object-contain w-full lg:h-20"
                            />
                          </a>
                        </div>
                        <div className="w-1/2 p-2 sm:w-1/4">
                          <a
                            href="#"
                            className="block border border-transparent  hover:border-blue-300"
                          >
                            <img
                              src={details.image}
                              alt=""
                              className="object-contain w-full lg:h-20"
                            />
                          </a>
                        </div>
                      </div>

                      <div className="w-32 mb-8 ">
                        <label
                          for=""
                          className="w-full text-xl font-semibold text-gray-700"
                        >
                          Quantity
                        </label>
                        <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                          <button
                            onClick={() => setCount(count - 1)}
                            className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
                          >
                            <span className="m-auto text-2xl font-thin">-</span>
                          </button>
                          <input
                            type="number"
                            className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none  focus:outline-none text-md hover:text-black"
                            placeholder={count}
                          />
                          <button
                            onClick={() => setCount(count + 1)}
                            className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
                          >
                            <span className="m-auto text-2xl font-thin">+</span>
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center -mx-4 ">
                        <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                          <button 
                          onClick={()=>addToCart()}
                          className="hover:shadow-form rounded-md bg-gradient-to-br from-blue-400 to-blue-800 py-3 px-8 text-base font-semibold text-white outline-none flex justify-center items-center gap-2 ">
                            Add to cart
                            <FiArrowUpRight className="text-[20px]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default ProductDetails;
