import React from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PortfolioItem {
  image: string;
  title: string;
  category: string;
}