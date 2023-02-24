import { UseGuards } from '@nestjs/common';
import { Args, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Contact, Message } from '../graphql';
import { GetContactsByIdUseCase } from './domain/getContactsById.usecase';
import { JWTGuard } from '../auth/jwt.guard';
@UseGuards(JWTGuard)
@Resolver('Contact')
export class ContactsResolver {
  constructor(private getContactsByIDUseCase: GetContactsByIdUseCase) {}

  @Query()
  async contact(@Args('contactId') contactId: string): Promise<Contact> {
    const result = await this.getContactsByIDUseCase.execute(contactId);

    return result;
  }

  @Query()
  async viewerContacts(): Promise<Contact[]> {
    return [
      {
        id: 'id',
        name: 'name de prueba',
        photoUrl: 'url de prueba',
        title: 'title de prueba',
      },
    ];
  }
}
