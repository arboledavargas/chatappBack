import { Module } from '@nestjs/common';
import { GroupsResolver } from './groups.resolver';
import { GetGroupByIdUsecase } from './domain/getGroupById.usecase';
@Module({
  providers: [GroupsResolver, GetGroupByIdUsecase],
})
export class GroupsModule {}
