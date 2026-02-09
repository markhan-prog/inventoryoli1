import React from 'react';

export interface PricingTier {
  id: string;
  name: string;
  limit: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: React.ReactNode;
  stat?: string;
}