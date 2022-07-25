import React from 'react';

export interface childNode {
  props?: {
    children?: React.ReactNode;
  };
  children?: React.ReactNode;
}

export interface postProps {
  postName: string;
  slug: string;
  category: string;
  tag: string;
  image: string;
  location: string;
  spendPerPerson: number;
  brand: string;
  rating: number;
  numLikes: number;
  description: string;
}

export interface recipeProps {
  recipeName: string;
  slug: string;
  category: string;
  tag: string;
  image: string;
  cookingStyle: string;
  budget: number;
  numLikes: number;
  materials: {
    name: string;
    amount: string;
  }[];
  description: string;
  steps: string[];
}
