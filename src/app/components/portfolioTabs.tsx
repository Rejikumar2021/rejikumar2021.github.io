"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  id: number;
  title: string;
  category?: string;
  image?: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Corporate Website",
    category: "wordpress",
    image: "/assets/am-website.png",
    link: "https://www.adroitminds.com",
  },
  {
    id: 2,
    title: "WooCommerce Store",
    category: "wordpress",
    image: "/assets/endota-website.png",
    link: "https://endota.com/nz/",
  },
  {
    id: 3,
    title: "B2B Company Website",
    category: "wordpress",
    image: "/assets/fah.png",
    link: "https://fiveatheart.com/",
  },
  {
    id: 4,
    title: "Mental Health & Wellness Platform",
    category: "wordpress",
    image: "/assets/gotcha.png",
    link: "https://www.gym.gotcha4life.org/",
  },
  {
    id: 5,
    title: "Location Intelligence SaaS Platform",
    category: "wordpress",
    image: "/assets/gap-maps.png",
    link: "https://www.gapmaps.com/",
  },
  {
    id: 6,
    title: "Non-Profit Organization Website",
    category: "wordpress",
    image: "/assets/nas.png",
    link: "https://www.artstrategies.org/",
  },
  {
    id: 7,
    title: "Fashion & Lifestyle",
    category: "shopify",
    image: "/assets/myisland.png",
    link: "https://myislandhome.com.au/",
  },
  {
    id: 8,
    title: "Pet eCommerce Store",
    category: "shopify",
    image: "/assets/biggy.png",
    link: "https://biggiesrawpantry.com.au/",
  },
  {
    id: 9,
    title: "Health & Wellness eCommerce Store",
    category: "shopify",
    image: "/assets/gutco.png",
    link: "https://thegutco.com.au/",
  },
  {
    id: 10,
    title: "Home Decor & Lifestyle eCommerce Store",
    category: "shopify",
    image: "/assets/spinix.png",
    link: "https://spinifexcollections.com/",
  },
  {
    id: 11,
    title: "Medical eCommerce Platform",
    category: "bigcommerce",
    image: "/assets/med.png",
    link: "https://medcart.com.au/",
  },
  {
    id: 12,
    title: "Sports Equipment eCommerce Platform",
    category: "bigcommerce",
    image: "/assets/golf.png",
    link: " https://oncoursegolf.com.au/",
  },
  {
    id: 13,
    title: "Pet Care & Training eCommerce Platform",
    category: "bigcommerce",
    image: "/assets/bc.png",
    link: "https://www.barkcontrol.com.au/",
  },
  {
    id: 14,
    title: "Major Hazard Facility Calculator",
    category: "PHP",
    image: "/assets/agsafe.png",
    link: "https://www.agsafe.org.au/mhfc",
  },
  {
    id: 15,
    title: "The Mental Fitness Gym - API",
    category: "PHP",
    image: "/assets/gotcha-app.png",
    link: "https://play.google.com/store/apps/details?id=com.gotcha4life.mentalfitnessgym&hl=en_IN",
  },
  {
    id: 16,
    title: "Portfolio",
    category: "Next.js",
    image: "/assets/port.png",
    link: "#",
  },
];

const categories = [
  "all",
  "wordpress",
  "shopify",
  "bigcommerce",
  "PHP",
  "Next.js",
];

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section className="py-12">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-5 md:gap-4 md:mb-10 px-1 md:px-0">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`
              px-6 py-3 rounded-full font-medium capitalize
              transition-all duration-300 cursor-pointer
              ${
                activeTab === category
                  ? "bg-[#6249d4] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }
            `}
          >
            {category === "PHP" ? "Custom PHP" : category}
          </button>
        ))}
      </div>

      {/* Projects */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="sync">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group overflow-hidden rounded-lg shadow-lg md:bg-white cursor-pointer hover:bg-[#7d69d3] mx-5 md:mx-0 bg-[#7d69d3]"
            >
              <a href={project.link} target="_blank">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-white md:text-[#7d69d3] text-white">
                    {project.title}
                  </h3>

                  <p className="md:text-gray-500 capitalize group-hover:text-white text-white">
                    {project.category}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
