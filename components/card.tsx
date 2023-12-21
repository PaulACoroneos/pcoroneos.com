export type CardProps = {
  title: string;
  githubLink: string;
  deployedLink?: string;
  tags: string[];
};

const Card = ({ title, githubLink, deployedLink, tags }: CardProps) => {
  const githubTitle = `Github link for ${title}`;
  const deployedTitle = `Deployed link for ${title}`;

  return (
    <div className="grid w-full grid-cols-3 items-center rounded-lg bg-secondary p-3">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <ul className="space-x-2">
        {tags.map((tag) => (
          <li
            className="inline-block rounded bg-quaternary p-2 text-xs text-white"
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="flex justify-end space-x-2">
        <a
          className="flex items-center rounded bg-primary px-2 py-1"
          title={githubTitle}
          href={githubLink}
        >
          <img width="24" height="24" src="./github.png" alt="" />
          <span className="text-sm font-medium text-white">Github</span>
        </a>
        <a
          className="flex items-center rounded bg-primary px-2 py-1"
          title={deployedTitle}
          href={deployedLink}
        >
          <img width="24" height="32" src="./deploy.png" alt="" />
          <span className="pl-1 text-sm font-medium text-white">Deploy</span>
        </a>
      </div>
    </div>
  );
};
export default Card;
