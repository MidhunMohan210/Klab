/* eslint-disable react/no-unknown-property */
//
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Logo from "../../assets/Images/Logo.jpg";

function Footer() {
  return (
    <div className="flex justify-center  flex-col ">
      <div className=" flex justify-center mb-10">
        <img src={Logo} alt="" />
      </div>

      <div className=" flex justify-center mb-4">
        <section className="bg-[#DDE4FD] w-[1056px] h-auto rounded-lg ">
          <div className="max-w-screen-xl px-4 py-1 mx-auto  overflow-hidden sm:px-6 lg:px-8 ">
            <p className=" text-base leading-6 text-center text-gray-500 ">
              Customer Support
            </p>
            <p className="mt-8 text-base leading-6 text-center text-black font-bold">
              +1 65695 545 65
            </p>
            <p className=" text-base leading-6 text-center text-black font-bold">
              support@cantaricorp.com
            </p>
            <nav className="flex flex-wrap justify-center -mx-5 -my-2 mt-7">
              <div className="px-5 py-2  bg-[#0051a014] rounded-[30px] flex items-center justify-center mr-2 ">
                <a
                  href="#"
                  className="text-base leading-6 text-blue-800 font-semibold hover:text-gray-900"
                >
                  Home
                </a>
              </div>
              <div className="px-5 py-2 bg-[#0051a014] rounded-[30px] flex items-center justify-center mr-2 ">
                <a
                  href="#"
                  className="text-base leading-6 text-blue-800 font-semibold hover:text-gray-900"
                >
                  About Us
                </a>
              </div>
              <div className="px-5 py-2 bg-[#0051a014] rounded-[30px] flex items-center justify-center mr-2 ">
                <a
                  href="#"
                  className="text-base leading-6 text-blue-800 font-semibold hover:text-gray-900"
                >
                  Contact Us
                </a>
              </div>
              <div className="px-5 py-2 bg-[#0051a014] rounded-[30px] flex items-center justify-center  mr-2">
                <a
                  href="#"
                  className="text-base leading-6 text-blue-800 font-semibold hover:text-gray-900"
                >
                  Shop
                </a>
              </div>
            </nav>
            <div className="flex justify-center  mt-12 ">
              <div className="bg-white h-[80px] w-[1010px] rounded-md flex justify-around  ">
                <div className="flex justify-center items-center text-gray-500 ">
                  {" "}
                  <p>© 2023 Cantari Corp.</p>
                </div>
                <div className="flex justify-center items-center gap-6 text-gray-500 ">
                  <p>Terms of Service</p>
                  <p>Privacy Policy</p>
                </div>
                <div className="flex justify-center items-center gap-5 ">
                  <FaFacebook className="text-slate-500 text-[20px]" />
                  <FaLinkedin className="text-slate-500 text-[20px]" />
                  <FaTwitter className="text-slate-500 text-[20px]" />
                  <FaInstagram className="text-slate-500 text-[20px]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
