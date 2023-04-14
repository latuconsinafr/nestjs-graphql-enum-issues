import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  async getUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Query(() => User, { name: 'user', nullable: true })
  async getUser(
    @Args('id', { type: () => String }) id: string,
  ): Promise<User | null> {
    return await this.usersService.findById(id);
  }
}
