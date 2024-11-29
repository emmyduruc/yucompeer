import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateToolDto, UpdateToolDto } from './dto';
import { CreateToolSchema, UpdateToolSchema } from 'src/schema/tech-stack';

const prisma = new PrismaClient();

@Injectable()
export class TechStackService {
  async createTool(data: CreateToolDto) {
    const parsedData = CreateToolSchema.parse(data); // Zod validation
    return prisma.tool.create({ data: parsedData });
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
    const parsedData = UpdateToolSchema.parse(data); // Zod validation
    return prisma.tool.update({
      where: { id },
      data: parsedData,
    });
  }

  async deleteTool(id: string) {
    return prisma.tool.delete({ where: { id } });
  }
}
