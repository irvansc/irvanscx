"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";

const Social = [
  { icon: <FaFacebookF />, path: "https://www.facebook.com/irvanscx" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/irvanscx" },
  { icon: <FaTwitter />, path: "https://www.twitter.com/irvanscx" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/irvanscx" },
  { icon: <FaGithub />, path: "https://www.github.com/irvanscx" },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {Social.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
