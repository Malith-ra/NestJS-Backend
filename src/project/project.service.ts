import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './schemas/project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  async create(createDto: CreateProjectDto) {
    const project = new this.projectModel(createDto);
    return project.save();
  }

  async update(project_id: string, updateDto: UpdateProjectDto) {
    const updated = await this.projectModel.findOneAndUpdate(
      { project_id },
      { $set: updateDto },
      { new: true },
    );
    if (!updated) throw new NotFoundException('Project not found');
    return updated;
  }

  async delete(project_id: string) {
    const deleted = await this.projectModel.findOneAndDelete({ project_id });
    if (!deleted) throw new NotFoundException('Project not found');
    return deleted;
  }

  async findAll() {
    return this.projectModel.find();
  }

  async findOne(project_id: string) {
    const project = await this.projectModel.findOne({ project_id });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }
}
