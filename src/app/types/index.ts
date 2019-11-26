export type User = {
  name: string;
  thumbnail: string;
};

export type Company = {
  domain: string;
  thumbnail: string;
};

export type Item = {
  id: number;
  parent_id: null | number;
  title: string;
};
