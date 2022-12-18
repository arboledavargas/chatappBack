import { Resolver, Query, ResolveField, Args } from "@nestjs/graphql";
import { Group, Contact, Message } from "../graphql";
import { GetContactsByIdUseCase } from "./domain/getContactsById.usecase";
@Resolver('Contact')
export class ContactsResolver {

    constructor( private getContactsByIDUseCase: GetContactsByIdUseCase){

    }

    @Query()
    async contact(@Args('contactId') contactId:string): Promise<Contact>{

        const result = await this.getContactsByIDUseCase.execute(contactId)
        
        return result
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