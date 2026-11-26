import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const Intro = () => {
  return (
    <>
      <div
        className="h-[75vh] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/assets/bg-image.jpg')" }}
      >
        <div className="bg-[#412f90ed] h-full flex flex-wrap content-center justify-center">
          <div className="flex flex-wrap content-center justify-center align-middle gap-5">
            <div className="border-4 rounded-full border-[#6249d4]">
              <Image
                src={"/assets/rejikumar.png"}
                height={200}
                width={200}
                alt="profile image"
                className="border rounded-full"
              />
            </div>
            <div className="flex flex-wrap content-center gap-4">
              <p className="font-raleway text-3xl md:text-6xl w-full text-white pl-3 sm:pl-0">
                Hello I&apos;m Reji kumar
              </p>

              <div className="flex gap-5">
                <span className="text-white uppercase text-1xl font-semibold pl-3 sm:pl-0">
                  let&apos;s connect
                </span>
                <div className="flex gap-2">
                  <a href="https://github.com/Rejikumar2021/" target="_blank">
                    <FaGithub className="text-2xl text-white hover:text-blue-600 cursor-pointer" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/reji-kumar-922027174/"
                    target="_blank"
                  >
                    <FaLinkedin className="text-2xl text-white hover:text-blue-600 cursor-pointer" />
                  </a>
                  <a
                    href="https://www.instagram.com/rejikumar_2021/"
                    target="_blank"
                  >
                    <FaInstagram className="text-2xl text-white hover:text-blue-600 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
