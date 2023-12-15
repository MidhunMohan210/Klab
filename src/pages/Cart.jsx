/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import emptyCart from "../assets/Images/emptyCart.jpg";
import { removeFromCart } from "../Slice/cartSlice";

export const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const [count, setCount] = useState(cartProducts.map(() => 1));

  const dispatch=useDispatch();
  console.log(cartProducts);
  let subtotal = 0;

  const handleCountChange = (index, newCount) => {
    const updatedCounts = [...count];
    updatedCounts[index] = newCount;
    setCount(updatedCounts);
  };

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="z-10">
          <Header />
        </div>
        <main className="flex-1 z-0 px-12 mt-[100px]">
          {cartProducts.length !== 0 ? (
            <section class="items-center py-24 font-poppins ">
              <div class="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 lg:px-6">
                <h2 class="mb-10 text-4xl font-bold text-center">Your Cart</h2>
                <div class="px-6 mb-10 lg:px-0">
                  {cartProducts.map((item, index) => {
                    const itemTotal = item.price * count[index];
                    subtotal = subtotal + itemTotal;

                    return (
                      <div
                        key={index}
                        class="relative flex flex-wrap items-center pb-8 mb-8 -mx-4 border-b border-gray-200  xl:justify-between border-opacity-40"
                      >
                        <div class="w-full mb-4 md:mb-0 h-96 md:h-44 md:w-56">
                          <img
                            src={item.image}
                            alt=""
                            class="w-full h-full object-contain"
                          />
                        </div>
                        <div class="w-full px-4 mb-6 md:w-96 xl:mb-0">
                          <a
                            class="block mb-5 text-xl font-medium hover:underline "
                            href="#"
                          >
                            {item.title}
                          </a>
                        </div>
                        <div class="w-full px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
                          <div class="flex items-center">
                            <h2 class="mr-4 font-medium ">Qty:</h2>
                            <div class="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-300 rounded-md  ">
                              <button
                                onClick={() =>
                                  count[index] > 0 &&
                                  handleCountChange(index, count[index] - 1)
                                }
                                class="py-2 pr-2 border-r border-gray-300 hover:text-gray-700"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-dash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                                </svg>
                              </button>
                              <input
                                type="number"
                                class="w-12 px-2 py-4 text-center border-0 rounded-md bg-gray-50 "
                                placeholder={count[index]}
                              />
                              <button
                                onClick={() =>
                                  count[index] > 0 &&
                                  handleCountChange(index, count[index] + 1)
                                }
                                class="py-2 pl-2 border-l border-gray-300 dark:border-gray-600 hover:text-gray-700 "
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-plus"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="w-full px-4 xl:w-auto">
                          <span class="text-xl font-medium text-blue-500 dark:text-blue-400 ">
                            <span class="text-sm">₹</span>
                            <span className="ml-1">{item.price * count[index]}</span>
                          </span>
                        </div>
                        <button 
                        onClick={()=>dispatch(removeFromCart({id:item.id}))}
                        class="absolute top-0 right-0 text-gray-400 lg:mt-6 lg:-mr-4 hover:text-gray-600  dark:hover:text-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="w-6 h-6 bi bi-x-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                          </svg>
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div class="flex flex-wrap justify-end">
                  <div class="w-full lg:w-1/3">
                    <div>
                      <h2 class="mb-6 text-3xl font-bold ">Cart totals</h2>
                      <div class="flex items-center justify-between px-10 py-4 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border  rounded-xl">
                        <span>Subtotal</span>
                        <span class="flex items-center text-xl">
                          <span class="mr-2 text-base">₹</span>
                          <span>{subtotal.toFixed(2)}</span>
                        </span>
                      </div>
                      <div class="flex items-center justify-between px-10 py-4 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border  rounded-xl">
                        <span>Shipping</span>
                        <span class="flex items-center text-xl">
                          <span class="mr-2 text-base">₹</span>
                          <span>10.00</span>
                        </span>
                      </div>
                      <div class="flex items-center justify-between px-10 py-4 mb-6 font-medium leading-8 bg-gray-100 border  rounded-xl">
                        <span>Total</span>
                        <span class="flex items-center text-xl text-blue-500 dark:text-blue-400">
                          <span class="mr-2 text-base">₹</span>
                          <span>{(subtotal + 10).toFixed(0)}</span>
                        </span>
                      </div>
                      <a
                        class="inline-block w-full px-6 py-4 text-lg font-medium leading-6 tracking-tighter text-center text-white bg-blue-500 lg:w-auto hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                        href="#"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <>
              <h2 class="mb-10 text-4xl font-bold text-center mt-12">
                Oops! Your Cart is empty
              </h2>
              <div className="flex justify-center">
                <img src={emptyCart} alt="" className="h-[300px] w-[300px]" />
              </div>
            </>
          )}
        </main>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};
