import { Injectable } from '@nestjs/common';
import { TASK } from './interfaces/task';

@Injectable()
export class TaskService {
  task: Array<TASK> = [
    {
      id: 1,
      title: 'string',
      description: 'string',
      done: true,
    },
    {
      id: 2,
      title: 'string',
      description: 'string',
      done: true,
    },
    {
      id: 3,
      title: 'string',
      description: 'string',
      done: true,
    },
    {
      id: 4,
      title: 'string',
      description: 'string',
      done: true,
    },
  ];

  getTaks(): Array<TASK> {
    return this.task;
  }

  getTak(id: number): TASK {
    return this.task.find((taks) => taks.id === id);
  }
}
