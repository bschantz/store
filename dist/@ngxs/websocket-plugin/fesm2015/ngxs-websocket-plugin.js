import { InjectionToken, Injectable, Inject, APP_INITIALIZER, NgModule } from '@angular/core';
import { ofActionDispatched, getValue, Store, Actions } from '@ngxs/store';
import { WebSocketSubject } from 'rxjs/webSocket';

/**
 * @fileoverview added by tsickle
 * Generated from: src/symbols.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NGXS_WEBSOCKET_OPTIONS = new InjectionToken('NGXS_WEBSOCKET_OPTIONS');
/**
 * @record
 */
function NgxsWebsocketPluginOptions() { }
if (false) {
    /**
     * URL of the websocket.
     * @type {?|undefined}
     */
    NgxsWebsocketPluginOptions.prototype.url;
    /**
     * Either a single protocol string or an array of protocol strings.
     * These strings are used to indicate sub-protocols, so that a single server
     * can implement multiple WebSocket sub-protocols (for example, you might want one server to be able
     * to handle different types of interactions depending on the specified protocol).
     * If you don't specify a protocol string, an empty string is assumed.
     * @type {?|undefined}
     */
    NgxsWebsocketPluginOptions.prototype.protocol;
    /**
     * Sets the `binaryType` property of the underlying WebSocket.
     * @type {?|undefined}
     */
    NgxsWebsocketPluginOptions.prototype.binaryType;
    /**
     * The property name to distigunish this type for the store.
     * Default: 'type'
     * @type {?|undefined}
     */
    NgxsWebsocketPluginOptions.prototype.typeKey;
    /**
     * Interval to try and reconnect.
     * Default: 5000
     * @type {?|undefined}
     */
    NgxsWebsocketPluginOptions.prototype.reconnectInterval;
    /**
     * Number of reconnect attemps.
     * Default: 10
     * @type {?|undefined}
     */
    NgxsWebsocketPluginOptions.prototype.reconnectAttempts;
    /**
     * Serializer to call before sending messages
     * Default: `json.stringify`
     * @type {?|undefined}
     */
    NgxsWebsocketPluginOptions.prototype.serializer;
    /**
     * Deseralizer before publishing the message.
     * @type {?|undefined}
     */
    NgxsWebsocketPluginOptions.prototype.deserializer;
}
/**
 * @param {...?} _args
 * @return {?}
 */
function noop(..._args) {
    return (/**
     * @return {?}
     */
    function () { });
}
/**
 * Action to connect to the websocket. Optionally pass a URL.
 */
class ConnectWebSocket {
    /**
     * @param {?=} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '[WebSocket] Connect';
    }
}
if (false) {
    /** @type {?} */
    ConnectWebSocket.prototype.payload;
}
/**
 * Action triggered when a error ocurrs
 */
class WebsocketMessageError {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '[WebSocket] Message Error';
    }
}
if (false) {
    /** @type {?} */
    WebsocketMessageError.prototype.payload;
}
/**
 * Action to disconnect the websocket.
 */
class DisconnectWebSocket {
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '[WebSocket] Disconnect';
    }
}
/**
 * Action triggered when websocket is connected
 */
class WebSocketConnected {
    /**
     * @return {?}
     */
    static get type() {
        return '[WebSocket] Connected';
    }
}
/**
 * Action triggered when websocket is disconnected
 */
class WebSocketDisconnected {
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '[WebSocket] Disconnected';
    }
}
/**
 * Action to send to the server.
 */
class SendWebSocketMessage {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '[WebSocket] Send Message';
    }
}
if (false) {
    /** @type {?} */
    SendWebSocketMessage.prototype.payload;
}
/**
 * Action dispatched when the user tries to connect if the connection already exists.
 */
class WebSocketConnectionUpdated {
    /**
     * @return {?}
     */
    static get type() {
        // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
        return '[WebSocket] Connection Updated';
    }
}
/**
 * This error is thrown where there is no `type` (or custom `typeKey`) property
 * on the message that came from the server side socket
 */
