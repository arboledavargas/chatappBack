import { Resolver, Query } from "@nestjs/graphql";
import { Group, Contact, Message } from "../graphql";

@Resolver('Contact')
export class ContactsResolver {

    constructor(){

    }

    @Query()
    async getContacts(): Promise<Contact[]>{
        return [
            {
                id: "id",
                name: "name de prueba",
                photoUrl: "url de prueba",
                title: "title de prueba"
            }
        ]
    }

}