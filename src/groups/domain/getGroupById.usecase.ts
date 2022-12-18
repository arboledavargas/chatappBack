import { Injectable } from "@nestjs/common";
import { Group } from "../../graphql";

@Injectable()
export class GetGroupByIdUsecase {
    async execute(groupId:string):Promise<Group> {
        return {
            id:"",
            members:[],
            messages:[],
            name:"",
            photoUrl:""
        }
    }
}