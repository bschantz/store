/**
 * @fileoverview added by tsickle
 * Generated from: src/symbols.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export const NGXS_WEBSOCKET_OPTIONS = new InjectionToken('NGXS_WEBSOCKET_OPTIONS');
/**
 * @record
 */
export function NgxsWebsocketPluginOptions() { }
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
export function noop(..._args) {
    return (/**
     * @return {?}
     */
    function () { });
}
/**
 * Action to connect to the websocket. Optionally pass a URL.
 */
export class ConnectWebSocket {
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
export class WebsocketMessageError {
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
export class DisconnectWebSocket {
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
export class WebSocketConnected {
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
export class WebSocketDisconnected {
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
export class SendWebSocketMessage {
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
export class WebSocketConnectionUpdated {
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
export class TypeKeyPropertyMissingError extends Error {
    /**
     * @param {?} typeKey
     */
    constructor(typeKey) {
        super(`Property ${typeKey} is missing on the socket message`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ltYm9scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3dlYnNvY2tldC1wbHVnaW4vc3JjL3N5bWJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUvQyxNQUFNLE9BQU8sc0JBQXNCLEdBQUcsSUFBSSxjQUFjLENBQUMsd0JBQXdCLENBQUM7Ozs7QUFFbEYsZ0RBZ0RDOzs7Ozs7SUE1Q0MseUNBQWE7Ozs7Ozs7OztJQVNiLDhDQUE2Qjs7Ozs7SUFLN0IsZ0RBQW9DOzs7Ozs7SUFNcEMsNkNBQWlCOzs7Ozs7SUFNakIsdURBQTJCOzs7Ozs7SUFNM0IsdURBQTJCOzs7Ozs7SUFNM0IsZ0RBQW1DOzs7OztJQUtuQyxrREFBd0M7Ozs7OztBQUcxQyxNQUFNLFVBQVUsSUFBSSxDQUFDLEdBQUcsS0FBWTtJQUNsQzs7O0lBQU8sY0FBWSxDQUFDLEVBQUM7QUFDdkIsQ0FBQzs7OztBQUtELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFLM0IsWUFBbUIsT0FBb0M7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7SUFBRyxDQUFDOzs7O0lBSjNELE1BQU0sS0FBSyxJQUFJO1FBQ2Isc0lBQXNJO1FBQ3RJLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztDQUVGOzs7SUFEYSxtQ0FBMkM7Ozs7O0FBTXpELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFLaEMsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7SUFBRyxDQUFDOzs7O0lBSm5DLE1BQU0sS0FBSyxJQUFJO1FBQ2Isc0lBQXNJO1FBQ3RJLE9BQU8sMkJBQTJCLENBQUM7SUFDckMsQ0FBQztDQUVGOzs7SUFEYSx3Q0FBbUI7Ozs7O0FBTWpDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFDOUIsTUFBTSxLQUFLLElBQUk7UUFDYixzSUFBc0k7UUFDdEksT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7Ozs7QUFLRCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBQzdCLE1BQU0sS0FBSyxJQUFJO1FBQ2IsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7Ozs7QUFLRCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBQ2hDLE1BQU0sS0FBSyxJQUFJO1FBQ2Isc0lBQXNJO1FBQ3RJLE9BQU8sMEJBQTBCLENBQUM7SUFDcEMsQ0FBQztDQUNGOzs7O0FBS0QsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUsvQixZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztJQUFHLENBQUM7Ozs7SUFKbkMsTUFBTSxLQUFLLElBQUk7UUFDYixzSUFBc0k7UUFDdEksT0FBTywwQkFBMEIsQ0FBQztJQUNwQyxDQUFDO0NBRUY7OztJQURhLHVDQUFtQjs7Ozs7QUFNakMsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUNyQyxNQUFNLEtBQUssSUFBSTtRQUNiLHNJQUFzSTtRQUN0SSxPQUFPLGdDQUFnQyxDQUFDO0lBQzFDLENBQUM7Q0FDRjs7Ozs7QUFNRCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsS0FBSzs7OztJQUNwRCxZQUFZLE9BQWU7UUFDekIsS0FBSyxDQUFDLFlBQVksT0FBTyxtQ0FBbUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBOR1hTX1dFQlNPQ0tFVF9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuKCdOR1hTX1dFQlNPQ0tFVF9PUFRJT05TJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4c1dlYnNvY2tldFBsdWdpbk9wdGlvbnMge1xuICAvKipcbiAgICogVVJMIG9mIHRoZSB3ZWJzb2NrZXQuXG4gICAqL1xuICB1cmw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVpdGhlciBhIHNpbmdsZSBwcm90b2NvbCBzdHJpbmcgb3IgYW4gYXJyYXkgb2YgcHJvdG9jb2wgc3RyaW5ncy5cbiAgICogVGhlc2Ugc3RyaW5ncyBhcmUgdXNlZCB0byBpbmRpY2F0ZSBzdWItcHJvdG9jb2xzLCBzbyB0aGF0IGEgc2luZ2xlIHNlcnZlclxuICAgKiBjYW4gaW1wbGVtZW50IG11bHRpcGxlIFdlYlNvY2tldCBzdWItcHJvdG9jb2xzIChmb3IgZXhhbXBsZSwgeW91IG1pZ2h0IHdhbnQgb25lIHNlcnZlciB0byBiZSBhYmxlXG4gICAqIHRvIGhhbmRsZSBkaWZmZXJlbnQgdHlwZXMgb2YgaW50ZXJhY3Rpb25zIGRlcGVuZGluZyBvbiB0aGUgc3BlY2lmaWVkIHByb3RvY29sKS5cbiAgICogSWYgeW91IGRvbid0IHNwZWNpZnkgYSBwcm90b2NvbCBzdHJpbmcsIGFuIGVtcHR5IHN0cmluZyBpcyBhc3N1bWVkLlxuICAgKi9cbiAgcHJvdG9jb2w/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICogU2V0cyB0aGUgYGJpbmFyeVR5cGVgIHByb3BlcnR5IG9mIHRoZSB1bmRlcmx5aW5nIFdlYlNvY2tldC5cbiAgICovXG4gIGJpbmFyeVR5cGU/OiAnYmxvYicgfCAnYXJyYXlidWZmZXInO1xuXG4gIC8qKlxuICAgKiBUaGUgcHJvcGVydHkgbmFtZSB0byBkaXN0aWd1bmlzaCB0aGlzIHR5cGUgZm9yIHRoZSBzdG9yZS5cbiAgICogRGVmYXVsdDogJ3R5cGUnXG4gICAqL1xuICB0eXBlS2V5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJbnRlcnZhbCB0byB0cnkgYW5kIHJlY29ubmVjdC5cbiAgICogRGVmYXVsdDogNTAwMFxuICAgKi9cbiAgcmVjb25uZWN0SW50ZXJ2YWw/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiByZWNvbm5lY3QgYXR0ZW1wcy5cbiAgICogRGVmYXVsdDogMTBcbiAgICovXG4gIHJlY29ubmVjdEF0dGVtcHRzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVyIHRvIGNhbGwgYmVmb3JlIHNlbmRpbmcgbWVzc2FnZXNcbiAgICogRGVmYXVsdDogYGpzb24uc3RyaW5naWZ5YFxuICAgKi9cbiAgc2VyaWFsaXplcj86IChkYXRhOiBhbnkpID0+IHN0cmluZztcblxuICAvKipcbiAgICogRGVzZXJhbGl6ZXIgYmVmb3JlIHB1Ymxpc2hpbmcgdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBkZXNlcmlhbGl6ZXI/OiAoZTogTWVzc2FnZUV2ZW50KSA9PiBhbnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKC4uLl9hcmdzOiBhbnlbXSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7fTtcbn1cblxuLyoqXG4gKiBBY3Rpb24gdG8gY29ubmVjdCB0byB0aGUgd2Vic29ja2V0LiBPcHRpb25hbGx5IHBhc3MgYSBVUkwuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25uZWN0V2ViU29ja2V0IHtcbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIC8vIE5PVEU6IE5vdCBuZWNlc3NhcnkgdG8gZGVjbGFyZSB0aGUgdHlwZSBpbiB0aGlzIHdheSBpbiB5b3VyIGNvZGUuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmd4cy9zdG9yZS9wdWxsLzY0NCNpc3N1ZWNvbW1lbnQtNDM2MDAzMTM4XG4gICAgcmV0dXJuICdbV2ViU29ja2V0XSBDb25uZWN0JztcbiAgfVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZD86IE5neHNXZWJzb2NrZXRQbHVnaW5PcHRpb25zKSB7fVxufVxuXG4vKipcbiAqIEFjdGlvbiB0cmlnZ2VyZWQgd2hlbiBhIGVycm9yIG9jdXJyc1xuICovXG5leHBvcnQgY2xhc3MgV2Vic29ja2V0TWVzc2FnZUVycm9yIHtcbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIC8vIE5PVEU6IE5vdCBuZWNlc3NhcnkgdG8gZGVjbGFyZSB0aGUgdHlwZSBpbiB0aGlzIHdheSBpbiB5b3VyIGNvZGUuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmd4cy9zdG9yZS9wdWxsLzY0NCNpc3N1ZWNvbW1lbnQtNDM2MDAzMTM4XG4gICAgcmV0dXJuICdbV2ViU29ja2V0XSBNZXNzYWdlIEVycm9yJztcbiAgfVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG4vKipcbiAqIEFjdGlvbiB0byBkaXNjb25uZWN0IHRoZSB3ZWJzb2NrZXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEaXNjb25uZWN0V2ViU29ja2V0IHtcbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIC8vIE5PVEU6IE5vdCBuZWNlc3NhcnkgdG8gZGVjbGFyZSB0aGUgdHlwZSBpbiB0aGlzIHdheSBpbiB5b3VyIGNvZGUuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmd4cy9zdG9yZS9wdWxsLzY0NCNpc3N1ZWNvbW1lbnQtNDM2MDAzMTM4XG4gICAgcmV0dXJuICdbV2ViU29ja2V0XSBEaXNjb25uZWN0JztcbiAgfVxufVxuXG4vKipcbiAqIEFjdGlvbiB0cmlnZ2VyZWQgd2hlbiB3ZWJzb2NrZXQgaXMgY29ubmVjdGVkXG4gKi9cbmV4cG9ydCBjbGFzcyBXZWJTb2NrZXRDb25uZWN0ZWQge1xuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdbV2ViU29ja2V0XSBDb25uZWN0ZWQnO1xuICB9XG59XG5cbi8qKlxuICogQWN0aW9uIHRyaWdnZXJlZCB3aGVuIHdlYnNvY2tldCBpcyBkaXNjb25uZWN0ZWRcbiAqL1xuZXhwb3J0IGNsYXNzIFdlYlNvY2tldERpc2Nvbm5lY3RlZCB7XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICAvLyBOT1RFOiBOb3QgbmVjZXNzYXJ5IHRvIGRlY2xhcmUgdGhlIHR5cGUgaW4gdGhpcyB3YXkgaW4geW91ciBjb2RlLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25neHMvc3RvcmUvcHVsbC82NDQjaXNzdWVjb21tZW50LTQzNjAwMzEzOFxuICAgIHJldHVybiAnW1dlYlNvY2tldF0gRGlzY29ubmVjdGVkJztcbiAgfVxufVxuXG4vKipcbiAqIEFjdGlvbiB0byBzZW5kIHRvIHRoZSBzZXJ2ZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZW5kV2ViU29ja2V0TWVzc2FnZSB7XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICAvLyBOT1RFOiBOb3QgbmVjZXNzYXJ5IHRvIGRlY2xhcmUgdGhlIHR5cGUgaW4gdGhpcyB3YXkgaW4geW91ciBjb2RlLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25neHMvc3RvcmUvcHVsbC82NDQjaXNzdWVjb21tZW50LTQzNjAwMzEzOFxuICAgIHJldHVybiAnW1dlYlNvY2tldF0gU2VuZCBNZXNzYWdlJztcbiAgfVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG4vKipcbiAqIEFjdGlvbiBkaXNwYXRjaGVkIHdoZW4gdGhlIHVzZXIgdHJpZXMgdG8gY29ubmVjdCBpZiB0aGUgY29ubmVjdGlvbiBhbHJlYWR5IGV4aXN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFdlYlNvY2tldENvbm5lY3Rpb25VcGRhdGVkIHtcbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIC8vIE5PVEU6IE5vdCBuZWNlc3NhcnkgdG8gZGVjbGFyZSB0aGUgdHlwZSBpbiB0aGlzIHdheSBpbiB5b3VyIGNvZGUuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmd4cy9zdG9yZS9wdWxsLzY0NCNpc3N1ZWNvbW1lbnQtNDM2MDAzMTM4XG4gICAgcmV0dXJuICdbV2ViU29ja2V0XSBDb25uZWN0aW9uIFVwZGF0ZWQnO1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBlcnJvciBpcyB0aHJvd24gd2hlcmUgdGhlcmUgaXMgbm8gYHR5cGVgIChvciBjdXN0b20gYHR5cGVLZXlgKSBwcm9wZXJ0eVxuICogb24gdGhlIG1lc3NhZ2UgdGhhdCBjYW1lIGZyb20gdGhlIHNlcnZlciBzaWRlIHNvY2tldFxuICovXG5leHBvcnQgY2xhc3MgVHlwZUtleVByb3BlcnR5TWlzc2luZ0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih0eXBlS2V5OiBzdHJpbmcpIHtcbiAgICBzdXBlcihgUHJvcGVydHkgJHt0eXBlS2V5fSBpcyBtaXNzaW5nIG9uIHRoZSBzb2NrZXQgbWVzc2FnZWApO1xuICB9XG59XG4iXX0=