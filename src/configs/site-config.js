import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter,
  FaMedium
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Thomas Hibbers. All Rights Reserved.`,
  author: {
    name: "Thomas Hibbers",
    accounts: [
      {
        url: "https://twitter.com/hibbersdavid",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://www.linkedin.com/in/thomas-hibbers-1299802b/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "https://medium.com/@tomhibbers",
        label: "Medium Account",
        type: "red",
        icon: <FaMedium />
      },
      {
        url: "mailto:thomasdhibbers@gmail.com",
        label: "Mail Thomas",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
