"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const services = [
  {
    num: "01",
    title: "Web Development",
    description: "We develop websites for businesses and individuals.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "We design websites for businesses and individuals.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description: "We design logos for businesses and individuals.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description: "We optimize websites for search engines.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12  xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col flex-1 gap-6 justify-center group"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="w-full border-b border-white/20" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
