import { GroupsResolver } from "./groups.resolver";
import { Test } from "@nestjs/testing";
import { createMock } from "@golevelup/ts-jest";
import { GetGroupByIdUsecase } from './domain/getGroupById.usecase'
import { Group } from "../graphql";

describe('GroupsResolver', () => {

    let groupsResolver:GroupsResolver
    let getGroupByIdUsecase:GetGroupByIdUsecase
    beforeEach(async () => {
        const testModule = await Test.createTestingModule({
            providers:[GroupsResolver, GetGroupByIdUsecase]
        }).useMocker(createMock).compile()

        groupsResolver = testModule.get(GroupsResolver)
        getGroupByIdUsecase = testModule.get(GetGroupByIdUsecase)
    })

    afterEach(() => { jest.clearAllMocks() })

    describe('group', () => {
        it('should return the response of the execute method', async () => {
            const groupId:string = "groupid"
            
            const group:Group = {
                id: "id",
                members: [],
                messages: [],
                name: "name",
                photoUrl: "url"
            };

            const group2:Group = {
                id:"id2",
                members:[],
                messages:[],
                name:"name2",
                photoUrl:"url2"
            }

            jest.spyOn(getGroupByIdUsecase,'execute').mockResolvedValueOnce(group)
            jest.spyOn(getGroupByIdUsecase,'execute').mockResolvedValueOnce(group2)

            let result = await groupsResolver.group(groupId)

            expect(result).toEqual(group)

            let result2 = await groupsResolver.group(groupId)

            expect(result2).toEqual(group2)
        })

        it('should call the execute method with the correct parameters', async () => {
            const executeSpy = jest.spyOn(getGroupByIdUsecase,'execute')

            const groupID = "1"

            let result = await groupsResolver.group(groupID)

            expect(executeSpy).toBeCalledWith(groupID)
        })
    })
})