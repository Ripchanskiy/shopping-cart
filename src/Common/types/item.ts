export type Item = {
  id: number;
  name: string;
  price: number;
  listPrice: number;
  count: number;
  image: string;
  characteristics?: {
    [key: string]: number | string;
  };
};
