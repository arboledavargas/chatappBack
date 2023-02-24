import { Query, Resolver } from '@nestjs/graphql';
import { Message } from '../graphql';
import { faker } from '@faker-js/faker';

function messageFactory(quantity: number): Message[] {
  const ids = Array(quantity)
    .fill(0)
    .map((_) => faker.datatype.uuid());
  const viewer = faker.datatype.uuid();

  return [...Array(quantity).fill(0)].map((_) => {
    return {
      id: faker.datatype.uuid(),
      from: {
        id: faker.database.mongodbObjectId(),
        name: faker.name.firstName(),
        photoUrl: faker.internet.avatar(),
        title: faker.lorem.sentence(),
      },
      to: {
        id: faker.database.mongodbObjectId(),
        lectures: [],
        members: [],
        messages: [],
      },
      dateTimeIso: faker.date.recent(10).toISOString(),
      isRead: faker.datatype.boolean(),
      message: faker.lorem.sentence(),
    };
  });
}

@Resolver('Message')
export class MessagesResolver {}
