import { Resolver, Query, ResolveField } from "@nestjs/graphql";
import { Group, Contact, Message } from "../graphql";

@Resolver('Contact')
export class ContactsResolver {

    constructor(){

    }

    @Query()
    async contact(): Promise<Contact>{
        return {
            id: "id",
            name: "name de prueba",
            photoUrl: "url de prueba",
            title: "title de prueba",
            messages:[]
        }
        
    }

    @Query()
    async viewerContacts(): Promise<Contact[]>{
        return [
            {
                id: "id",
                name: "name de prueba",
                photoUrl: "url de prueba",
                title: "title de prueba",
                messages:[]
            }
        ]
    }

    @ResolveField()
    async messages():Promise<Message[]> {
        return [
            {
                dateTimeIso:(new Date()).toISOString(),
                from: "sdf",
                id: "sdkfj",
                "to_contact":"sdfds",
                "to_group":null,
                message: "dfdf"
            }
        ]
    }

}