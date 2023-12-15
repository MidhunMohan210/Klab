import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import img1 from "../assets/Images/Mask group.png";
import videoImg from "../assets/Images/video.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ModalVideo from "react-modal-video";
import { useState } from "react";

function About() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
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
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <div className="container mt-[170px]">
              <div className="grid sm:grid-cols-1 md:grid-cols-2">
                <div>
                  <img src={img1} alt="" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold font-moichy text-gray-800 leading-[3.25rem] ">
                    A Novel Product{" "}
                    <span className="text-[#0051A0] ">
                      <br />
                      In The Food Market.
                    </span>
                  </h1>
                  <p className=" mt-5 max-w-lg leading-7">
                    As a retorted curry base gravy produced particularly by
                    keeping the millennials in mind, “Currease”, unlike other
                    instant alternatives to home-cooked food, ensure to deliver
                    locally produced fresh ingredients and easy-to-follow
                    recipes so that anyone can prepare a quality home-cooked
                    dish that does not compromise on time and well-being.
                  </p>

                  <div className="flex justify-start mt-4">
                    <button
                      onClick={() => navigate("/shop")}
                      className="hover:shadow-form rounded-md bg-gradient-to-br from-blue-400 to-blue-800 py-3 px-8 text-base font-semibold text-white outline-none flex justify-center items-center gap-2 "
                    >
                      Products
                      <FiArrowUpRight className="text-[20px]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* second section */}

              <div className="container mt-[230px]">
                {/* <button className="btn-primary" onClick={() => setOpen(true)}>
                VIEW DEMO
              </button> */}
                <div className="flex justify-center items-center">
                  <img src={videoImg} alt="" className="rounded-2xl" />
                  <FaRegCirclePlay
                    onClick={() => setOpen(true)}
                    className="text-white text-4xl absolute hover:scale-110 transform ease-in-out cursor-pointer"
                  />
                </div>
                <div className=" text-center flex justify-center mt-8 leading-7">
                  <p className="max-w-2xl">
                    All Currease products are manufactured using “retort”
                    technology. Retorting is one of the major techniques used
                    for the thermal processing of food products that are packed
                    either in semi-rigid flexible laminates or in metal or alloy
                    cans. The technology provides the advantage of processing
                    and packing the food together; which makes it more
                    commercially stable with safe and effective shelf life.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>

        <div className="mt-[150px]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
