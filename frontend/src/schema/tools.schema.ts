export interface Category {
  id: string;
  name: string;
  description?: string;
  tools: Tool[];
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  type?: string;
  skillLevel?: string;
  categoryId: string;
  category: Category;
  providers: Provider[];
}

export interface Provider {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  skillLevel: string;
  pricingTiers: PricingTier[];
  toolId: string;
  tool: Tool;
}

export interface PricingTier {
  id: string;
  tierName: string;
  price: number;
  features: string[];
  limitations: string | null;
  providerId: string;
  provider: Provider;
}
