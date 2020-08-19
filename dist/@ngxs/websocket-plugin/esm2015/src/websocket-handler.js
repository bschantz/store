/**
 * @fileoverview added by tsickle
 * Generated from: src/websocket-handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Actions, Store, getValue, ofActionDispatched } from '@ngxs/store';
import { WebSocketSubject } from 'rxjs/webSocket';
import { ConnectWebSocket, DisconnectWebSocket, SendWebSocketMessage, NGXS_WEBSOCKET_OPTIONS, WebsocketMessageError, WebSocketDisconnected, TypeKeyPropertyMissingError, WebSocketConnectionUpdated, WebSocketConnected } from './symbols';
export class WebSocketHandler {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29ja2V0LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy93ZWJzb2NrZXQtcGx1Z2luL3NyYy93ZWJzb2NrZXQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLHNCQUFzQixFQUV0QixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLDJCQUEyQixFQUMzQiwwQkFBMEIsRUFDMUIsa0JBQWtCLEVBQ25CLE1BQU0sV0FBVyxDQUFDO0FBR25CLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQTBCM0IsWUFDVSxLQUFZLEVBQ1osUUFBaUIsRUFDZSxPQUFtQztRQUZuRSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNlLFlBQU8sR0FBUCxPQUFPLENBQTRCO1FBNUJyRSxXQUFNLEdBQWlDLElBQUksQ0FBQztRQUU1QyxXQUFNLEdBQWdDO1lBQzVDLEdBQUcsRUFBRSxtQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQztZQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFROztZQUUvQixVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO1lBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFDbkMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWTtZQUN2QyxhQUFh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Qjs7Ozs7OztJQTVCaEMsa0NBQW9EOzs7OztJQUVwRCxrQ0FtQkU7Ozs7O0lBRUYsbUNBQXdDOzs7OztJQUd0QyxpQ0FBb0I7Ozs7O0lBQ3BCLG9DQUF5Qjs7Ozs7SUFDekIsbUNBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBTdG9yZSwgZ2V0VmFsdWUsIG9mQWN0aW9uRGlzcGF0Y2hlZCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcblxuaW1wb3J0IHsgV2ViU29ja2V0U3ViamVjdCwgV2ViU29ja2V0U3ViamVjdENvbmZpZyB9IGZyb20gJ3J4anMvd2ViU29ja2V0JztcblxuaW1wb3J0IHtcbiAgQ29ubmVjdFdlYlNvY2tldCxcbiAgRGlzY29ubmVjdFdlYlNvY2tldCxcbiAgU2VuZFdlYlNvY2tldE1lc3NhZ2UsXG4gIE5HWFNfV0VCU09DS0VUX09QVElPTlMsXG4gIE5neHNXZWJzb2NrZXRQbHVnaW5PcHRpb25zLFxuICBXZWJzb2NrZXRNZXNzYWdlRXJyb3IsXG4gIFdlYlNvY2tldERpc2Nvbm5lY3RlZCxcbiAgVHlwZUtleVByb3BlcnR5TWlzc2luZ0Vycm9yLFxuICBXZWJTb2NrZXRDb25uZWN0aW9uVXBkYXRlZCxcbiAgV2ViU29ja2V0Q29ubmVjdGVkXG59IGZyb20gJy4vc3ltYm9scyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJTb2NrZXRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBzb2NrZXQ6IFdlYlNvY2tldFN1YmplY3Q8YW55PiB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgY29uZmlnOiBXZWJTb2NrZXRTdWJqZWN0Q29uZmlnPGFueT4gPSB7XG4gICAgdXJsOiB0aGlzLm9wdGlvbnMudXJsISxcbiAgICBwcm90b2NvbDogdGhpcy5vcHRpb25zLnByb3RvY29sLFxuICAgIC8vIERlZmF1bHQgYmluYXJ5IHR5cGUgaXMgYGJsb2JgIGZvciB0aGUgZ2xvYmFsIGBXZWJTb2NrZXRgXG4gICAgYmluYXJ5VHlwZTogdGhpcy5vcHRpb25zLmJpbmFyeVR5cGUsXG4gICAgc2VyaWFsaXplcjogdGhpcy5vcHRpb25zLnNlcmlhbGl6ZXIsXG4gICAgZGVzZXJpYWxpemVyOiB0aGlzLm9wdGlvbnMuZGVzZXJpYWxpemVyLFxuICAgIGNsb3NlT2JzZXJ2ZXI6IHtcbiAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgLy8gQVRURU5USU9OIVxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0aXZlWC9yeGpzL2Jsb2IvbWFzdGVyL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2RvbS9XZWJTb2NrZXRTdWJqZWN0LnRzI0wzNDBcbiAgICAgICAgLy8gUnhKUyBzb2NrZXQgZW1pdHMgYG9uQ29tcGxldGVgIGV2ZW50IG9ubHkgaWYgYGV2ZW50Lndhc0NsZWFuYCBpcyB0cnV0aHlcbiAgICAgICAgLy8gYW5kIGRvZXNuJ3QgY29tcGxldGUgc29ja2V0IHN1YmplY3QgaWYgaXQncyBmYWxzeVxuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9wZW5PYnNlcnZlcjoge1xuICAgICAgbmV4dDogKCkgPT4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgV2ViU29ja2V0Q29ubmVjdGVkKCkpXG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgdHlwZUtleSA9IHRoaXMub3B0aW9ucy50eXBlS2V5ITtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoTkdYU19XRUJTT0NLRVRfT1BUSU9OUykgcHJpdmF0ZSBvcHRpb25zOiBOZ3hzV2Vic29ja2V0UGx1Z2luT3B0aW9uc1xuICApIHtcbiAgICB0aGlzLnNldHVwQWN0aW9uc0xpc3RlbmVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cEFjdGlvbnNMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy5hY3Rpb25zJC5waXBlKG9mQWN0aW9uRGlzcGF0Y2hlZChDb25uZWN0V2ViU29ja2V0KSkuc3Vic2NyaWJlKCh7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0KHBheWxvYWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3Rpb25zJC5waXBlKG9mQWN0aW9uRGlzcGF0Y2hlZChEaXNjb25uZWN0V2ViU29ja2V0KSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3Rpb25zJC5waXBlKG9mQWN0aW9uRGlzcGF0Y2hlZChTZW5kV2ViU29ja2V0TWVzc2FnZSkpLnN1YnNjcmliZSgoeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHRoaXMuc2VuZChwYXlsb2FkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY29ubmVjdChvcHRpb25zPzogTmd4c1dlYnNvY2tldFBsdWdpbk9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNvbm5lY3Rpb24oKTtcblxuICAgIC8vIFVzZXJzIGNhbiBwYXNzIHRoZSBvcHRpb25zIGluIHRoZSBjb25uZWN0IG1ldGhvZCBzb1xuICAgIC8vIGlmIG9wdGlvbnMgYXJlbid0IGF2YWlsYWJsZSBhdCBESSBib290c3RyYXAgdGhleSBoYXZlIGFjY2Vzc1xuICAgIC8vIHRvIHBhc3MgdGhlbSBoZXJlXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMubWVyZ2VDb25maWdXaXRoT3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXRTdWJqZWN0KHRoaXMuY29uZmlnKTtcblxuICAgIHRoaXMuc29ja2V0LnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAobWVzc2FnZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRWYWx1ZShtZXNzYWdlLCB0aGlzLnR5cGVLZXkpO1xuICAgICAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUtleVByb3BlcnR5TWlzc2luZ0Vycm9yKHRoaXMudHlwZUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IC4uLm1lc3NhZ2UsIHR5cGUgfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIENsb3NlRXZlbnQpIHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoV2ViU29ja2V0RGlzY29ubmVjdGVkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgV2Vic29ja2V0TWVzc2FnZUVycm9yKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgIC8vIGBzb2NrZXQuY29tcGxldGUoKWAgY2xvc2VzIHRoZSBjb25uZWN0aW9uXG4gICAgICAvLyBhbHNvIGl0IGRvZXNuJ3QgaW52b2tlIHRoZSBgb25Db21wbGV0ZWAgY2FsbGJhY2sgdGhhdCB3ZSBwYXNzZWRcbiAgICAgIC8vIGludG8gYHNvY2tldC5zdWJzY3JpYmUoLi4uKWBcbiAgICAgIHRoaXMuc29ja2V0LmNvbXBsZXRlKCk7XG4gICAgICB0aGlzLnNvY2tldCA9IG51bGw7XG4gICAgICB0aGlzLmRpc3BhdGNoV2ViU29ja2V0RGlzY29ubmVjdGVkKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZW5kKGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zb2NrZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgY29ubmVjdCB0byB0aGUgc29ja2V0IGJlZm9yZSBzZW5kaW5nIGFueSBkYXRhJyk7XG4gICAgfVxuXG4gICAgdGhpcy5zb2NrZXQubmV4dChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEb24ndCBlbmxhcmdlIHRoZSBgY29ubmVjdGAgbWV0aG9kXG4gICAqL1xuICBwcml2YXRlIG1lcmdlQ29uZmlnV2l0aE9wdGlvbnMob3B0aW9uczogTmd4c1dlYnNvY2tldFBsdWdpbk9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAob3B0aW9ucy51cmwpIHtcbiAgICAgIHRoaXMuY29uZmlnLnVybCA9IG9wdGlvbnMudXJsO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnNlcmlhbGl6ZXIpIHtcbiAgICAgIHRoaXMuY29uZmlnLnNlcmlhbGl6ZXIgPSBvcHRpb25zLnNlcmlhbGl6ZXI7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZGVzZXJpYWxpemVyKSB7XG4gICAgICB0aGlzLmNvbmZpZy5kZXNlcmlhbGl6ZXIgPSBvcHRpb25zLmRlc2VyaWFsaXplcjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG8gZW5zdXJlIHdlIGRvbid0IGhhdmUgYW55IG1lbW9yeSBsZWFrc1xuICAgKiBlLmcuIGlmIHRoZSB1c2VyIG9jY2FzaW9uYWxseSBkaXNwYXRjaGVkIGBDb25uZWN0V2ViU29ja2V0YCB0d2ljZVxuICAgKiB0aGVuIHRoZSBwcmV2aW91cyBzdWJzY3JpcHRpb24gd2lsbCBzdGlsbCBsaXZlIGluIHRoZSBtZW1vcnlcbiAgICogdG8gcHJldmVudCBzdWNoIGJlaGF2aW9yIC0gd2UgY2xvc2UgdGhlIHByZXZpb3VzIGNvbm5lY3Rpb24gaWYgaXQgZXhpc3RzXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZUNvbm5lY3Rpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICB0aGlzLnNvY2tldC5jb21wbGV0ZSgpO1xuICAgICAgdGhpcy5zb2NrZXQgPSBudWxsO1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgV2ViU29ja2V0Q29ubmVjdGlvblVwZGF0ZWQoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgaW4gbWFueSBwbGFjZXMgc28gaXQncyBiZXR0ZXIgdG8gbW92ZSB0aGUgY29kZSBpbnRvIGZ1bmN0aW9uXG4gICAqL1xuICBwcml2YXRlIGRpc3BhdGNoV2ViU29ja2V0RGlzY29ubmVjdGVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFdlYlNvY2tldERpc2Nvbm5lY3RlZCgpKTtcbiAgfVxufVxuIl19