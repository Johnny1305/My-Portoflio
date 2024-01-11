import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Owcloud Server Installer",
    desc: "Bash script, which installs and configures an Owncloud Server Automatically!",
    img: "/static/projects/madlibs.png",
    github: "https://github.com/Johnny1305/Instalador_Servidor_Owncloud",
    tags: ["Bash"],
  },
  {
    id: 1,
    title: "Guess The Number",
    desc: "The game presents players with a challenge to guess a secret number within a specified range.",
    img: "/static/projects/dontleaveme.png",
    link: "https://demo.johnnyportfolio.x10.mx/adivina_el_numero/",
    github: "https://gitlab.com/Johnny1305/adivina-el-numero",
    tags: ["Python"],
  },
  {
    id: 2,
    title: "Project SMK Blockchain",
    desc: "On this website, we provide breaking news, technical analysis of various markets, and advice on all things related to the world of blockchain.",
    img: "/static/projects/8ball-rust.png",
    link: "https://smkblockchain.com",
    tags: ["Wordpress"],
  },
  {
    id: 3,
    title: "CountDown MoonBeam",
    desc: "The central purpose of this ambitious project lies in the conception and development of an innovative countdown timer.",
    img: "/static/projects/yei-learn.png",
    link: "https://smkblockchain.com/countdown-moonbeam/",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 4,
    title: "Number_Bot",
    desc: "Number_Bot offers a variety of commands that users can use to interact with the bot.",
    img: "/static/projects/buildfaster.png",
    link: "https://numberbot.johnnyportfolio.x10.mx",
    tags: ["DiscordJS", "Javascript", "NodeJS"],
  },
  {
    id: 5,
    title: "TodoApp",
    desc: "TodoApp is an application that allows users to manage and organize their pending tasks or activities.",
    img: "/static/projects/react-emoji-search.png",
    link: "https://app-todos.vercel.app/",
    github: "https://github.com/Johnny1305/TodoApp",
    tags: ["React", "CSS", "Javascript", "Bootstrap"],
  },
  {
    id: 6,
    title: "ShortURL",
    desc: "Shorten your URL with this web application!",
    img: "/static/projects/bitcointemp.png",
    link: "https://acurl.vercel.app/",
    github: "https://github.com/Johnny1305/shortener_url",
    tags: ["React", "API"],
  },
  {
    id: 7,
    title: "QR Generator",
    desc: "Generate a QR code from your URL with this web application!",
    img: "/static/projects/create-html-boilerplate.png",
    link: "https://gen-qr.vercel.app/",
    github: "https://github.com/Johnny1305/QR-Generator",
    tags: ["React"],
  },
  {
    id: 8,
    title: "Tic Tac Toe",
    desc: "Play Tic Tac Toe!",
    img: "/static/projects/create-html-boilerplate.png",
    link: "https://tictactok.vercel.app/",
    github: "https://github.com/Johnny1305/tictactoe-react",
    tags: ["React"],
  },
  
  
  
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects