type LinksType = {
  github: string;
  live: string;
};

export type DataType = {
  id: number;
  title: string;
  image: string;
  description: string;
  links: LinksType;
  tech_stack: string[];
  year: number;
  type: string;
};
