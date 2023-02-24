import { Args, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Group, Message } from '../graphql';
import { GetGroupByIdUsecase } from './domain/getGroupById.usecase';
@Resolver('Group')
export class GroupsResolver {
  constructor(private getGroupByIdUsecase: GetGroupByIdUsecase) {}

  @Query()
  async group(@Args('groupId') groupId: string): Promise<Group> {
    return await this.getGroupByIdUsecase.execute(groupId);
  }

  @Query()
  async viewerGroups(): Promise<Group[]> {
    return [
      {
        id: '1',
        members: [],
        name: 'group name',
        photoUrl: 'dsfsdf',
        conversation: {
          id: 'sdf',
          lectures: [],
          members: [],
          messages: [],
        },
      },
    ];
  }
}
