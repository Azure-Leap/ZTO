import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Category {
  @Prop({ required: true })
  title: string;
  @Prop()
  image: string;
  @Prop()
  description: string;
}
export const CategorySchema = SchemaFactory.createForClass(Category);
