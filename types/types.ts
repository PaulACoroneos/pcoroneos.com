export type Post = {
  content: string;
  data: FrontMatterData;
  filePath: string;
};

export type FrontMatterData = {
  date: string;
  description: string;
  tags: string | string[];
  title: string;
};
