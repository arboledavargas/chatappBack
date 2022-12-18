import { Module } from "@nestjs/common";
import { ContactsResolver } from "./contacts.resolver";
import { GetContactsByIdUseCase } from "./domain/getContactsById.usecase";

@Module({
    providers: [ContactsResolver, GetContactsByIdUseCase]
})
export class ContactsModule {

}