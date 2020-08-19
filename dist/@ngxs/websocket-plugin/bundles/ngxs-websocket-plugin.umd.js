(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngxs/store'), require('rxjs/webSocket')) :
    typeof define === 'function' && define.amd ? define('@ngxs/websocket-plugin', ['exports', '@angular/core', '@ngxs/store', 'rxjs/webSocket'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ngxs = global.ngxs || {}, global.ngxs['websocket-plugin'] = {}), global.ng.core, global['ngxs-store'], global.rxjs.webSocket));
}(this, (function (exports, core, store, webSocket) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __createBinding(o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    }
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                exports[p] = m[p];
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    result[k] = mod[k];
        result.default = mod;
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /** @type {?} */
    var NGXS_WEBSOCKET_OPTIONS = new core.InjectionToken('NGXS_WEBSOCKET_OPTIONS');
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
    function noop() {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        return ( /**
         * @return {?}
         */function () { });
    }
    /**
     * Action to connect to the websocket. Optionally pass a URL.
     */
    var ConnectWebSocket = /** @class */ (function () {
        /**
         * @param {?=} payload
         */
        function ConnectWebSocket(payload) {
            this.payload = payload;
        }
        Object.defineProperty(ConnectWebSocket, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[WebSocket] Connect';
            },
            enumerable: false,
            configurable: true
        });
        return ConnectWebSocket;
    }());
    if (false) {
        /** @type {?} */
        ConnectWebSocket.prototype.payload;
    }
    /**
     * Action triggered when a error ocurrs
     */
    var WebsocketMessageError = /** @class */ (function () {
        /**
         * @param {?} payload
         */
        function WebsocketMessageError(payload) {
            this.payload = payload;
        }
        Object.defineProperty(WebsocketMessageError, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[WebSocket] Message Error';
            },
            enumerable: false,
            configurable: true
        });
        return WebsocketMessageError;
    }());
    if (false) {
        /** @type {?} */
        WebsocketMessageError.prototype.payload;
    }
    /**
     * Action to disconnect the websocket.
     */
    var DisconnectWebSocket = /** @class */ (function () {
        function DisconnectWebSocket() {
        }
        Object.defineProperty(DisconnectWebSocket, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[WebSocket] Disconnect';
            },
            enumerable: false,
            configurable: true
        });
        return DisconnectWebSocket;
    }());
    /**
     * Action triggered when websocket is connected
     */
    var WebSocketConnected = /** @class */ (function () {
        function WebSocketConnected() {
        }
        Object.defineProperty(WebSocketConnected, "type", {
            /**
             * @return {?}
             */
            get: function () {
                return '[WebSocket] Connected';
            },
            enumerable: false,
            configurable: true
        });
        return WebSocketConnected;
    }());
    /**
     * Action triggered when websocket is disconnected
     */
    var WebSocketDisconnected = /** @class */ (function () {
        function WebSocketDisconnected() {
        }
        Object.defineProperty(WebSocketDisconnected, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[WebSocket] Disconnected';
            },
            enumerable: false,
            configurable: true
        });
        return WebSocketDisconnected;
    }());
    /**
     * Action to send to the server.
     */
    var SendWebSocketMessage = /** @class */ (function () {
        /**
         * @param {?} payload
         */
        function SendWebSocketMessage(payload) {
            this.payload = payload;
        }
        Object.defineProperty(SendWebSocketMessage, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[WebSocket] Send Message';
            },
            enumerable: false,
            configurable: true
        });
        return SendWebSocketMessage;
    }());
    if (false) {
        /** @type {?} */
        SendWebSocketMessage.prototype.payload;
    }
    /**
     * Action dispatched when the user tries to connect if the connection already exists.
     */
    var WebSocketConnectionUpdated = /** @class */ (function () {
        function WebSocketConnectionUpdated() {
        }
        Object.defineProperty(WebSocketConnectionUpdated, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[WebSocket] Connection Updated';
            },
            enumerable: false,
            configurable: true
        });
        return WebSocketConnectionUpdated;
    }());
    /**
     * This error is thrown where there is no `type` (or custom `typeKey`) property
     * on the message that came from the server side socket
     */
    var TypeKeyPropertyMissingError = /** @class */ (function (_super) {
        __extends(TypeKeyPropertyMissingError, _super);
        /**
         * @param {?} typeKey
         */
        function TypeKeyPropertyMissingError(typeKey) {
            return _super.call(this, "Property " + typeKey + " is missing on the socket message") || this;
        }
        return TypeKeyPropertyMissingError;
    }(Error));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/websocket-handler.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WebSocketHandler = /** @class */ (function () {
        /**
         * @param {?} store
         * @param {?} actions$
         * @param {?} options
         */
        function WebSocketHandler(store, actions$, options) {
            var _this = this;
            this.store = store;
            this.actions$ = actions$;
            this.options = options;
            this.socket = null;
            this.config = {
                url: ( /** @type {?} */(this.options.url)),
                protocol: this.options.protocol,
                // Default binary type is `blob` for the global `WebSocket`
                binaryType: this.options.binaryType,
                serializer: this.options.serializer,
                deserializer: this.options.deserializer,
                closeObserver: {
                    next: ( /**
                     * @return {?}
                     */function () {
                        // ATTENTION!
                        // See https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/dom/WebSocketSubject.ts#L340
                        // RxJS socket emits `onComplete` event only if `event.wasClean` is truthy
                        // and doesn't complete socket subject if it's falsy
                        _this.disconnect();
                    })
                },
                openObserver: {
                    next: ( /**
                     * @return {?}
                     */function () { return _this.store.dispatch(new WebSocketConnected()); })
                }
            };
            this.typeKey = ( /** @type {?} */(this.options.typeKey));
            this.setupActionsListeners();
        }
        /**
         * @private
         * @return {?}
         */
        WebSocketHandler.prototype.setupActionsListeners = function () {
            var _this = this;
            this.actions$.pipe(store.ofActionDispatched(ConnectWebSocket)).subscribe(( /**
             * @param {?} __0
             * @return {?}
             */function (_a) {
                var payload = _a.payload;
                _this.connect(payload);
            }));
            this.actions$.pipe(store.ofActionDispatched(DisconnectWebSocket)).subscribe(( /**
             * @return {?}
             */function () {
                _this.disconnect();
            }));
            this.actions$.pipe(store.ofActionDispatched(SendWebSocketMessage)).subscribe(( /**
             * @param {?} __0
             * @return {?}
             */function (_a) {
                var payload = _a.payload;
                _this.send(payload);
            }));
        };
        /**
         * @private
         * @param {?=} options
         * @return {?}
         */
        WebSocketHandler.prototype.connect = function (options) {
            var _this = this;
            this.updateConnection();
            // Users can pass the options in the connect method so
            // if options aren't available at DI bootstrap they have access
            // to pass them here
            if (options) {
                this.mergeConfigWithOptions(options);
            }
            this.socket = new webSocket.WebSocketSubject(this.config);
            this.socket.subscribe({
                next: ( /**
                 * @param {?} message
                 * @return {?}
                 */function (message) {
                    /** @type {?} */
                    var type = store.getValue(message, _this.typeKey);
                    if (!type) {
                        throw new TypeKeyPropertyMissingError(_this.typeKey);
                    }
                    _this.store.dispatch(Object.assign(Object.assign({}, message), { type: type }));
                }),
                error: ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    if (error instanceof CloseEvent) {
                        _this.dispatchWebSocketDisconnected();
                    }
                    else {
                        _this.store.dispatch(new WebsocketMessageError(error));
                    }
                })
            });
        };
        /**
         * @private
         * @return {?}
         */
        WebSocketHandler.prototype.disconnect = function () {
            if (this.socket) {
                // `socket.complete()` closes the connection
                // also it doesn't invoke the `onComplete` callback that we passed
                // into `socket.subscribe(...)`
                this.socket.complete();
                this.socket = null;
                this.dispatchWebSocketDisconnected();
            }
        };
        /**
         * @private
         * @param {?} data
         * @return {?}
         */
        WebSocketHandler.prototype.send = function (data) {
            if (!this.socket) {
                throw new Error('You must connect to the socket before sending any data');
            }
            this.socket.next(data);
        };
        /**
         * Don't enlarge the `connect` method
         * @private
         * @param {?} options
         * @return {?}
         */
        WebSocketHandler.prototype.mergeConfigWithOptions = function (options) {
            if (options.url) {
                this.config.url = options.url;
            }
            if (options.serializer) {
                this.config.serializer = options.serializer;
            }
            if (options.deserializer) {
                this.config.deserializer = options.deserializer;
            }
        };
        /**
         * To ensure we don't have any memory leaks
         * e.g. if the user occasionally dispatched `ConnectWebSocket` twice
         * then the previous subscription will still live in the memory
         * to prevent such behavior - we close the previous connection if it exists
         * @private
         * @return {?}
         */
        WebSocketHandler.prototype.updateConnection = function () {
            if (this.socket) {
                this.socket.complete();
                this.socket = null;
                this.store.dispatch(new WebSocketConnectionUpdated());
            }
        };
        /**
         * Used in many places so it's better to move the code into function
         * @private
         * @return {?}
         */
        WebSocketHandler.prototype.dispatchWebSocketDisconnected = function () {
            this.store.dispatch(new WebSocketDisconnected());
        };
        return WebSocketHandler;
    }());
    WebSocketHandler.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    WebSocketHandler.ctorParameters = function () { return [
        { type: store.Store },
        { type: store.Actions },
        { type: undefined, decorators: [{ type: core.Inject, args: [NGXS_WEBSOCKET_OPTIONS,] }] }
    ]; };
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
                 */ deserializer: function (e) {
                return JSON.parse(e.data);
            },
            /**
             * @param {?} value
             * @return {?}
             */
            serializer: function (value) {
                return JSON.stringify(value);
            } }, options);
    }
    /** @type {?} */
    var USER_OPTIONS = new core.InjectionToken('USER_OPTIONS');
    var NgxsWebsocketPluginModule = /** @class */ (function () {
        function NgxsWebsocketPluginModule() {
        }
        /**
         * @param {?=} options
         * @return {?}
         */
        NgxsWebsocketPluginModule.forRoot = function (options) {
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
                        provide: core.APP_INITIALIZER,
                        useFactory: noop,
                        deps: [WebSocketHandler],
                        multi: true
                    }
                ]
            };
        };
        return NgxsWebsocketPluginModule;
    }());
    NgxsWebsocketPluginModule.decorators = [
        { type: core.NgModule }
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

    exports.ConnectWebSocket = ConnectWebSocket;
    exports.DisconnectWebSocket = DisconnectWebSocket;
    exports.NGXS_WEBSOCKET_OPTIONS = NGXS_WEBSOCKET_OPTIONS;
    exports.NgxsWebsocketPluginModule = NgxsWebsocketPluginModule;
    exports.SendWebSocketMessage = SendWebSocketMessage;
    exports.WebSocketConnected = WebSocketConnected;
    exports.WebSocketConnectionUpdated = WebSocketConnectionUpdated;
    exports.WebSocketDisconnected = WebSocketDisconnected;
    exports.WebsocketMessageError = WebsocketMessageError;
    exports.ɵa = websocketOptionsFactory;
    exports.ɵb = USER_OPTIONS;
    exports.ɵc = noop;
    exports.ɵd = WebSocketHandler;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngxs-websocket-plugin.umd.js.map
