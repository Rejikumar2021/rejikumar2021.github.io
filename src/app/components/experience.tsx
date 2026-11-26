import Image from "next/image";
const experience = () => {
  return (
    <>
      <div className="max-w-360 m-auto w-full py:10">
        <p className="text-[#6249d4] uppercase text-3xl md:text-6xl font-semibold text-center mb-10 md:mb-0 md:py-10">
          My work experience
        </p>

        <div className="w-full flex flex-wrap">
          <div className=" w-full md:w-1/2 border-r-0 md:border-r-[3px] border-[#6249d4]">
            <div className="flex flex-wrap content-center items-center">
              <a href="#" target="_blank">
                <Image
                  src={"/assets/dummy-logo.jpg"}
                  height={50}
                  width={78}
                  alt="project Consultant"
                  className="ml-10 mb-2 md:ml-0 md:mb-0"
                />
              </a>

              <hr className="w-10/12 border-t-2 text-[#6249d4] mx-3 hidden md:block" />
              <div className="w-3 h-3 bg-blue-700 rounded-full absolute ml-178.25 -mt-12 hidden md:block"></div>
            </div>
          </div>
          <div className=" w-full md:w-1/2 pl-9 md:pl-15">
            <p className="text-[20px] text-gray-700 font-semibold">
              From <span className="font-sans">2025</span> Sep
            </p>
            <p className="text-[30px] font-semibold text-[#6249d4] leading-8 py-2">
              Independent Web Developer & Technology Consultant
            </p>
            <ul className="list-disc marker:text-[#6249d4] text-black mb-10 md:mb-0">
              <li>
                Delivering custom web development solutions for clients across
                various industries.
              </li>
              <li>
                Developing custom WordPress websites, themes, plugins and
                WooCommerce functionality.
              </li>
              <li>
                Building web applications, backend systems and REST APIs using
                PHP and Laravel.
              </li>
              <li>
                Providing technical consulting, website maintenance, performance
                optimization and troubleshooting.
              </li>
              <li>
                Managing projects independently, from requirement analysis and
                development to deployment and ongoing support.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-wrap">
          <div className=" w-full md:w-1/2 border-r-0 md:border-r-[3px] border-[#6249d4]">
            <div className="flex flex-wrap content-center items-center">
              <a href="https://www.adroitminds.com/" target="_blank">
                <Image
                  src={"/assets/am-logo.png"}
                  height={100}
                  width={200}
                  alt="adroit minds logo"
                  className="ml-10 mb-2 md:ml-0 md:mb-0"
                />
              </a>

              <hr className="w-8/12 border-t-2 text-[#6249d4] mx-3 hidden md:block" />
              <div className="w-3 h-3 bg-blue-700 rounded-full absolute ml-178.25 -mt-12 hidden md:block"></div>
            </div>
          </div>
          <div className=" w-full md:w-1/2 pl-9 md:pl-15">
            <p className="text-[20px] text-gray-700 font-semibold">
              Aug <span className="font-sans">2017</span> - Aug &nbsp;
              <span className="font-sans">2025</span>
            </p>
            <p className="text-[30px] font-semibold text-[#6249d4] py-2">
              Development Lead
            </p>
            <ul className="list-disc marker:text-[#6249d4] text-black mb-10 md:mb-0">
              <li>
                Developed and maintained scalable WordPress, Shopify, and
                BigCommerce solutions for international clients across multiple
                industries.
              </li>
              <li>
                Built custom WordPress themes, plugins, reusable frontend
                components, and responsive user interfaces tailored to business
                requirements.
              </li>
              <li>
                Worked extensively with Divi,Elementor and wpbakery page
                builders to create scalable, maintainable, and user-friendly
                page architectures.
              </li>
              <li>
                Converted Figma and PSD designs into responsive, pixel-perfect
                implementations across WordPress and custom web applications.
              </li>
              <li>
                Developed SEO-friendly websites, landing pages, and
                conversion-focused frontend experiences to improve user
                engagement and business outcomes.
              </li>
              <li>
                Implemented Core Web Vitals optimization, caching strategies,
                CDN integration, image optimization, and frontend performance
                enhancements.
              </li>
              <li>
                Customized WooCommerce functionality and integrated payment
                gateways including Stripe, PayPal, and Razorpay.
              </li>
              <li>
                Developed custom PHP applications using CodeIgniter and Laravel,
                delivering secure, scalable, and maintainable business
                solutions.
              </li>
              <li>
                Built and integrated RESTful APIs, third-party services, and
                custom backend functionality to support complex business
                workflows.
              </li>
              <li>
                Customized Shopify and BigCommerce themes, implemented store
                enhancements, and integrated third-party applications to improve
                eCommerce functionality and user experience.
              </li>
              <li>
                Collaborated with designers, project managers, and
                cross-functional teams to deliver high-quality web solutions
                within project timelines.
              </li>
              <li>
                Troubleshot, maintained, and enhanced existing applications
                while ensuring code quality, security, and long-term
                scalability.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-wrap">
          <div className=" w-full md:w-1/2 border-r-0 md:border-r-[3px] border-[#6249d4]">
            <div className="flex flex-wrap content-center items-center">
              <a href="https://ferns-it.com/" target="_blank">
                <Image
                  src={"/assets/ferns-logo.png"}
                  height={100}
                  width={200}
                  alt="ferns-it-logo"
                  className="ml-10 mb-2 md:ml-0 md:mb-0"
                />
              </a>

              <hr className="w-8/12 border-t-2 text-[#6249d4] mx-3 hidden md:block" />
              <div className="w-3 h-3 bg-blue-700 rounded-full absolute ml-178.25 -mt-12 hidden md:block"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-9 md:pl-15 py-5 md:py-10">
            <p className="text-[20px] text-gray-700 font-semibold">
              Dec <span className="font-sans">2015</span> - Jul &nbsp;
              <span className="font-sans">2017</span>
            </p>
            <p className="text-[30px] font-semibold text-[#6249d4] py-2">
              PHP Developer
            </p>
            <ul className="list-disc marker:text-[#6249d4] text-black">
              <li>
                Developed custom web applications using Core PHP and
                CodeIgniter, delivering scalable and business-focused solutions.
              </li>
              <li>
                Designed, developed, and maintained WordPress websites,
                including custom themes, plugins, and feature enhancements.
              </li>
              <li>
                Built responsive and cross-browser compatible user interfaces
                using HTML5, CSS3, JavaScript, and PHP.
              </li>
              <li>
                Customized WordPress themes, plugins, and frontend functionality
                to meet client-specific business requirements.
              </li>
              <li>
                Integrated and configured payment gateways including Stripe,
                PayPal, Worldpay, CCAvenue, and Razorpay for secure online
                transactions.
              </li>
              <li>
                Implemented website performance optimizations, frontend
                enhancements, and bug fixes to improve user experience and site
                reliability.
              </li>
              <li>
                Collaborated with designers and stakeholders to convert business
                requirements into functional, user-friendly web solutions.
              </li>
              <li>
                Maintained and enhanced existing web applications while ensuring
                code quality, security, and performance best practices.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-wrap">
          <div className=" w-full md:w-1/2 border-r-0 md:border-r-[3px] border-[#6249d4]">
            <div className="flex flex-wrap content-center items-center pt-10 md:pt-0 md:py-10">
              <a href="https://www.effectsworld.com/">
                <Image
                  src={"/assets/effects.png"}
                  height={200}
                  width={200}
                  alt="effects-media"
                  className="ml-10 mb-2 md:ml-0 md:mb-0"
                />
              </a>

              <hr className="w-8/12 border-t-2 text-[#6249d4] mx-3 hidden md:block" />
              <div className="w-3 h-3 bg-blue-700 rounded-full absolute ml-178.25 -mt-12 hidden md:block"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-9 md:pl-15 py-5 md:py-10">
            <p className="text-[20px] text-gray-700 font-semibold">
              Jun <span className="font-sans">2014</span> - Nov &nbsp;
              <span className="font-sans">2015</span>
            </p>
            <p className="text-[30px] font-semibold text-[#6249d4] py-2">
              PHP Developer
            </p>
            <ul className="list-disc marker:text-[#6249d4] text-black">
              <li>
                Developed custom PHP-based in-house staff management software to
                streamline internal operations and improve workflow efficiency.
              </li>
              <li>
                Designed and developed custom PHP backend systems for dynamic
                websites, including content management, user management, and
                business-specific functionality.
              </li>
              <li>
                Created custom widgets and reusable components to enhance
                website functionality, improve user experience, and support
                business requirements.
              </li>
              <li>
                Built and maintained scalable backend features, ensuring
                performance, security, and maintainability across web
                applications.
              </li>
            </ul>
            <div className="w-3 h-3 bg-blue-700 rounded-full -ml-16.75 absolute mt-7.5 hidden md:block"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default experience;