class TypeKeyPropertyMissingError extends Error {
    /**
     * @param {?} typeKey
     */
    constructor(typeKey) {
        super(`Property ${typeKey} is missing on the socket message`);
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/websocket-handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WebSocketHandler {
    /**
     * @param {?} store
     * @param {?} actions$
     * @param {?} options
     */
    constructor(store, actions$, options) {
        this.store = store;
        this.actions$ = actions$;
        this.options = options;
        this.socket = null;
        this.config = {
            url: (/** @type {?} */ (this.options.url)),
            protocol: this.options.protocol,
            // Default binary type is `blob` for the global `WebSocket`
            binaryType: this.options.binaryType,
            serializer: this.options.serializer,
            deserializer: this.options.deserializer,
            closeObserver: {
                next: (/**
                 * @return {?}
                 */
                () => {
                    // ATTENTION!
                    // See https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/dom/WebSocketSubject.ts#L340
                    // RxJS socket emits `onComplete` event only if `event.wasClean` is truthy
                    // and doesn't complete socket subject if it's falsy
                    this.disconnect();
                })
            },
            openObserver: {
                next: (/**
                 * @return {?}
                 */
                () => this.store.dispatch(new WebSocketConnected()))
            }
        };
        this.typeKey = (/** @type {?} */ (this.options.typeKey));
        this.setupActionsListeners();
    }
    /**
     * @private
     * @return {?}
     */
    setupActionsListeners() {
        this.actions$.pipe(ofActionDispatched(ConnectWebSocket)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ payload }) => {
            this.connect(payload);
        }));
        this.actions$.pipe(ofActionDispatched(DisconnectWebSocket)).subscribe((/**
         * @return {?}
         */
        () => {
            this.disconnect();
        }));
        this.actions$.pipe(ofActionDispatched(SendWebSocketMessage)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ payload }) => {
            this.send(payload);
        }));
    }
    /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    connect(options) {
        this.updateConnection();
        // Users can pass the options in the connect method so
        // if options aren't available at DI bootstrap they have access
        // to pass them here
        if (options) {
            this.mergeConfigWithOptions(options);
        }
        this.socket = new WebSocketSubject(this.config);
        this.socket.subscribe({
            next: (/**
             * @param {?} message
             * @return {?}
             */
            (message) => {
                /** @type {?} */
                const type = getValue(message, this.typeKey);
                if (!type) {
                    throw new TypeKeyPropertyMissingError(this.typeKey);
                }
                this.store.dispatch(Object.assign(Object.assign({}, message), { type }));
            }),
            error: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                if (error instanceof CloseEvent) {
                    this.dispatchWebSocketDisconnected();
                }
                else {
                    this.store.dispatch(new WebsocketMessageError(error));
                }
            })
        });
    }
    /**
     * @private
     * @return {?}
     */
    disconnect() {
        if (this.socket) {
            // `socket.complete()` closes the connection
            // also it doesn't invoke the `onComplete` callback that we passed
            // into `socket.subscribe(...)`
            this.socket.complete();
            this.socket = null;
            this.dispatchWebSocketDisconnected();
        }
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    send(data) {
        if (!this.socket) {
            throw new Error('You must connect to the socket before sending any data');
        }
        this.socket.next(data);
    }
    /**
     * Don't enlarge the `connect` method
     * @private
     * @param {?} options
     * @return {?}
     */
    mergeConfigWithOptions(options) {
        if (options.url) {
            this.config.url = options.url;
        }
        if (options.serializer) {
            this.config.serializer = options.serializer;
        }
        if (options.deserializer) {
            this.config.deserializer = options.deserializer;
        }
    }
    /**
     * To ensure we don't have any memory leaks
     * e.g. if the user occasionally dispatched `ConnectWebSocket` twice
     * then the previous subscription will still live in the memory
     * to prevent such behavior - we close the previous connection if it exists
     * @private
     * @return {?}
     */
    updateConnection() {
        if (this.socket) {
            this.socket.complete();
            this.socket = null;
            this.store.dispatch(new WebSocketConnectionUpdated());
        }
    }
    /**
     * Used in many places so it's better to move the code into function
     * @private
     * @return {?}
     */
    dispatchWebSocketDisconnected() {
        this.store.dispatch(new WebSocketDisconnected());
    }
}
WebSocketHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WebSocketHandler.ctorParameters = () => [
    { type: Store },
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [NGXS_WEBSOCKET_OPTIONS,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    WebSocketHandler.prototype.socket;
    /**
     * @type {?}
     * @private
     */
    WebSocketHandler.prototype.config;
    /**
     * @type {?}
     * @private
     */
    WebSocketHandler.prototype.typeKey;
    /**
     * @type {?}
     * @private
     */
    WebSocketHandler.prototype.store;
    /**
     * @type {?}
     * @private
     */
    WebSocketHandler.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    WebSocketHandler.prototype.options;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/websocket.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} options
 * @return {?}
 */
function websocketOptionsFactory(options) {
    return Object.assign({ reconnectInterval: 5000, reconnectAttempts: 10, typeKey: 'type', /**
         * @param {?} e
         * @return {?}
         */
        deserializer(e) {
            return JSON.parse(e.data);
        },
        /**
         * @param {?} value
         * @return {?}
         */
        serializer(value) {
            return JSON.stringify(value);
        } }, options);
}
/** @type {?} */
const USER_OPTIONS = new InjectionToken('USER_OPTIONS');
class NgxsWebsocketPluginModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: NgxsWebsocketPluginModule,
            providers: [
                WebSocketHandler,
                {
                    provide: USER_OPTIONS,
                    useValue: options
                },
                {
                    provide: NGXS_WEBSOCKET_OPTIONS,
                    useFactory: websocketOptionsFactory,
                    deps: [USER_OPTIONS]
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: noop,
                    deps: [WebSocketHandler],
                    multi: true
                }
            ]
        };
    }
}
NgxsWebsocketPluginModule.decorators = [
    { type: NgModule }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngxs-websocket-plugin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ConnectWebSocket, DisconnectWebSocket, NGXS_WEBSOCKET_OPTIONS, NgxsWebsocketPluginModule, SendWebSocketMessage, WebSocketConnected, WebSocketConnectionUpdated, WebSocketDisconnected, WebsocketMessageError, websocketOptionsFactory as ɵa, USER_OPTIONS as ɵb, noop as ɵc, WebSocketHandler as ɵd };
//# sourceMappingURL=ngxs-websocket-plugin.js.map
