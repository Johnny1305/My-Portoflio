type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};


export const skills: Skill[] = [
  {
    title: "HTML",
    icon: "https://skillicons.dev/icons?i=html",
  },
  {
    title: "CSS",
    icon: "https://skillicons.dev/icons?i=css",
  },
  {
    title: "Javascript",
    icon: "https://skillicons.dev/icons?i=js",
  },
  {
    title: "React",
    icon: "https://skillicons.dev/icons?i=react",
  },
  {
    title: "NextJS",
    icon: "https://skillicons.dev/icons?i=nextjs",
    style: { filter: "invert(1)" },
  },
  {
    title: "Typescript",
    icon: "https://skillicons.dev/icons?i=ts",
  },
  {
    title: "NodeJS",
    icon: "https://skillicons.dev/icons?i=nodejs",
  },
  {
    title: "Git",
    icon: "https://skillicons.dev/icons?i=git",
  },
  {
    title: "Python",
    icon: "https://skillicons.dev/icons?i=py",
  },
  {
    title: "MongoDB",
    icon: "https://skillicons.dev/icons?i=mongodb",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "A great worker, responsible, self-taught, resourceful, and very involved, I would definitely recommend their services to anyone who needs a development specialist.",
    name: "Víctor Delgado",
    job: "CEO SMKBlockchain",
  },
  {
    quote:
      "Professional in the field, with hunger to learn new things every day.",
    name: "Jesús Ostos",
    job: "Study together",
  },
  {
    quote:
      "He is a very nice, intelligent guy, he knows how to keep his patience and find solutions, I like how he programs.",
    name: "Blasvick",
    job: "Streamer Twitch",
  },
];
