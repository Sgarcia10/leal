import { User } from 'src/client/app/core/models/user';

const getDefaults = (): User => ({
  _id: 'mock id',
  email: 'mock email',
  firstName: 'mock first name',
  lastName: 'mock last name'
});

export const getUserMock = (p?: Partial<User>): User => ({
  ...getDefaults(),
  ...p
});
