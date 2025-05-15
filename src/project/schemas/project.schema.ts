import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Project extends Document {
  @Prop({ required: true, unique: true })
  project_id: string;

  @Prop({ type: Array, default: [] })
  nodes: any[];

  @Prop({ type: Array, default: [] })
  edges: any[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
