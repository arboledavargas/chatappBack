
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class PostMessageInput {
    to: string;
    message: string;
}

export class ReadMessagesInput {
    messages: string[];
}

export abstract class IQuery {
    abstract group(groupId: string): Nullable<Group> | Promise<Nullable<Group>>;

    abstract contact(contactId: string): Nullable<Contact> | Promise<Nullable<Contact>>;

    abstract messagesByGroup(groupId: string): Nullable<Message>[] | Promise<Nullable<Message>[]>;

    abstract messagesByContact(contactId: string): Nullable<Message>[] | Promise<Nullable<Message>[]>;

    abstract viewerContacts(): Contact[] | Promise<Contact[]>;

    abstract viewerGroups(): Group[] | Promise<Group[]>;
}

export abstract class IMutation {
    abstract postMessage(message?: Nullable<PostMessageInput>): Nullable<PostMessageResponse> | Promise<Nullable<PostMessageResponse>>;

    abstract readMessages(messages?: Nullable<ReadMessagesInput>): Nullable<ReadMessagesResponse> | Promise<Nullable<ReadMessagesResponse>>;
}

export class PostMessageResponse {
    status: number;
    success: boolean;
    error?: Nullable<string>;
    message?: Nullable<Message>;
}

export class ReadMessagesResponse {
    status: number;
    success: boolean;
    error?: Nullable<string>;
}

export class Group {
    id: string;
    name: string;
    photoUrl: string;
    members: Contact[];
    messages: Message[];
}

export class Viewer {
    id: string;
    name: string;
    photoUrl: string;
    title: string;
}

export class Message {
    id: string;
    from: string;
    to_contact?: Nullable<string>;
    to_group?: Nullable<string>;
    dateTimeIso: string;
    message: string;
}

export class Contact {
    id: string;
    name: string;
    photoUrl: string;
    title: string;
    messages: Message[];
}

type Nullable<T> = T | null;
