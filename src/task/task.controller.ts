import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/task.dto';
import { TASK } from './interfaces/task';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskServices: TaskService) {}
  @Get()
  getTask(): Array<TASK> {
    return this.taskServices.getTaks();
  }

  @Get(':id')
  getTaskId(@Param('id') id: string) {
    return this.taskServices.getTak(parseInt(id));
  }
  @Post()
  saveTask(@Body() body: CreateTaskDto): string {
    console.log(body);
    return 'Guardando tarea';
  }

  @Put(':id')
  updateTask(
    @Body() task: CreateTaskDto,
    @Param('id') id: number | string,
  ): Array<CreateTaskDto> {
    console.log(task);
    console.log(id);
    return [task];
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number | string): string {
    return `Eliminando tarea numero: ${id}`;
  }
}
