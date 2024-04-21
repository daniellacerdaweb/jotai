import { NextApiRequest, NextApiResponse } from 'next';

interface Hamburger {
  id: number;
  name: string;
  slug: string;
  ingredients: string[];
}


const hamburgers:Hamburger[] = [
    { 
      id: 1,
      name: 'Classic Burger',
      slug: 'classic-burger',
      ingredients: ['beef patty', 'lettuce', 'tomato', 'onion', 'pickles', 'ketchup', 'mustard', 'mayonnaise']
    },
    { 
      id: 2,
      name: 'Cheeseburger',
      slug: 'cheeseburger',
      ingredients: ['beef patty', 'cheese', 'lettuce', 'tomato', 'onion', 'pickles', 'ketchup', 'mustard', 'mayonnaise']
    },
    { 
      id: 3,
      name: 'Bacon Burger',
      slug: 'bacon-burger',
      ingredients: ['beef patty', 'bacon', 'lettuce', 'tomato', 'onion', 'pickles', 'ketchup', 'mustard', 'mayonnaise']
    },
    { 
      id: 4,
      name: 'Mushroom Swiss Burger',
      slug: 'mushroom-swiss-burger',
      ingredients: ['beef patty', 'Swiss cheese', 'mushrooms', 'lettuce', 'tomato', 'onion', 'pickles', 'ketchup', 'mustard', 'mayonnaise']
    },
    { 
      id: 5,
      name: 'BBQ Burger',
      slug: 'bbq-burger',
      ingredients: ['beef patty', 'cheddar cheese', 'bacon', 'BBQ sauce', 'lettuce', 'tomato', 'onion', 'pickles']
    },
    { 
      id: 6,
      name: 'Spicy Chicken Burger',
      slug: 'spicy-chicken-burger',
      ingredients: ['grilled chicken breast', 'pepper jack cheese', 'lettuce', 'tomato', 'onion', 'pickles', 'spicy mayo']
    },
    { 
      id: 7,
      name: 'Veggie Burger',
      slug: 'veggie-burger',
      ingredients: ['veggie patty', 'lettuce', 'tomato', 'onion', 'pickles', 'ketchup', 'mustard', 'mayonnaise']
    },
    { 
      id: 8,
      name: 'Double Bacon Burger',
      slug: 'double-bacon-burger',
      ingredients: ['two beef patties', 'bacon', 'cheddar cheese', 'lettuce', 'tomato', 'onion', 'pickles', 'ketchup', 'mustard', 'mayonnaise']
    },
    { 
      id: 9,
      name: 'Teriyaki Burger',
      slug: 'teriyaki-burger',
      ingredients: ['grilled chicken breast', 'teriyaki sauce', 'pineapple', 'lettuce', 'tomato', 'onion', 'pickles', 'mayonnaise']
    },
    { 
      id: 10,
      name: 'Guacamole Burger',
      slug: 'guacamole-burger',
      ingredients: ['beef patty', 'guacamole', 'cheddar cheese', 'lettuce', 'tomato', 'onion', 'pickles', 'ketchup', 'mustard', 'mayonnaise']
    }
  ];
  
  export default function handler(req: NextApiRequest, res: NextApiResponse<Hamburger[]>) {
    res.status(200).json(hamburgers);
  }