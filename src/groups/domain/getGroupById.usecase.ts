import { Injectable } from '@nestjs/common';
import { Group } from '../../graphql';

@Injectable()
export class GetGroupByIdUsecase {
  async execute(groupId: string): Promise<Group> {
    return {
      id: '',
      members: [],
      name: '',
      photoUrl: '',
      conversation: {
        id: '',
        lectures: [],
        members: [],
        messages: [],
      },
    };
  }
}
