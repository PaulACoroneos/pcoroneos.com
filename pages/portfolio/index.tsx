import Card from "components/card";

const data = [
  {
    title: "Barbeque Survey Form",
    githubLink: "https://github.com/PaulACoroneos/survey-form",
    deployedLink: "https://paulacoroneos.github.io/survey-form/",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Albert Einstein tribute",
    deployedLink: "https://paulacoroneos.github.io/tribute-page/",
    githubLink: "https://github.com/PaulACoroneos/tribute-page",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Technical documentation page",
    deployedLink:
      "https://paulacoroneos.github.io/Technical-Documentation-Page/",
    githubLink: "https://github.com/PaulACoroneos/Technical-Documentation-Page",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Product Landing Page",
    deployedLink: "https://paulacoroneos.github.io/product-landing-page/",
    githubLink: "https://github.com/PaulACoroneos/product-landing-page",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Palindrome Checker",
    deployedLink: "https://paulacoroneos.github.io/palindrome-checker/",
    githubLink: "https://github.com/PaulACoroneos/palindrome-checker",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const Portfolio = () => (
  <ul className="min-h-[800px] space-y-2 pt-6">
    {data.map((cardData) => (
      <li key={cardData.title}>
        <Card {...cardData} />
      </li>
    ))}
  </ul>
);
export default Portfolio;
