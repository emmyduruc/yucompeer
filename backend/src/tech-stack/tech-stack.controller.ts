import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TechStackService } from './tech-stack.service';
import { CreateToolDto, UpdateToolDto } from './dto';

@Controller('tech-stack')
export class TechStackController {
  constructor(private readonly techStackService: TechStackService) {}

  @Post()
  async create(@Body() body: CreateToolDto) {
    return await this.techStackService.createTool(body as CreateToolDto);
  }

  @Get()
  async findAll() {
    return this.techStackService.findAllTools();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.techStackService.findOneTool(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateToolDto) {
    return this.techStackService.updateTool(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.techStackService.deleteTool(id);
  }
}
