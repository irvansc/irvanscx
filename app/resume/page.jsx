"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  Tabs,
  TabsList,
  TabsPanel,
  TabsContent,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const About = {
  title: "About Me",
  description:
    "I'm a software developer with a passion for creating beautiful and functional web applications. I'm a quick learner and I'm always looking to improve my skills.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Irvanscx",
    },
    {
      fieldName: "Phone",
      fieldValue: "+62 81234567890",
    },
    {
      fieldName: "Experience",
      fieldValue: "10+ years",
    },
    {
      fieldName: "Skype",
      fieldValue: "irvanscx",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian",
    },
    {
      fieldName: "Email",
      fieldValue: "irvanscx@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Indonesian",
    },
  ],
};
const Experience = {
  icon: "/public/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I'm a software developer with a passion for creating beautiful and functional web applications. I'm a quick learner and I'm always looking to improve my skills.",
  items: [
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Co.",
      position: "Front End Developer (Intern)",
      duration: "Summer 2021",
    },
    {
      company: "Ecommerce Startup",
      position: "Freelancer Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teacher Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Development Firm",
      position: "Junior Software Developer",
      duration: "2017 - 2018",
    },
  ],
};
const Education = {
  icon: "/public/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I'm a software developer with a passion for creating beautiful and functional web applications. I'm a quick learner and I'm always looking to improve my skills.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front End Track",
      duration: "2022",
    },
    {
      institution: "Udemy",
      degree: "The Complete Web Developer Course 2.0",
      duration: "2021",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Software Developer",
      duration: "2020",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2019",
    },
    {
      institution: "Community College",
      degree: "Associate of Science in Computer Science",
      duration: "2018",
    },
  ],
};

const Skills = {
  title: "My Skills",
  description:
    "I'm a software developer with a passion for creating beautiful and functional web applications. I'm a quick learner and I'm always looking to improve my skills.",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <FaNodeJs />,
      name: "node js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <SiNextdotjs />,
      name: "next js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4 },
        duration: 0.4,
        ease: "easeIn",
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{Experience.title}</h3>
                <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
                  {Experience.description}
                </p>
                <ScrollArea className="w-full h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {Experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{Education.title}</h3>
                <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
                  {Education.description}
                </p>
                <ScrollArea className="w-full h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {Education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{Skills.title}</h3>
                  <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
                    {Skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {Skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{About.title}</h3>
                <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
                  {About.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {About.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-accent">{item.fieldName} :</span>
                        <span className="text-md  ">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
