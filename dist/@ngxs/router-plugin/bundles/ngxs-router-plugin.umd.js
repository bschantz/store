(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngxs/store'), require('@angular/router'), require('@angular/common'), require('@ngxs/store/internals'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ngxs/router-plugin', ['exports', '@angular/core', '@ngxs/store', '@angular/router', '@angular/common', '@ngxs/store/internals', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ngxs = global.ngxs || {}, global.ngxs['router-plugin'] = {}), global.ng.core, global['ngxs-store'], global.ng.router, global.ng.common, global['ngxs-store-internals'], global.rxjs.operators));
}(this, (function (exports, core, store, router, common, internals, operators) { 'use strict';

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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/router.actions.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Public event api of the router
     */
    var Navigate = /** @class */ (function () {
        /**
         * @param {?} path
         * @param {?=} queryParams
         * @param {?=} extras
         */
        function Navigate(path, queryParams, extras) {
            this.path = path;
            this.queryParams = queryParams;
            this.extras = extras;
        }
        Object.defineProperty(Navigate, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[Router] Navigate';
            },
            enumerable: false,
            configurable: true
        });
        return Navigate;
    }());
    if (false) {
        /** @type {?} */
        Navigate.prototype.path;
        /** @type {?} */
        Navigate.prototype.queryParams;
        /** @type {?} */
        Navigate.prototype.extras;
    }
    /**
     *
     * Angular Routers internal state events
     *
     */
    /**
     * An action dispatched when the router navigates.
     * @template T
     */
    var RouterNavigation = /** @class */ (function () {
        /**
         * @param {?} routerState
         * @param {?} event
         * @param {?=} trigger
         */
        function RouterNavigation(routerState, event, trigger) {
            if (trigger === void 0) { trigger = 'none'; }
            this.routerState = routerState;
            this.event = event;
            this.trigger = trigger;
        }
        Object.defineProperty(RouterNavigation, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[Router] RouterNavigation';
            },
            enumerable: false,
            configurable: true
        });
        return RouterNavigation;
    }());
    if (false) {
        /** @type {?} */
        RouterNavigation.prototype.routerState;
        /** @type {?} */
        RouterNavigation.prototype.event;
        /** @type {?} */
        RouterNavigation.prototype.trigger;
    }
    /**
     * An action dispatched when the router cancel navigation.
     * @template T, V
     */
    var RouterCancel = /** @class */ (function () {
        /**
         * @param {?} routerState
         * @param {?} storeState
         * @param {?} event
         * @param {?=} trigger
         */
        function RouterCancel(routerState, storeState, event, trigger) {
            if (trigger === void 0) { trigger = 'none'; }
            this.routerState = routerState;
            this.storeState = storeState;
            this.event = event;
            this.trigger = trigger;
        }
        Object.defineProperty(RouterCancel, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[Router] RouterCancel';
            },
            enumerable: false,
            configurable: true
        });
        return RouterCancel;
    }());
    if (false) {
        /** @type {?} */
        RouterCancel.prototype.routerState;
        /** @type {?} */
        RouterCancel.prototype.storeState;
        /** @type {?} */
        RouterCancel.prototype.event;
        /** @type {?} */
        RouterCancel.prototype.trigger;
    }
    /**
     * An action dispatched when the router errors.
     * @template T, V
     */
    var RouterError = /** @class */ (function () {
        /**
         * @param {?} routerState
         * @param {?} storeState
         * @param {?} event
         * @param {?=} trigger
         */
        function RouterError(routerState, storeState, event, trigger) {
            if (trigger === void 0) { trigger = 'none'; }
            this.routerState = routerState;
            this.storeState = storeState;
            this.event = event;
            this.trigger = trigger;
        }
        Object.defineProperty(RouterError, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[Router] RouterError';
            },
            enumerable: false,
            configurable: true
        });
        return RouterError;
    }());
    if (false) {
        /** @type {?} */
        RouterError.prototype.routerState;
        /** @type {?} */
        RouterError.prototype.storeState;
        /** @type {?} */
        RouterError.prototype.event;
        /** @type {?} */
        RouterError.prototype.trigger;
    }
    /**
     * An action dispatched when the `ResolveEnd` event is triggered.
     * @template T
     */
    var RouterDataResolved = /** @class */ (function () {
        /**
         * @param {?} routerState
         * @param {?} event
         * @param {?=} trigger
         */
        function RouterDataResolved(routerState, event, trigger) {
            if (trigger === void 0) { trigger = 'none'; }
            this.routerState = routerState;
            this.event = event;
            this.trigger = trigger;
        }
        Object.defineProperty(RouterDataResolved, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[Router] RouterDataResolved';
            },
            enumerable: false,
            configurable: true
        });
        return RouterDataResolved;
    }());
    if (false) {
        /** @type {?} */
        RouterDataResolved.prototype.routerState;
        /** @type {?} */
        RouterDataResolved.prototype.event;
        /** @type {?} */
        RouterDataResolved.prototype.trigger;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/serializer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template T
     */
    var RouterStateSerializer = /** @class */ (function () {
        function RouterStateSerializer() {
        }
        return RouterStateSerializer;
    }());
    if (false) {
        /**
         * @abstract
         * @param {?} routerState
         * @return {?}
         */
        RouterStateSerializer.prototype.serialize = function (routerState) { };
    }
    /**
     * @record
     */
    function SerializedRouterStateSnapshot() { }
    if (false) {
        /** @type {?} */
        SerializedRouterStateSnapshot.prototype.root;
        /** @type {?} */
        SerializedRouterStateSnapshot.prototype.url;
    }
    var DefaultRouterStateSerializer = /** @class */ (function () {
        function DefaultRouterStateSerializer() {
        }
        /**
         * @param {?} routerState
         * @return {?}
         */
        DefaultRouterStateSerializer.prototype.serialize = function (routerState) {
            return {
                root: this.serializeRoute(routerState.root),
                url: routerState.url
            };
        };
        /**
         * @private
         * @param {?} route
         * @return {?}
         */
        DefaultRouterStateSerializer.prototype.serializeRoute = function (route) {
            var _this = this;
            /** @type {?} */
            var children = route.children.map(( /**
             * @param {?} c
             * @return {?}
             */function (/**
             * @param {?} c
             * @return {?}
             */ c) { return _this.serializeRoute(c); }));
            return {
                url: route.url,
                params: route.params,
                queryParams: route.queryParams,
                fragment: route.fragment,
                data: route.data,
                outlet: route.outlet,
                component: null,
                routeConfig: null,
                root: ( /** @type {?} */(null)),
                parent: null,
                firstChild: children[0],
                children: children,
                pathFromRoot: ( /** @type {?} */(null)),
                paramMap: route.paramMap,
                queryParamMap: route.queryParamMap,
                toString: route.toString
            };
        };
        return DefaultRouterStateSerializer;
    }());

    var RouterState_1;
    /**
     * @record
     * @template T
     */
    function RouterStateModel() { }
    if (false) {
        /** @type {?|undefined} */
        RouterStateModel.prototype.state;
        /** @type {?|undefined} */
        RouterStateModel.prototype.navigationId;
        /** @type {?} */
        RouterStateModel.prototype.trigger;
    }
    exports.RouterState = RouterState_1 = /** @class */ (function () {
        /**
         * @param {?} _store
         * @param {?} _router
         * @param {?} _serializer
         * @param {?} _ngZone
         * @param {?} _urlSerializer
         * @param {?} _locationStrategy
         * @param {?} _location
         */
        function RouterState(_store, _router, _serializer, _ngZone, _urlSerializer, _locationStrategy, _location) {
            this._store = _store;
            this._router = _router;
            this._serializer = _serializer;
            this._ngZone = _ngZone;
            this._urlSerializer = _urlSerializer;
            this._locationStrategy = _locationStrategy;
            this._location = _location;
            /**
             * Determines how navigation was performed by the `RouterState` itself
             * or outside via `new Navigate(...)`
             */
            this._trigger = 'none';
            /**
             * That's the serialized state from the `Router` class
             */
            this._routerState = null;
            /**
             * That's the value of the `RouterState` state
             */
            this._storeState = null;
            this._lastRoutesRecognized = ( /** @type {?} */(null));
            this.setUpStoreListener();
            this.setUpRouterEventsListener();
            this.checkInitialNavigationOnce();
        }
        /**
         * @template T
         * @param {?} state
         * @return {?}
         */
        RouterState.state = function (state) {
            return state && state.state;
        };
        /**
         * @param {?} state
         * @return {?}
         */
        RouterState.url = function (state) {
            return state && state.state && state.state.url;
        };
        /**
         * @param {?} _
         * @param {?} action
         * @return {?}
         */
        RouterState.prototype.navigate = function (_, action) {
            var _this = this;
            return this._ngZone.run(( /**
             * @return {?}
             */function () { return _this._router.navigate(action.path, Object.assign({ queryParams: action.queryParams }, action.extras)); }));
        };
        /**
         * @param {?} ctx
         * @param {?} action
         * @return {?}
         */
        RouterState.prototype.angularRouterAction = function (ctx, action) {
            ctx.setState(Object.assign(Object.assign({}, ctx.getState()), { trigger: action.trigger, state: action.routerState, navigationId: action.event.id }));
        };
        /**
         * @private
         * @return {?}
         */
        RouterState.prototype.setUpStoreListener = function () {
            var _this = this;
            this._store.select(RouterState_1).subscribe(( /**
             * @param {?} state
             * @return {?}
             */function (state) {
                _this.navigateIfNeeded(state);
            }));
        };
        /**
         * @private
         * @return {?}
         */
        RouterState.prototype.setUpRouterEventsListener = function () {
            var _this = this;
            this._router.events.subscribe(( /**
             * @param {?} event
             * @return {?}
             */function (/**
             * @param {?} event
             * @return {?}
             */ event) {
                if (event instanceof router.NavigationStart) {
                    _this.navigationStart();
                }
                else if (event instanceof router.RoutesRecognized) {
                    _this._lastRoutesRecognized = event;
                }
                else if (event instanceof router.ResolveEnd) {
                    _this.dispatchRouterDataResolved(event);
                }
                else if (event instanceof router.NavigationCancel) {
                    _this.dispatchRouterCancel(event);
                    _this.reset();
                }
                else if (event instanceof router.NavigationError) {
                    _this.dispatchRouterError(event);
                    _this.reset();
                }
                else if (event instanceof router.NavigationEnd) {
                    _this.navigationEnd();
                    _this.reset();
                }
            }));
        };
        /**
         * @private
         * @return {?}
         */
        RouterState.prototype.navigationStart = function () {
            this._routerState = this._serializer.serialize(this._router.routerState.snapshot);
            if (this._trigger !== 'none') {
                this._storeState = this._store.selectSnapshot(RouterState_1);
            }
        };
        /**
         * @private
         * @return {?}
         */
        RouterState.prototype.navigationEnd = function () {
            if (this.shouldDispatchRouterNavigation()) {
                this.dispatchRouterNavigation();
            }
        };
        /**
         * @private
         * @return {?}
         */
        RouterState.prototype.shouldDispatchRouterNavigation = function () {
            if (!this._storeState)
                return true;
            return this._trigger !== 'store';
        };
        /**
         * @private
         * @param {?} state
         * @return {?}
         */
        RouterState.prototype.navigateIfNeeded = function (state) {
            var _this = this;
            /** @type {?} */
            var canSkipNavigation = !this._storeState ||
                !this._storeState.state ||
                !state ||
                state.trigger === 'router' ||
                this._router.url === this._storeState.state.url;
            if (canSkipNavigation) {
                return;
            }
            this._trigger = 'store';
            this._ngZone.run(( /**
             * @return {?}
             */function () {
                _this._router.navigateByUrl(( /** @type {?} */(( /** @type {?} */(_this._storeState)).state)).url);
            }));
        };
        /**
         * @private
         * @return {?}
         */
        RouterState.prototype.dispatchRouterNavigation = function () {
            /** @type {?} */
            var nextRouterState = this._serializer.serialize(this._lastRoutesRecognized.state);
            this.dispatchRouterAction(new RouterNavigation(nextRouterState, new router.RoutesRecognized(this._lastRoutesRecognized.id, this._lastRoutesRecognized.url, this._lastRoutesRecognized.urlAfterRedirects, nextRouterState), this._trigger));
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        RouterState.prototype.dispatchRouterCancel = function (event) {
            this.dispatchRouterAction(new RouterCancel(( /** @type {?} */(this._routerState)), this._storeState, event, this._trigger));
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        RouterState.prototype.dispatchRouterError = function (event) {
            this.dispatchRouterAction(new RouterError(( /** @type {?} */(this._routerState)), this._storeState, new router.NavigationError(event.id, event.url, "" + event), this._trigger));
        };
        /**
         * @private
         * @template T
         * @param {?} action
         * @return {?}
         */
        RouterState.prototype.dispatchRouterAction = function (action) {
            this._trigger = 'router';
            try {
                this._store.dispatch(action);
            }
            finally {
                this._trigger = 'none';
            }
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        RouterState.prototype.dispatchRouterDataResolved = function (event) {
            /** @type {?} */
            var routerState = this._serializer.serialize(event.state);
            this.dispatchRouterAction(new RouterDataResolved(routerState, event, this._trigger));
        };
        /**
         * @private
         * @return {?}
         */
        RouterState.prototype.reset = function () {
            this._trigger = 'none';
            this._storeState = null;
            this._routerState = null;
        };
        /**
         * No sense to mess up the `setUpRouterEventsListener` method as we have
         * to perform this check only once and unsubscribe after the first event
         * is triggered
         * @private
         * @return {?}
         */
        RouterState.prototype.checkInitialNavigationOnce = function () {
            var _this = this;
            if (internals.isAngularInTestMode()) {
                return;
            }
            this._router.events
                .pipe(operators.first(( /**
         * @param {?} event
         * @return {?}
         */function (event) { return event instanceof router.RoutesRecognized; })))
                .subscribe(( /**
         * @param {?} __0
         * @return {?}
         */function (_a) {
                var url = _a.url;
                // `location.pathname` always equals manually entered URL in the address bar
                // e.g. `location.pathname === '/foo'`, but the `router` state has been initialized
                // with another URL (e.g. used in combination with `NgxsStoragePlugin`), thus the
                // `RouterNavigation` action will be dispatched and the user will be redirected to the
                // previously saved URL. We want to prevent such behavior, so we perform this check
                // `location.pathname` always equals manually entered URL in the address bar
                // e.g. `location.pathname === '/foo'`, but the `router` state has been initialized
                // with another URL (e.g. used in combination with `NgxsStoragePlugin`), thus the
                // `RouterNavigation` action will be dispatched and the user will be redirected to the
                // previously saved URL. We want to prevent such behavior, so we perform this check
                // `url` is a recognized URL by the Angular's router, while `currentUrl` is an actual URL
                // entered in the browser's address bar
                // `PathLocationStrategy.prototype.path()` returns a concatenation of
                // `PlatformLocation.pathname` and normalized `PlatformLocation.search`.
                // `Location.prototype.normalize` strips base href from the URL,
                // if `baseHref` (declared in angular.json) for example is `/en`
                // and the URL is `/test#anchor` - then `_locationStrategy.path(true)` will return `/en/test#anchor`,
                // but `/en/test#anchor` is not known to the Angular's router, so we have to strip `/en`
                // from the URL
                /** @type {?} */
                var currentUrl = _this._location.normalize(_this._locationStrategy.path(true));
                /** @type {?} */
                var currentUrlTree = _this._urlSerializer.parse(currentUrl);
                // We need to serialize the URL because in that example `/test/?redirect=https://google.com/`
                // Angular will recognize it as `/test?redirect=https:%2F%2Fwww.google.com%2F`
                // so we have to run the `currentUrl` via the `UrlSerializer` that will encode characters
                /** @type {?} */
                var currentSerializedUrl = _this._urlSerializer.serialize(currentUrlTree);
                // If URLs differ from each other - we've got to perform a redirect to the manually entered URL
                // in the address bar, as it must have a priority
                if (currentSerializedUrl !== url) {
                    _this._router.navigateByUrl(currentUrl);
                }
            }));
        };
        return RouterState;
    }());
    exports.RouterState.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    exports.RouterState.ctorParameters = function () { return [
        { type: store.Store },
        { type: router.Router },
        { type: RouterStateSerializer },
        { type: core.NgZone },
        { type: router.UrlSerializer },
        { type: common.LocationStrategy },
        { type: common.Location }
    ]; };
    __decorate([
        store.Action(Navigate),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Navigate]),
        __metadata("design:returntype", void 0)
    ], exports.RouterState.prototype, "navigate", null);
    __decorate([
        store.Action([RouterNavigation, RouterError, RouterCancel, RouterDataResolved]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], exports.RouterState.prototype, "angularRouterAction", null);
    __decorate([
        store.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], exports.RouterState, "state", null);
    __decorate([
        store.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], exports.RouterState, "url", null);
    exports.RouterState = RouterState_1 = __decorate([
        store.State({
            name: 'router',
            defaults: {
                state: undefined,
                navigationId: undefined,
                trigger: 'none'
            }
        }),
        __metadata("design:paramtypes", [store.Store,
            router.Router,
            RouterStateSerializer,
            core.NgZone,
            router.UrlSerializer,
            common.LocationStrategy,
            common.Location])
    ], exports.RouterState);
    if (false) {
        /**
         * Determines how navigation was performed by the `RouterState` itself
         * or outside via `new Navigate(...)`
         * @type {?}
         * @private
         */
        exports.RouterState.prototype._trigger;
        /**
         * That's the serialized state from the `Router` class
         * @type {?}
         * @private
         */
        exports.RouterState.prototype._routerState;
        /**
         * That's the value of the `RouterState` state
         * @type {?}
         * @private
         */
        exports.RouterState.prototype._storeState;
        /**
         * @type {?}
         * @private
         */
        exports.RouterState.prototype._lastRoutesRecognized;
        /**
         * @type {?}
         * @private
         */
        exports.RouterState.prototype._store;
        /**
         * @type {?}
         * @private
         */
        exports.RouterState.prototype._router;
        /**
         * @type {?}
         * @private
         */
        exports.RouterState.prototype._serializer;
        /**
         * @type {?}
         * @private
         */
        exports.RouterState.prototype._ngZone;
        /**
         * @type {?}
         * @private
         */
        exports.RouterState.prototype._urlSerializer;
        /**
         * @type {?}
         * @private
         */
        exports.RouterState.prototype._locationStrategy;
        /**
         * @type {?}
         * @private
         */
        exports.RouterState.prototype._location;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/router.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxsRouterPluginModule = /** @class */ (function () {
        function NgxsRouterPluginModule() {
        }
        /**
         * @return {?}
         */
        NgxsRouterPluginModule.forRoot = function () {
            return {
                ngModule: NgxsRouterPluginModule,
                providers: [{ provide: RouterStateSerializer, useClass: DefaultRouterStateSerializer }]
            };
        };
        return NgxsRouterPluginModule;
    }());
    NgxsRouterPluginModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [store.NgxsModule.forFeature([exports.RouterState])]
                },] }
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
     * Generated from: ngxs-router-plugin.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.DefaultRouterStateSerializer = DefaultRouterStateSerializer;
    exports.Navigate = Navigate;
    exports.NgxsRouterPluginModule = NgxsRouterPluginModule;
    exports.RouterCancel = RouterCancel;
    exports.RouterDataResolved = RouterDataResolved;
    exports.RouterError = RouterError;
    exports.RouterNavigation = RouterNavigation;
    exports.RouterStateSerializer = RouterStateSerializer;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngxs-router-plugin.umd.js.map