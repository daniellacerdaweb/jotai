import { NextApiRequest, NextApiResponse } from 'next';

interface Ingredient {
  id: string;
  name: string;
}

interface Hamburger {
  id: string;
  name: string;
  slug: string;
  ingredients: string[];
  calories: number;
  price: number;
  promotionalPrice: number;
}

const hamburgers: Hamburger[] = [
  {
    id: '4a92e98b-9029-4e8b-b5f1-f584f5919121',
    name: 'Cheeseburger',
    slug: 'cheeseburger',
    ingredients: [
      'af2a3b12-4cbb-4f7f-8e39-3e11a53a46f1',
      '44a5b48c-d2c3-40ae-8b95-9b7d9d46c8d2',
      'cf96b1a4-3dd4-4b30-87cc-5c8d6742cf6a',
      'a135937a-24c7-43cd-afe1-6b5c9cb227c7',
      '96b1b34f-cf57-45a2-b1e7-4d3e3e192486',
      'b9f2ab50-eb8b-4381-8a6c-9cb0e8285fd8',
      '34335e4d-58c8-4ed9-bffb-4299b0e72c4e',
    ],
    calories: 600,
    price: 8.99,
    promotionalPrice: 6.99,
  },
  {
    id: '96c88ba8-5d1b-4a6b-a9ac-df0be6d546c3',
    name: 'Bacon Burger',
    slug: 'bacon-burger',
    ingredients: [
      'af2a3b12-4cbb-4f7f-8e39-3e11a53a46f1',
      '61d88746-2eb5-4247-a2bb-5a861cd53361',
      '44a5b48c-d2c3-40ae-8b95-9b7d9d46c8d2',
      '2f8fd5f5-6f36-4a3b-aee9-702b32d6a2f4',
      'a2b167f1-9c43-4e5d-9e3b-b2b36aa9f23c',
      '768f77b9-d14f-4823-b191-4a42d1a93dbb',
      'cf96b1a4-3dd4-4b30-87cc-5c8d6742cf6a',
      'a135937a-24c7-43cd-afe1-6b5c9cb227c7',
      '96b1b34f-cf57-45a2-b1e7-4d3e3e192486',
      'b9f2ab50-eb8b-4381-8a6c-9cb0e8285fd8',
      '34335e4d-58c8-4ed9-bffb-4299b0e72c4e',
    ],
    calories: 700,
    price: 9.99,
    promotionalPrice: 7.99,
  },
  {
    id: 'fe4ac39f-05e7-4be5-b204-25f7d8af6c1c',
    name: 'BBQ Burger',
    slug: 'bbq-burger',
    ingredients: [
      'af2a3b12-4cbb-4f7f-8e39-3e11a53a46f1',
      '44a5b48c-d2c3-40ae-8b95-9b7d9d46c8d2',
      '61d88746-2eb5-4247-a2bb-5a861cd53361',
      '19e4d7aa-d28a-43b4-953e-9c2b0a2e9bb0',
      '2f8fd5f5-6f36-4a3b-aee9-702b32d6a2f4',
      'a2b167f1-9c43-4e5d-9e3b-b2b36aa9f23c',
      '768f77b9-d14f-4823-b191-4a42d1a93dbb',
      'cf96b1a4-3dd4-4b30-87cc-5c8d6742cf6a',
      'a135937a-24c7-43cd-afe1-6b5c9cb227c7',
    ],
    calories: 750,
    price: 10.99,
    promotionalPrice: 8.99,
  },
  {
    id: 'd6a78941-3101-4863-82bb-df3bcf131690',
    name: 'Chicken Burger',
    slug: 'chicken-burger',
    ingredients: [
      '67efb168-b4b7-4cf9-ae3b-72a4eeb6b24f',
      '44a5b48c-d2c3-40ae-8b95-9b7d9d46c8d2',
      '2f8fd5f5-6f36-4a3b-aee9-702b32d6a2f4',
      'a2b167f1-9c43-4e5d-9e3b-b2b36aa9f23c',
      'cf96b1a4-3dd4-4b30-87cc-5c8d6742cf6a',
    ],
    calories: 600,
    price: 8.99,
    promotionalPrice: 6.99,
  },
  {
    id: '8490fc19-f86a-4dc7-8041-8bfa7245db58',
    name: 'Veggie Burger',
    slug: 'veggie-burger',
    ingredients: [
      '98a437c4-0538-4f0e-b82d-6d4fd9b4d9f5',
      '2f8fd5f5-6f36-4a3b-aee9-702b32d6a2f4',
      'a2b167f1-9c43-4e5d-9e3b-b2b36aa9f23c',
      '768f77b9-d14f-4823-b191-4a42d1a93dbb',
      'cf96b1a4-3dd4-4b30-87cc-5c8d6742cf6a',
      'a135937a-24c7-43cd-afe1-6b5c9cb227c7',
      '96b1b34f-cf57-45a2-b1e7-4d3e3e192486',
      'b9f2ab50-eb8b-4381-8a6c-9cb0e8285fd8',
    ],
    calories: 500,
    price: 7.99,
    promotionalPrice: 5.99,
  },
  {
    id: 'e38ab0a2-320f-469b-89b6-5b19e4a7847a',
    name: 'Double Bacon Burger',
    slug: 'double-bacon-burger',
    ingredients: [
      'cfed2578-938d-4a54-b269-19b9f367d76d',
      '61d88746-2eb5-4247-a2bb-5a861cd53361',
      '44a5b48c-d2c3-40ae-8b95-9b7d9d46c8d2',
      '2f8fd5f5-6f36-4a3b-aee9-702b32d6a2f4',
      'a2b167f1-9c43-4e5d-9e3b-b2b36aa9f23c',
      '768f77b9-d14f-4823-b191-4a42d1a93dbb',
      'cf96b1a4-3dd4-4b30-87cc-5c8d6742cf6a',
      'a135937a-24c7-43cd-afe1-6b5c9cb227c7',
      '96b1b34f-cf57-45a2-b1e7-4d3e3e192486',
      'b9f2ab50-eb8b-4381-8a6c-9cb0e8285fd8',
      '34335e4d-58c8-4ed9-bffb-4299b0e72c4e',
    ],
    calories: 800,
    price: 11.99,
    promotionalPrice: 9.99,
  },
  {
    id: 'ac22c28f-d1b4-441e-841b-7f05131ff66d',
    name: 'Guacamole Burger',
    slug: 'guacamole-burger',
    ingredients: [
      'af2a3b12-4cbb-4f7f-8e39-3e11a53a46f1',
      'f35e4d7a-24c7-43cd-afe1-6b5c9cb227c7',
      '44a5b48c-d2c3-40ae-8b95-9b7d9d46c8d2',
      '2f8fd5f5-6f36-4a3b-aee9-702b32d6a2f4',
      'a2b167f1-9c43-4e5d-9e3b-b2b36aa9f23c',
      '768f77b9-d14f-4823-b191-4a42d1a93dbb',
      'cf96b1a4-3dd4-4b30-87cc-5c8d6742cf6a',
      'a135937a-24c7-43cd-afe1-6b5c9cb227c7',
      '96b1b34f-cf57-45a2-b1e7-4d3e3e192486',
      'b9f2ab50-eb8b-4381-8a6c-9cb0e8285fd8',
      '34335e4d-58c8-4ed9-bffb-4299b0e72c4e',
    ],
    calories: 750,
    price: 10.99,
    promotionalPrice: 8.99,
  },
];

