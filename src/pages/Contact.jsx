/* eslint-disable react/no-unknown-property */
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { FiArrowUpRight } from "react-icons/fi";

function Contact() {
  return (
    <div>
      <div className="flex flex-col min-h-screen mt-10">
        <div className="z-10">
          <Header />
        </div>
        <main className=" container flex-1 mt-[150px] z-0">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-[340px] h-[150px] bg-blue-200 rounded-md mb-4 flex flex-col justify-evenly relative items-center justify-center">
              <p className="font-semibold ">Cantari Corp India</p>
              <div className="flex justify-center items-center flex-col">
                <p className="font-bold ">+91 95232 12121</p>
                <p className="font-bold">supportind@gmail.com</p>
              </div>
            </div>
            <div className="w-[340px] h-[150px] bg-blue-200 rounded-md mb-4 flex flex-col justify-evenly relative items-center">
              <p className="font-semibold ">Cantari Corp India</p>
              <div className="flex justify-center items-center flex-col">
                <p className="font-bold ">+91 95232 12121</p>
                <p className="font-bold">supportind@gmail.com</p>
              </div>
            </div>
            <div className="w-[340px] h-[150px] bg-blue-200 rounded-md mb-4 flex flex-col justify-evenly relative items-center">
              <p className="font-semibold ">Cantari Corp India</p>
              <div className="flex justify-center items-center flex-col">
                <p className="font-bold ">+91 95232 12121</p>
                <p className="font-bold">supportind@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center mt-12">
              <h1 className="font-moichy text-[30px]">Send us a message</h1>
            </div>
            <div className="flex items-center justify-center p-12">
              <div className="mx-auto w-full max-w-[550px]">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="number"
                      name="email"
                      id="email"
                      placeholder="Phone Number"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="email"
                      name="subject"
                      id="subject"
                      placeholder="Email"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <textarea
                      rows="4"
                      name="message"
                      id="message"
                      placeholder="Type your message"
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button className="hover:shadow-form rounded-md bg-gradient-to-br from-blue-400 to-blue-800 py-3 px-8 text-base font-semibold text-white outline-none flex justify-center items-center gap-2 ">
                      Send Message
                      <FiArrowUpRight className="text-[20px]"/>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="mt-[150px]">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
