import { Injectable } from '@nestjs/common'
import { Contact } from '../../graphql'

@Injectable()
export class GetContactsByIdUseCase {
    constructor(){
        
    }

    async execute(contactId:string):Promise<Contact>{
        return {
            id:"id",
            messages:[],
            name: "name",
            photoUrl:"fd",
            title:"dfd"
        }
    }
}