import { CreateToolSchema, UpdateToolSchema } from 'src/schema/tech-stack';
import { z } from 'zod';

export type CreateToolDto = z.infer<typeof CreateToolSchema>;

export type UpdateToolDto = z.infer<typeof UpdateToolSchema>;
