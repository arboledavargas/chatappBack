import { ContactsResolver } from "./contacts.resolver";
import { GetContactsByIdUseCase } from "./domain/getContactsById.usecase";
import { Contact } from "../graphql";
import { Test } from "@nestjs/testing";
import { createMock } from '@golevelup/ts-jest';

describe('ContactsResolver', () => {

    let contactResolver:ContactsResolver;
    let getContactsByIDUseCase: GetContactsByIdUseCase;

    beforeAll(async () => {
        const testingModule = await Test.createTestingModule({
            providers:[ContactsResolver, GetContactsByIdUseCase]
        }).useMocker(createMock).compile()

        contactResolver = testingModule.get(ContactsResolver)
        getContactsByIDUseCase = testingModule.get(GetContactsByIdUseCase)
    })

    describe('get contact', () => {

        afterEach(() => {
            jest.clearAllMocks()
        })

        it('should call the execute method passed as dependency given the contact id parameter', async () => {

            const id = "stub id"

            let executeSpy = jest.spyOn(getContactsByIDUseCase,'execute')

            await contactResolver.contact(id)

            expect(executeSpy).toHaveBeenCalledWith(id)
        })

        it('should return given the response of the execute method', async () => {
            const contact:Contact = {
                id:"id",
                messages:[],
                name:"name",
                photoUrl:"photoUrl",
                title:"title"
            }
            
            const contact2:Contact = {
                id:"id2",
                messages:[],
                name:"name2",
                photoUrl:"photoUrl2",
                title:"title2"
            }

            const id = "stub id"

            jest.spyOn(getContactsByIDUseCase,'execute').mockResolvedValueOnce(contact)
            jest.spyOn(getContactsByIDUseCase,'execute').mockResolvedValueOnce(contact2)

            let result = await contactResolver.contact(id)
            expect(result).toEqual(contact)
            
            let result2 = await contactResolver.contact(id)
            expect(result2).toEqual(contact2)
        })
    })
})