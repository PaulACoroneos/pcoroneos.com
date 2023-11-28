import Card from "components/card";

const data = [
  {
    title: "Vanilla HTML and CSS Survey Form",
    githubLink: "https://github.com/PaulACoroneos/survey-form",
    deployedLink: "https://paulacoroneos.github.io/survey-form/",
  },
];

const Portfolio = () => (
  <ul className="grid min-h-[800px] gap-8 pt-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    {data.map((cardData) => (
      <li key={cardData.title}>
        <Card {...cardData} />
      </li>
    ))}
  </ul>
);
export default Portfolio;
