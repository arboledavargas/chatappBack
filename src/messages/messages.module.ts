import { Module } from "@nestjs/common";
import { MessagesResolver } from "./messages.resolver";

@Module({
    providers:[MessagesResolver]
})
export class MessagesModule {

}