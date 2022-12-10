import { Query, Resolver } from "@nestjs/graphql";
import { Message } from "../graphql";
import { faker } from '@faker-js/faker';

function messageFactory(quantity:number):Message[]{

    let ids = Array(quantity).fill(0).map(_ => faker.datatype.uuid())
    let viewer = faker.datatype.uuid() 

    return [...Array(quantity).fill(0)].map(_ => {
        return {
            id: faker.datatype.uuid(),
            from: faker.helpers.arrayElement(ids),
            to: viewer,
            dateTimeIso: faker.date.recent(10).toISOString(),
            isRead: faker.datatype.boolean(),
            message: faker.lorem.sentence()
        }
    })
}

@Resolver('Message')
export class MessagesResolver {

    @Query()
    async messagesByContact():Promise<Message[]>{
        return messageFactory(23)
    }

    @Query()
    async messagesByGroup():Promise<Message[]>{
        return messageFactory(23)
    }

}