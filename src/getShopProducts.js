import { v4 as uuid } from "uuid";

const getShopProducts = () => {
  return [
    {
      id: 1,
      name: 'Aglaonema Greyhouse',
      common: 'Chinese Evergreen',
      price: 11.99,
      image: './images/Aglaonema.jpg'
    },
    {
      id: 2,
      name: 'Aloe Vera',
      common: 'Chinese Aloe',
      price: 8.99,
      image: './images/Aloe.jpg'
    },
    {
      id: 3,
      name: 'Calathea Makoyana',
      common: 'Peacock Plant',
      price: 12.99,
      image: './images/Calathea.jpg'
    },
    {
      id: 4,
      name: 'Ceropegia Woodii',
      common: 'Chain of Hearts',
      price: 9.99,
      image: './images/Ceropegia.jpg'
    },
    {
      id: 5,
      name: 'Clusia Rosea',
      common: 'Autograph Tree',
      price: 13.99,
      image: './images/Clusia.jpg'
    },
    {
      id: 6,
      name: 'Dracaena Trifasciata',
      common: 'Snake Plant',
      price: 9.99,
      image: './images/Dracaena.jpg'
    },
    {
      id: 7,
      name: 'Epiphyllum',
      common: 'Orchid Cacti',
      price: 8.99,
      image: './images/Epiphyllum.jpg'
    },
    {
      id: 8,
      name: 'Epipremnum Aureum',
      common: `Devil's Ivy`,
      price: 11.99,
      image: './images/Epipremnum.jpg'
    },
    {
      id: 9,
      name: 'Euphorbia Platyclada',
      common: 'Dead Plant',
      price: 8.99,
      image: './images/Euphorbia.jpg'
    },
    {
      id: 10,
      name: 'Hoya Wayetii',
      common: 'Wax Plant',
      price: 13.99,
      image: './images/Hoya.jpg'
    },
    {
      id: 11,
      name: 'Maranta Leuconeura',
      common: 'Prayer Plant',
      price: 12.99,
      image: './images/Maranta.jpg'
    },
    {
      id: 12,
      name: 'Pseudorhipsalis',
      common: 'Red Coral',
      price: 11.99,
      image: './images/Pseudorhipsalis.jpg'
    },
    {
      id: 13,
      name: 'Sansevieria Cylindrica',
      common: 'Cylindrical Snake Plant',
      price: 9.99,
      image: './images/Sansevieria.jpg'
    },
    {
      id: 14,
      name: 'Zamioculcas Zamiifolia',
      common: 'ZZ Plant',
      price: 10.99,
      image: './images/Zamioculcas.jpg'    }
  ];
};

export default getShopProducts;