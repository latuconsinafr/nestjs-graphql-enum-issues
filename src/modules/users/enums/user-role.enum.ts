import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  SuperAdmin = 'super-admin',
  User = 'user',
}

registerEnumType(UserRole, {
  name: 'UserRole',
  description: 'The user role',
  valuesMap: {
    SuperAdmin: {
      description: 'The user with highest privilege',
    },
    User: {
      description: 'The regular user',
    },
  },
});
