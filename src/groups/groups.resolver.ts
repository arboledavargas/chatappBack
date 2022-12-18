import { Args, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Group, Message } from "../graphql";
import { GetGroupByIdUsecase } from "./domain/getGroupById.usecase";
@Resolver('Group')
export class GroupsResolver {
    constructor(private getGroupByIdUsecase:GetGroupByIdUsecase){

    }

    @Query()
    async group(@Args('groupId') groupId:string):Promise<Group> {
        return await this.getGroupByIdUsecase.execute(groupId)
    }

    @Query()
    async viewerGroups():Promise<Group[]>{
        return [
            {
                id:"1",
                members:[],
                messages:[],
                name:"group name",
                photoUrl: "dsfsdf"
            }
        ]
    }

    @ResolveField()
    async messages():Promise<Message[]>{
        return [
            {
                dateTimeIso: (new Date()).toISOString(),
                from: "me",
                to_contact:"you",
                id:"hey",
                message:"huhu",
                to_group: null
            }
        ]
    }
}