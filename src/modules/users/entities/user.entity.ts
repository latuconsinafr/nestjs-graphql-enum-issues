import { Field, Directive, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserRole } from '../enums/user-role.enum';

@ObjectType()
@Entity()
export class User {
  @Field(() => String, { description: 'The id of user' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Directive('@lower')
  @Field(() => String, { description: 'The username of user' })
  @Column({ unique: true })
  username: string;

  @Field(() => String, { description: 'The email of user' })
  @Column({ unique: true })
  email: string;

  @Field(() => String, { description: 'The phone of user' })
  @Column({ unique: true })
  phone: string;

  @Field(() => String, { description: 'The password of user' })
  @Column()
  password: string;

  @Field(() => [UserRole])
  @Column('enum', { enum: UserRole, array: true, default: [UserRole.User] })
  roles: UserRole[];

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
