import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateToolDto, UpdateToolDto } from './dto';
import { CreateToolSchema, UpdateToolSchema } from 'src/schema/tech-stack';

const prisma = new PrismaClient();

@Injectable()
export class TechStackService {
  async createTool(data: CreateToolDto) {
    const parsedData = CreateToolSchema.parse(data);
    return prisma.tool.create({
      data: parsedData as any,
      include: { providers: true, category: true },
    });
  }
  async getProvidersByCategory(category: string) {
    const categoryEntity = await prisma.category.findFirst({
      where: { name: { equals: category, mode: 'insensitive' } },
      include: {
        tools: {
          include: {
            providers: {
              include: {
                pricingTiers: true,
              },
            },
          },
        },
      },
    });

    if (!categoryEntity) {
      throw new NotFoundException(`Category "${category}" not found`);
    }

    const providers = categoryEntity.tools.flatMap((tool) => tool.providers);
    return providers;
  }

  async findAllTools() {
    return prisma.tool.findMany({
      include: { providers: true, category: true },
    });
  }

  async findOneTool(id: string) {
    const tool = await prisma.tool.findUnique({
      where: { id },
      include: { providers: true, category: true },
    });
    if (!tool) throw new NotFoundException(`Tool with ID ${id} not found`);
    return tool;
  }

  async updateTool(id: string, data: UpdateToolDto) {
    const parsedData = UpdateToolSchema.parse(data);
    return prisma.tool.update({
      where: { id },
      data: parsedData,
    });
  }

  async deleteTool(id: string) {
    return prisma.tool.delete({ where: { id } });
  }
}
