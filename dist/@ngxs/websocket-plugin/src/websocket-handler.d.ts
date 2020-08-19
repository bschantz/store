import { Actions, Store } from '@ngxs/store';
import { NgxsWebsocketPluginOptions } from './symbols';
export declare class WebSocketHandler {
    private store;
    private actions$;
    private options;
    private socket;
    private config;
    private typeKey;
    constructor(store: Store, actions$: Actions, options: NgxsWebsocketPluginOptions);
    private setupActionsListeners;
    private connect;
    private disconnect;
    private send;
    /**
     * Don't enlarge the `connect` method
     */
    private mergeConfigWithOptions;
    /**
     * To ensure we don't have any memory leaks
     * e.g. if the user occasionally dispatched `ConnectWebSocket` twice
     * then the previous subscription will still live in the memory
     * to prevent such behavior - we close the previous connection if it exists
     */
    private updateConnection;
    /**
     * Used in many places so it's better to move the code into function
     */
    private dispatchWebSocketDisconnected;
}
