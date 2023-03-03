import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateTaskDto } from './dto/task.dto';

@Controller('task')
export class TaskController {
  @Get()
  getTask(): string {
    return 'obteniendo tarea';
  }

  @Post()
  createPost(@Body() task: CreateTaskDto): string {
    console.log(task);
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
