import { z } from 'zod';

export const CreateToolSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  type: z.enum(['Relational', 'Non-relational']).optional(),
  skillLevel: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  categoryId: z.string(),
});

export const UpdateToolSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  type: z.enum(['Relational', 'Non-relational']).optional(),
  skillLevel: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),
  categoryId: z.string(),
});

export enum PricingTierSupportEnum {
  STANDARD = 'STANDARD',
  PRIORITY = 'PRIORITY',
}
