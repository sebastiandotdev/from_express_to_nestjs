import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateTaskDto } from './dto/task.dto';

@Controller('task')
export class TaskController {
  @Get()
  getTask(): { hello: string } {
    return { hello: 'world' };
  }

  @Post()
  saveTask(@Body() body: CreateTaskDto): string {
    console.log(body);
    return 'Guardando tarea';
  }

  @Put()
  updateTask(): string {
    return 'Actulizando tarea';
  }

  @Delete()
  deleteTask(): string {
    return 'Eliminando tarea';
  }
}
