"use client";

import { motion } from "framer-motion";

import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 85725071996",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "irvanscx@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description:
      "Kp cicewol, 001, RT.3, Mekarsari, Kec. Cicurug, Kabupaten Sukabumi, Jawa Barat 43359",
  },
];
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">Contact me for more information</p>
              {/* INPUT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="text" placeholder="Subject" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="gr">Graphic Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
              />
              {/* button */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {Info.map((item, index) => {
                return (
                  <li key={index} className="flex gap-6 items-center">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] rounded-md text-accent flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
