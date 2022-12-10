import { Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Group, Message } from "../graphql";

@Resolver('Group')
export class GroupsResolver {
    constructor(){

    }

    @Query()
    async group():Promise<Group> {
        return {
            id:"1",
            members:[],
            messages:[],
            name:"group name",
            photoUrl: "dsfsdf"
        }
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