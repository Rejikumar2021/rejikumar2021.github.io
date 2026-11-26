import ServiceItems from "./serviceItems";
const services = () => {
  return (
    <>
      <div className="max-w-360 m-auto w-full py-10 md:py-20">
        <p className="text-[#6249d4] uppercase text-3xl md:text-6xl font-semibold text-center py-0 md:py-10">
          Here&apos;s what I&apos;m good at
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceItems
            image="wp-solutions.png"
            heading="WordPress Solutions"
            description="Develop custom WordPress websites, themes, and plugins tailored to your business requirements. From corporate websites to content-driven platforms, I create fast, secure, and user-friendly solutions that are easy to manage and scale."
          />
          <ServiceItems
            image="php.png"
            heading="Custom PHP Applications"
            description="Develop custom web applications using PHP, CodeIgniter, and Laravel. From business portals and CRM systems to tailored web solutions, I build secure, scalable, and high-performance applications that help businesses operate more efficiently."
          />
          <ServiceItems
            image="Shopify.webp"
            heading="Shopify Stores"
            description="Create professional Shopify stores with custom themes, functionality, and integrations. From store setup and customization to performance optimization, I help businesses deliver seamless shopping experiences that drive conversions."
          />
          <ServiceItems
            image="bigcommerce.webp"
            heading="BigCommerce Solutions"
            description="Develop and customize BigCommerce stores to meet unique business requirements. I provide theme customization, feature enhancements, and third-party integrations to help businesses create scalable and high-performing eCommerce experiences."
          />
          <ServiceItems
            image="react-next.png"
            heading="React & Next.js Applications"
            description="Build modern, responsive, and high-performance web applications using React and Next.js. From dynamic user interfaces to SEO-friendly websites, I focus on delivering fast, scalable, and engaging digital experiences."
          />
          <ServiceItems
            image="Node.js_logo.svg"
            heading="Node.js Backend Development"
            description="Develop secure and scalable backend systems using Node.js. From RESTful APIs and database integration to server-side business logic, I build robust foundations that support reliable and efficient web applications."
          />
        </div>
      </div>
    </>
  );
};

export default services;
