import Card from "components/card";

const data = [
  {
    title: "Free Code Camp Scientific Computing With Python Projects",
    githubLink:
      "https://github.com/PaulACoroneos/Scientific-Computing-with-Python-Projects",
    imageSrc: "./fcc.png",
    deployedLink:
      "https://repl.it/repls/folder/Scientific-Computing-with-Python-Projects",
  },
  {
    title: "What do I wear on my run?! (WIP)",
    deployedLink: "https://what-do-i-wear-on-my-run.vercel.app",
    githubLink: "https://github.com/PaulACoroneos/What-Do-I-Wear-On-My-Run",
    imageSrc: "./dude-what-do-i-wear-on-my-run.jpg",
  },
];

const Portfolio = () => (
  <ul className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
    {data.map((cardData) => (
      <li key={cardData.title}>
        <Card {...cardData} />
      </li>
    ))}
  </ul>
);
export default Portfolio;
