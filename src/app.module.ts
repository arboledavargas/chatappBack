import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriverConfig, ApolloDriver } from "@nestjs/apollo";
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ContactsResolver } from "./contacts/contacts.resolver";
import { MessagesResolver } from "./messages/messages.resolver";
import { GroupsResolver } from "./groups/groups.resolver";
import { ContactsModule } from "./contacts/contacts.module";
import { GroupsModule } from "./groups/groups.module";
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    ContactsModule,
    GroupsModule
  ],
  controllers: [],
  providers: [ContactsResolver, MessagesResolver, GroupsResolver],
})
export class AppModule {}
