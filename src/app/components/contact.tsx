import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
const contact = () => {
  return (
    <>
      <div className="max-w-360 m-auto w-full py-10 md:py-20">
        <p className="text-[#6249d4] uppercase text-3xl md:text-6xl font-semibold text-center mb-5 md:mb-0 py-0 md:py-10">
          Connect me
        </p>
        <div className="flex flex-wrap md:border">
          <div className="w-full md:w-1/3 border-r py-4 md:py-7 flex flex-col flex-wrap justify-center content-center items-center cursor-pointer bg-[#6249d4] text-white md:bg-white md:text-black hover:bg-[#6249d4] hover:text-white border  mx-2 my-4  md:mx-0 md:my-0">
            <FaPhone />
            <a href="tel:+91 9656985359">
              <div className="font-sans pt-5">+91 9656985359</div>
            </a>
          </div>

          <div className="w-full md:w-1/3 border-r py-4 md:py-7 flex flex-col flex-wrap justify-center content-center items-center cursor-pointer bg-[#6249d4] text-white md:bg-white md:text-black hover:bg-[#6249d4] hover:text-white border  my-4 mx-2 md:mx-0 md:my-0">
            <FaEnvelope />
            <a href="mailto:rejikumar2021@gmail.acom">
              <div className="pt-5">rejikumar2021@gmail.com</div>
            </a>
          </div>
          <div className="w-full md:w-1/3 py-4 md:py-7 flex flex-col flex-wrap justify-center content-center items-center cursor-pointer bg-[#6249d4] text-white md:bg-white md:text-black hover:bg-[#6249d4] hover:text-white border  mx-2 my-4  md:mx-0 md:my-0">
            <FaMapMarker />

            <div className="pt-5 md:w-1/2 flex justify-center text-center">
              <a
                href="https://maps.app.goo.gl/8oTjqvYQiUjHeqsS8"
                target="_blank"
              >
                Abhinavam, Pudiyamcode Road, Parackode, Chempazhanthy PO{" "}
                <span className="font-sans">695587</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
