type Item = {
  id: string;
  title: string;
  price: { currency: string; amount: number; decimals: number };
  picture: string;
  condition: string;
  free_shipping: boolean;
};

export default interface QueryReturn {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: Item[];
}
