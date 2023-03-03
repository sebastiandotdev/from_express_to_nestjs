import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('task')
export class TaskController {
  @Get()
  getTask(): string {
    return 'obteniendo tarea';
  }

  @Post()
  createPost(): string {
    return 'creando tarea';
  }

  @Put()
  updatePost(): string {
    return 'actulizando una tarea';
  }

  @Delete()
  deletePost(): string {
    return 'eliminando una tarea';
  }
}
