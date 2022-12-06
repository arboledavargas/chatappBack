
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
    abstract getGroups(): Group[] | Promise<Group[]>;

    abstract getAllMessages(): Nullable<Message>[] | Promise<Nullable<Message>[]>;

    abstract getMessagesByUser(userId: string): Nullable<Message>[] | Promise<Nullable<Message>[]>;

    abstract getMessagesByGroup(groupId: string): Nullable<Message>[] | Promise<Nullable<Message>[]>;

    abstract getContacts(): Contact[] | Promise<Contact[]>;
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
    to: string;
    dateTimeIso: string;
    message: string;
    isRead: boolean;
}

export class Contact {
    id: string;
    name: string;
    photoUrl: string;
    title: string;
}

type Nullable<T> = T | null;
