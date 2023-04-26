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
    },
    {
      id: uuid(),
      name: 'Product 3',
      description: 'A third product',
      price: 5,
      image: 'http://clipart-library.com/image_gallery2/Broccoli-PNG-Image.png'
    },
    {
      id: uuid(),
      name: 'Product 4',
      description: 'A nice thing',
      price: 20.50,
      image: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c22f.png'
    },
    {
      id: uuid(),
      name: 'Product 5',
      description: 'A delicious product',
      price: 10.99,
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcrjbvx-b5078bbf-03ff-4625-b214-35c3f9fefc4c.png/v1/fill/w_900,h_900/red_apple_on_a_transparent_background__by_prussiaart_dcrjbvx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kY3JqYnZ4LWI1MDc4YmJmLTAzZmYtNDYyNS1iMjE0LTM1YzNmOWZlZmM0Yy5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Y0-7z3OBNt3CbKeZrPiWJFD-4LhVF7I9iC2wADeZEAU'
    },
    {
      id: uuid(),
      name: 'Product 6',
      description: 'A sixth product',
      price: 3.99,
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dbrar5l-fffc23bb-e44e-423f-a6f4-8837f2ebc200.png/v1/fill/w_900,h_875/grapefruit_on_an_isolated_transparent_background__by_prussiaart_dbrar5l-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODc1IiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kYnJhcjVsLWZmZmMyM2JiLWU0NGUtNDIzZi1hNmY0LTg4MzdmMmViYzIwMC5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.azy3m9hz1SM_-Ca_eYYC4b-62EYpUjlgWLoSxsw637k'
    }
  ];
};

export default getShopProducts;