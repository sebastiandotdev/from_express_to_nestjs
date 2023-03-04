import { Document } from 'mongoose';

export interface TASK extends Document {
  id?: string;
  title: string;
  description: string;
  done: boolean;
}
