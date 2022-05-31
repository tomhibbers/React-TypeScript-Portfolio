import MaarifLogo from "assets/images/logos/maarif.png";
import MISLogo from "assets/images/logos/mis.png";
import FairviewLogo from "assets/images/logos/fairview.png";
import GISLogo from "assets/images/logos/gis.jpg";
import ISALogo from "assets/images/logos/isa.jpg";
import AJALogo from "assets/images/logos/aja.jpg";
import GMLogo from "assets/images/logos/gm.jpg";

import UKZNLogo from "assets/images/logos/ukzn.jpg";
import NMULogo from "assets/images/logos/nmu.jpg";

import figma from "assets/images/skills/figma.png";
import vscode from "assets/images/skills/vscode.png";
import react from "assets/images/skills/react.png";
import ruby from "assets/images/skills/ruby.png";
import rails from "assets/images/skills/rails.png";
import javascript from "assets/images/skills/javascript.png";
import typescript from "assets/images/skills/typescript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
import python from "assets/images/skills/python.png";
import bootstrap from "assets/images/skills/bootstrap.png";
import postgres from "assets/images/skills/postgresql.png";
import redis from "assets/images/skills/redis.png";
import mysql from "assets/images/skills/mysql.png";
import heroku from "assets/images/skills/heroku.png";
import docean from "assets/images/skills/digital-ocean.png";
import aws from "assets/images/skills/aws.png";
import nginx from "assets/images/skills/nginx.png";

export const companies = [
  {
    title: "International Maarif Schools",
    alt: "image",
    role: "IB MYP and DP Coordinator",
    skills: ["Iraq"],
    period: "2017 - Present",
    logo: MaarifLogo
  },
  {
    title: "Myanmar International School",
    alt: "image",
    role: "A Level Economics Teacher",
    skills: ["Myanmar"],
    period: "2015 - 2016",
    logo: MISLogo
  },
  {
    title: "Fairview International School",
    alt: "image",
    role: "Coordinator",
    skills: ["Malaysia"],
    period: "2014 - 2015",
    logo: FairviewLogo
  },
  {
    title: "Guangzhou Nanhu International School",
    alt: "image",
    role: "Interim Head of Secondary School",
    skills: ["China"],
    period: "2013 - 2014",
    logo: GISLogo
  },
  {
    title: "International School Aamby",
    alt: "image",
    role: "Head of Boarding and School LIfe",
    skills: ["India"],
    period: "2012 - 2013",
    logo: ISALogo
  },
  {
    title: "AlJazeera Academy",
    alt: "image",
    role: "Pastoral Coordinator and Teacher",
    skills: ["Qatar"],
    period: "2006 - 2012",
    logo: AJALogo
  },
  {
    title: "Gert Maritz School",
    alt: "image",
    role: "Principal/Director/Head of School",
    skills: ["South Africa"],
    period: "1999 - 2006",
    logo: GMLogo
  },
];

export const institutes = [
  {
    short_title: "University of KZN",
    title: "University of KwaZulu Natal",
    alt: "image",
    role: "Master of Business Administration",
    skills: [],
    period: "2004 - 2006",
    logo: UKZNLogo
  },
  {
    short_title: "NMU",
    title: "Nelson Mandela University",
    alt: "college image",
    role: "Bachelor of Commerce",
    skills: [],
    period: "",
    logo: NMULogo
  },
  {
    short_title: "Graaf Reinet College",
    title: "Graaf Reinet Teachers' College",
    alt: "college image",
    role: "Teaching Diploma",
    skills: [],
    period: "",
    logo: ""
  },
];

export const skills = [
  {
    name: "Ruby on Rails",
    description: "Web development",
    link: "https://rubyonrails.org/",
    type: "development",
    image: rails
  },
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react
  },
  {
    name: "Ruby",
    description: "Web development, scrapping",
    link: "https://www.ruby-lang.org/en/",
    type: "development",
    image: ruby
  },
  {
    name: "Python",
    description: "Web development, scrapping",
    link: "https://www.python.org/",
    type: "development",
    image: python
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap
  },
  {
    name: "Postgres",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgres
  },
  {
    name: "Mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql
  },
  {
    name: "Redis",
    description: "Database",
    link: "https://redis.io/",
    type: "database",
    image: redis
  },
  {
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: heroku
  },
  {
    name: "AWS",
    description: "Devops",
    link: "https://aws.amazon.com/",
    type: "devops",
    image: aws
  },
  {
    name: "Digital Ocean",
    description: "Devops",
    link: "https://www.digitalocean.com/",
    type: "devops",
    image: docean
  },
  {
    name: "Nginx",
    description: "Web server",
    link: "https://www.nginx.com/",
    type: "devops",
    image: nginx
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma
  }
];
