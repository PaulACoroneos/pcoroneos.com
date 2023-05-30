export type CardProps = {
  title: string;
  githubLink: string;
  deployedLink?: string;
  imageSrc: string;
};

const Card = ({ title, githubLink, deployedLink, imageSrc }: CardProps) => {
  const githubTitle = `Github link for ${title}`;
  const deployedTitle = `Deployed link for ${title}`;

  return (
    <div className="flex flex-col items-center">
      <div className="mt-5 rounded-lg bg-white">
        <img src={imageSrc} className="h-40 rounded-md" alt="" />
      </div>
      <div className="-mt-4 flex h-56 w-64 flex-col justify-between rounded-lg bg-secondary shadow-lg">
        <div className="p-5">
          <span className="text-lg font-bold text-white">{title}</span>
        </div>
        <div className="grid grid-cols-2 gap-1 p-4">
          <a title={githubTitle} href={githubLink}>
            <div className="grid grid-cols-2 items-center rounded bg-primary px-2 py-1">
              <img src="./github.png" alt="" />
              <span className="text-sm text-white">Github</span>
            </div>
          </a>
          {deployedLink && (
            <a title={deployedTitle} href={deployedLink}>
              <div className="grid grid-cols-2 items-center rounded bg-primary px-2 py-1">
                <img width="39" height="39" src="./deploy.png" alt="" />
                <span className="text-sm text-white">Deploy</span>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