const ingredients: Ingredient[] = [
  { id: 'af2a3b12-4cbb-4f7f-8e39-3e11a53a46f1', name: 'burger' },
  { id: '44a5b48c-d2c3-40ae-8b95-9b7d9d46c8d2', name: 'cheese' },
  { id: 'cf96b1a4-3dd4-4b30-87cc-5c8d6742cf6a', name: 'pickles' },
  { id: 'a135937a-24c7-43cd-afe1-6b5c9cb227c7', name: 'ketchup' },
  { id: '96b1b34f-cf57-45a2-b1e7-4d3e3e192486', name: 'mustard' },
  { id: 'b9f2ab50-eb8b-4381-8a6c-9cb0e8285fd8', name: 'mayonnaise' },
  { id: '34335e4d-58c8-4ed9-bffb-4299b0e72c4e', name: 'brioche bread' },
  { id: '61d88746-2eb5-4247-a2bb-5a861cd53361', name: 'bacon' },
  { id: '2f8fd5f5-6f36-4a3b-aee9-702b32d6a2f4', name: 'lettuce' },
  { id: 'a2b167f1-9c43-4e5d-9e3b-b2b36aa9f23c', name: 'tomato' },
  { id: '768f77b9-d14f-4823-b191-4a42d1a93dbb', name: 'onion' },
  { id: '19e4d7aa-d28a-43b4-953e-9c2b0a2e9bb0', name: 'BBQ sauce' },
  { id: '67efb168-b4b7-4cf9-ae3b-72a4eeb6b24f', name: 'grilled chicken' },
  { id: 'e13fb81c-3450-467b-8f5c-80208333dd1e', name: 'pepper jack cheese' },
  { id: '98a437c4-0538-4f0e-b82d-6d4fd9b4d9f5', name: 'veggie burger' },
  { id: 'cfed2578-938d-4a54-b269-19b9f367d76d', name: 'two beef burger' },
  { id: '729a3b12-4cbb-4f7f-8e39-3e11a53a46f1', name: 'grilled chicken breast' },
  { id: '14a5b48c-d2c3-40ae-8b95-9b7d9d46c8d2', name: 'teriyaki sauce' },
  { id: '2f96b1a4-3dd4-4b30-87cc-5c8d6742cf6a', name: 'pineapple' },
  { id: 'f35e4d7a-24c7-43cd-afe1-6b5c9cb227c7', name: 'guacamole' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ hamburgers, ingredients });
}
