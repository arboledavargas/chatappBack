
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
    conversation: Conversation;
}

export class Viewer {
    id: string;
    name: string;
    photoUrl: string;
    title: string;
}

export class Message {
    id: string;
    from: Contact;
    to: Conversation;
    dateTimeIso: string;
    message: string;
}

export class Contact {
    id: string;
    name: string;
    photoUrl: string;
    title: string;
}

export class Conversation {
    id: string;
    messages: Message[];
    lectures: Lecture[];
    members: Contact[];
}

export class Lecture {
    id: string;
    user: Contact;
    Conversation: Conversation;
    dateTimeIso?: Nullable<string>;
}

export abstract class IQuery {
    abstract group(groupId: string): Nullable<Group> | Promise<Nullable<Group>>;

    abstract contact(contactId: string): Nullable<Contact> | Promise<Nullable<Contact>>;

    abstract viewerContacts(): Contact[] | Promise<Contact[]>;

    abstract viewerGroups(): Group[] | Promise<Group[]>;
}

export abstract class IMutation {
    abstract postMessage(message?: Nullable<PostMessageInput>): Nullable<PostMessageResponse> | Promise<Nullable<PostMessageResponse>>;

    abstract readMessages(messages?: Nullable<ReadMessagesInput>): Nullable<ReadMessagesResponse> | Promise<Nullable<ReadMessagesResponse>>;
}

type Nullable<T> = T | null;
