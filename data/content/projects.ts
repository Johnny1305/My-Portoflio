import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Owcloud Server Installer",
    desc: "Bash script, which installs and configures an Owncloud Server Automatically!",
    img: "/static/projects/owncloud.png",
    github: "https://github.com/Johnny1305/Instalador_Servidor_Owncloud",
    tags: ["Bash"],
  },
  {
    id: 1,
    title: "Guess The Number",
    desc: "The game presents players with a challenge to guess a secret number within a specified range.",
    img: "/static/projects/numero.png",
    github: "https://github.com/Johnny1305/Adivina-el-Numero",
    tags: ["Python"],
  },
  {
    id: 4,
    title: "🌸 Amira 🌸",
    desc: "Amira offers a variety of commands that users can use to interact with the bot.",
    img: "/static/projects/amira.png",
    link: "https://amirabot.es",
    tags: ["DiscordJS", "Javascript", "NodeJS"],
  },
  {
    id: 5,
    title: "TodoApp",
    desc: "TodoApp is an application that allows users to manage and organize their pending tasks or activities.",
    img: "/static/projects/todo.png",
    link: "https://app-todos.vercel.app/",
    github: "https://github.com/Johnny1305/TodoApp",
    tags: ["React", "CSS", "Javascript", "Bootstrap"],
  },
  {
    id: 6,
    title: "ShortURL",
    desc: "Shorten your URL with this web application!",
    img: "/static/projects/url.png",
    link: "https://acurl.vercel.app/",
    github: "https://github.com/Johnny1305/shortener_url",
    tags: ["React", "API"],
  },
  {
    id: 7,
    title: "QR Generator",
    desc: "Generate a QR code from your URL with this web application!",
    img: "/static/projects/qr.png",
    link: "https://gen-qr.vercel.app/",
    github: "https://github.com/Johnny1305/QR-Generator",
    tags: ["React"],
  },
  {
    id: 8,
    title: "Tic Tac Toe",
    desc: "Play Tic Tac Toe!",
    img: "/static/projects/tictactoe.png",
    link: "https://tictactok.vercel.app/",
    github: "https://github.com/Johnny1305/tictactoe-react",
    tags: ["React"],
  },
  {
    id: 9,
    title: "The Russian Rule",
    desc: "Guessing game and if you lose, System32 is removed. (Windows only)",
    img: "/static/projects/russianrule.png",
    github: "https://github.com/Johnny1305/La-Ruleta-Rusa",
    tags: ["Python", "ShellScript"],
  },
  {
    id: 10,
    title: "Morals NPM",
    desc: "This npm package provides a collection of random, funny morals that you can use to add a touch of humor to your application or project.",
    img: "/static/projects/npm-morals.png",
    link: "https://www.npmjs.com/package/moralejas",
    tags: ["NPM", "Javascript", "NodeJS"],
  },
  {
    id: 11,
    title: "GitHub User Search",
    desc: "GitHub User Search is a web application that allows you to search for GitHub profiles, displaying information about repositories and followers in an easy and intuitive way.",
    img: "/static/projects/github-search.png",
    link: "https://searchgithub-user.vercel.app/",
    github: "https://github.com/Johnny1305/github-user-search",
    tags: ["React", "Javascript", "NodeJS"],
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