import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Skill from "./skill";
const About = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-360 mx-auto flex flex-wrap items-center py-10 md:py-20">
          <div className=" w-full md:w-3/4 pl-2 pr-5 md:pr-10">
            <p className="text-[#6249d4] uppercase text-3xl md:text-6xl font-semibold">
              Who am I?
            </p>
            <p className="py-5 font-semibold text-1xl leading-tight md:text-2xl md:leading-normal">
              I&apos;m Reji kumar, Full Stack Developer crafting modern web
              experiences.
            </p>
            <p>
              I&apos;m Reji Kumar, a Full Stack Developer with experience in
              building dynamic, user-friendly, and scalable web applications. I
              have worked with technologies including WordPress, PHP, React,
              Next.js, Node.js, Shopify, BigCommerce, and MySQL, delivering
              solutions that balance performance, functionality, and great user
              experience.
            </p>
            <p>
              I enjoy turning ideas into practical digital products, whether
              it&apos;s developing custom websites, eCommerce platforms, or web
              applications. My approach focuses on writing clean, maintainable
              code and creating responsive interfaces that work seamlessly
              across devices. I am passionate about continuous learning and
              enjoy exploring new technologies and best practices to improve the
              quality and efficiency of my work. My goal is to build reliable
              solutions that help businesses grow and provide value to their
              users.
            </p>
            <div className="flex gap-5 py-5">
              <span className="text-black uppercase text-1xl font-semibold md:pl-3 sm:pl-0">
                let&apos;s connect
              </span>
              <div className="flex gap-2">
                <a href="https://github.com/Rejikumar2021/" target="_blank">
                  <FaGithub className="text-2xl text-black hover:text-[#6249d4] cursor-pointer" />
                </a>

                <a
                  href="https://www.linkedin.com/in/reji-kumar-922027174/"
                  target="_blank"
                >
                  <FaLinkedin className="text-2xl text-black hover:text-[#6249d4] cursor-pointer" />
                </a>
                <a
                  href="https://www.instagram.com/rejikumar_2021/"
                  target="_blank"
                >
                  <FaInstagram className="text-2xl text-black hover:text-[#6249d4] cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-2.5 md:w-1/4 md:px-0">
            <Skill type="Core PHP" percentage={95} />
            <Skill type="JavaScript" percentage={90} />
            <Skill type="HTML,CSS & SCSS" percentage={92} />
            <Skill type="Tailwind" percentage={75} />
            <Skill type="WordPress" percentage={90} />
            <Skill type="Plugin Development" percentage={95} />
            <Skill type="BigCommerce Development" percentage={75} />
            <Skill type="Shopify Development" percentage={65} />
            <Skill type="React & NextJS" percentage={40} />
            <Skill type="NodeJS" percentage={50} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
