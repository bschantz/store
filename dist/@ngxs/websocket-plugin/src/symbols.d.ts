import { InjectionToken } from '@angular/core';
export declare const NGXS_WEBSOCKET_OPTIONS: InjectionToken<unknown>;
export interface NgxsWebsocketPluginOptions {
    /**
     * URL of the websocket.
     */
    url?: string;
    /**
     * Either a single protocol string or an array of protocol strings.
     * These strings are used to indicate sub-protocols, so that a single server
     * can implement multiple WebSocket sub-protocols (for example, you might want one server to be able
     * to handle different types of interactions depending on the specified protocol).
     * If you don't specify a protocol string, an empty string is assumed.
     */
    protocol?: string | string[];
    /**
     * Sets the `binaryType` property of the underlying WebSocket.
     */
    binaryType?: 'blob' | 'arraybuffer';
    /**
     * The property name to distigunish this type for the store.
     * Default: 'type'
     */
    typeKey?: string;
    /**
     * Interval to try and reconnect.
     * Default: 5000
     */
    reconnectInterval?: number;
    /**
     * Number of reconnect attemps.
     * Default: 10
     */
    reconnectAttempts?: number;
    /**
     * Serializer to call before sending messages
     * Default: `json.stringify`
     */
    serializer?: (data: any) => string;
    /**
     * Deseralizer before publishing the message.
     */
    deserializer?: (e: MessageEvent) => any;
}
export declare function noop(..._args: any[]): () => void;
/**
 * Action to connect to the websocket. Optionally pass a URL.
 */
export declare class ConnectWebSocket {
    payload?: NgxsWebsocketPluginOptions | undefined;
    static get type(): string;
    constructor(payload?: NgxsWebsocketPluginOptions | undefined);
}
/**
 * Action triggered when a error ocurrs
 */
export declare class WebsocketMessageError {
    payload: any;
    static get type(): string;
    constructor(payload: any);
}
/**
 * Action to disconnect the websocket.
 */
export declare class DisconnectWebSocket {
    static get type(): string;
}
/**
 * Action triggered when websocket is connected
 */
export declare class WebSocketConnected {
    static get type(): string;
}
/**
 * Action triggered when websocket is disconnected
 */
export declare class WebSocketDisconnected {
    static get type(): string;
}
/**
 * Action to send to the server.
 */
export declare class SendWebSocketMessage {
    payload: any;
    static get type(): string;
    constructor(payload: any);
}
/**
 * Action dispatched when the user tries to connect if the connection already exists.
 */
export declare class WebSocketConnectionUpdated {
    static get type(): string;
}
/**
 * This error is thrown where there is no `type` (or custom `typeKey`) property
 * on the message that came from the server side socket
 */
export declare class TypeKeyPropertyMissingError extends Error {
    constructor(typeKey: string);
}
