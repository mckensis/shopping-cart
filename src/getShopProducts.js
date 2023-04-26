import { v4 as uuid } from "uuid";

const getShopProducts = () => {
  return [
    {
      id: uuid(),
      name: 'Product 1',
      description: 'A lovely product',
      price: 10.99,
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcbny8p-c83d7482-bb8c-4c12-b351-97c83e663886.png/v1/fill/w_900,h_900/vegetable_beets_on_a_transparent_background__by_prussiaart_dcbny8p-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kY2JueThwLWM4M2Q3NDgyLWJiOGMtNGMxMi1iMzUxLTk3YzgzZTY2Mzg4Ni5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yrjSU9Q_r-TxTGwoG_lAVyxdvUVT_9OzAv70MMLvJwA'
    },
    {
      id: uuid(),
      name: 'Product 2',
      description: 'A second product',
      price: 5.99,
      image: 'https://www.transparentpng.com/thumb/vegetable/fZslFj-vegetable-cabbage-transparent.png'
    }
  ];
};

export default getShopProducts;