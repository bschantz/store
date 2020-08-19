(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngxs/store/internals'), require('@ngxs/store'), require('@ngxs/store/operators')) :
    typeof define === 'function' && define.amd ? define('@ngxs/hmr-plugin', ['exports', '@angular/core', '@ngxs/store/internals', '@ngxs/store', '@ngxs/store/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ngxs = global.ngxs || {}, global.ngxs['hmr-plugin'] = {}), global.ng.core, global['ngxs-store-internals'], global['ngxs-store'], global['ngxs-store-operators']));
}(this, (function (exports, core, internals, store, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: src/actions/hmr-init.action.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HmrInitAction = /** @class */ (function () {
        /**
         * @param {?} payload
         */
        function HmrInitAction(payload) {
            this.payload = payload;
        }
        Object.defineProperty(HmrInitAction, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '@@HMR_INIT';
            },
            enumerable: false,
            configurable: true
        });
        return HmrInitAction;
    }());
    if (false) {
        /** @type {?} */
        HmrInitAction.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/actions/hmr-before-destroy.action.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HmrBeforeDestroyAction = /** @class */ (function () {
        /**
         * @param {?} payload
         */
        function HmrBeforeDestroyAction(payload) {
            this.payload = payload;
        }
        Object.defineProperty(HmrBeforeDestroyAction, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '@@HMR_BEFORE_DESTROY';
            },
            enumerable: false,
            configurable: true
        });
        return HmrBeforeDestroyAction;
    }());
    if (false) {
        /** @type {?} */
        HmrBeforeDestroyAction.prototype.payload;
    }

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
     * Generated from: src/internal/hmr-state-context-factory.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T, S
     */
    var HmrStateContextFactory = /** @class */ (function () {
        /**
         * @param {?} module
         */
        function HmrStateContextFactory(module) {
            /** @type {?} */
            var store$1 = module.injector.get(store.Store, undefined);
            if (!store$1) {
                throw new Error('Store not found, maybe you forgot to import the NgxsModule');
            }
            this.store = store$1;
        }
        /**
         * \@description
         * must be taken out into  \@ngxs/store/internals
         * @return {?}
         */
        HmrStateContextFactory.prototype.createStateContext = function () {
            var _this = this;
            return {
                dispatch: ( /**
                 * @param {?} actions
                 * @return {?}
                 */function (/**
                 * @param {?} actions
                 * @return {?}
                 */ actions) { return ( /** @type {?} */(_this.store)).dispatch(actions); }),
                getState: ( /**
                 * @return {?}
                 */function () { return ( /** @type {?} */(( /** @type {?} */(_this.store)).snapshot())); }),
                setState: ( /**
                 * @param {?} val
                 * @return {?}
                 */function (/**
                 * @param {?} val
                 * @return {?}
                 */ val) {
                    if (operators.isStateOperator(val)) {
                        /** @type {?} */
                        var currentState = ( /** @type {?} */(_this.store)).snapshot();
                        val = val(currentState);
                    }
                    ( /** @type {?} */(_this.store)).reset(val);
                    return ( /** @type {?} */(val));
                }),
                patchState: ( /**
                 * @param {?} val
                 * @return {?}
                 */function (/**
                 * @param {?} val
                 * @return {?}
                 */ val) {
                    /** @type {?} */
                    var currentState = ( /** @type {?} */(_this.store)).snapshot();
                    /** @type {?} */
                    var newState = Object.assign(Object.assign({}, currentState), (( /** @type {?} */(val))));
                    ( /** @type {?} */(_this.store)).reset(newState);
                    return newState;
                })
            };
        };
        return HmrStateContextFactory;
    }());
    if (false) {
        /** @type {?} */
        HmrStateContextFactory.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/internal/hmr-options-builder.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HmrOptionBuilder = /** @class */ (function () {
        /**
         * @param {?} __0
         */
        function HmrOptionBuilder(_a) {
            var deferTime = _a.deferTime, autoClearLogs = _a.autoClearLogs;
            this.deferTime = deferTime || 100;
            this.autoClearLogs = autoClearLogs === undefined ? true : autoClearLogs;
        }
        /**
         * @return {?}
         */
        HmrOptionBuilder.prototype.clearLogs = function () {
            if (this.autoClearLogs) {
                console.clear();
            }
        };
        return HmrOptionBuilder;
    }());
    if (false) {
        /** @type {?} */
        HmrOptionBuilder.prototype.deferTime;
        /** @type {?} */
        HmrOptionBuilder.prototype.autoClearLogs;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/internal/hmr-lifecycle.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T, S
     */
    var HmrLifecycle = /** @class */ (function () {
        /**
         * @param {?} ngAppModule
         * @param {?} bootstrap
         * @param {?} storage
         * @param {?} context
         * @param {?} options
         */
        function HmrLifecycle(ngAppModule, bootstrap, storage, context, options) {
            this.ngAppModule = ngAppModule;
            this.bootstrap = bootstrap;
            this.storage = storage;
            this.context = context;
            this.options = options;
        }
        /**
         * @param {?} hmrAfterOnInit
         * @return {?}
         */
        HmrLifecycle.prototype.hmrNgxsStoreOnInit = function (hmrAfterOnInit) {
            /** @type {?} */
            var moduleHmrInit = this.getModuleHmrInitCallback();
            moduleHmrInit = moduleHmrInit.bind(this.ngAppModule);
            this.detectIvyWithJIT();
            this.stateEventLoop(( /**
             * @param {?} ctx
             * @param {?} state
             * @return {?}
             */function (ctx, state) {
                moduleHmrInit(ctx, state);
                hmrAfterOnInit(ctx, state);
            }));
        };
        /**
         * @private
         * @return {?}
         */
        HmrLifecycle.prototype.getModuleHmrInitCallback = function () {
            if (typeof this.ngAppModule.hmrNgxsStoreOnInit === 'function') {
                return this.ngAppModule.hmrNgxsStoreOnInit;
            }
            return ( /**
             * @param {?} ctx
             * @param {?} state
             * @return {?}
             */function defaultModuleHmrInit(ctx, state) {
                ctx.patchState(state);
            });
        };
        /**
         * @return {?}
         */
        HmrLifecycle.prototype.hmrNgxsStoreBeforeOnDestroy = function () {
            /** @type {?} */
            var state = {};
            /** @type {?} */
            var ctx = this.context.createStateContext();
            if (typeof this.ngAppModule.hmrNgxsStoreBeforeOnDestroy === 'function') {
                state = this.ngAppModule.hmrNgxsStoreBeforeOnDestroy(ctx);
            }
            else {
                state = ctx.getState();
            }
            ctx.dispatch(new HmrBeforeDestroyAction(state));
            return state;
        };
        /**
         * @private
         * @param {?} callback
         * @return {?}
         */
        HmrLifecycle.prototype.stateEventLoop = function (callback) {
            var _this = this;
            if (!this.storage.hasData())
                return;
            /** @type {?} */
            var appBootstrapped$ = this.bootstrap.appBootstrapped$;
            /** @type {?} */
            var state$ = this.context.store.select(( /**
             * @param {?} state
             * @return {?}
             */function (/**
             * @param {?} state
             * @return {?}
             */ state) { return state; }));
            appBootstrapped$.subscribe(( /**
             * @return {?}
             */function () {
                /** @type {?} */
                var eventId;
                /** @type {?} */
                var storeEventId = state$.subscribe(( /**
                 * @return {?}
                 */function () {
                    // setTimeout used for zone detection after set hmr state
                    clearInterval(eventId);
                    eventId = window.setTimeout(( /**
                     * @return {?}
                     */function () {
                        // close check on the message queue
                        storeEventId.unsubscribe();
                        // if events are no longer running on the call stack,
                        // then we can update the state
                        callback(_this.context.createStateContext(), ( /** @type {?} */(_this.storage.snapshot)));
                    }), _this.options.deferTime);
                }));
            }));
        };
        /**
         * @private
         * @return {?}
         */
        HmrLifecycle.prototype.detectIvyWithJIT = function () {
            /** @type {?} */
            var jit = this.ngAppModule.constructor.hasOwnProperty('__annotations__');
            /** @type {?} */
            var ivy = this.ngAppModule.constructor.hasOwnProperty('ɵmod');
            if (jit && ivy) {
                throw new Error("@ngxs/hmr-plugin doesn't work with JIT mode in Angular Ivy. Please use AOT mode.");
            }
        };
        return HmrLifecycle;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        HmrLifecycle.prototype.ngAppModule;
        /**
         * @type {?}
         * @private
         */
        HmrLifecycle.prototype.bootstrap;
        /**
         * @type {?}
         * @private
         */
        HmrLifecycle.prototype.storage;
        /**
         * @type {?}
         * @private
         */
        HmrLifecycle.prototype.context;
        /**
         * @type {?}
         * @private
         */
        HmrLifecycle.prototype.options;
    }

    /**
     * @template T, S
     */
    var HmrManager = /** @class */ (function () {
        /**
         * @param {?} options
         * @param {?} storage
         */
        function HmrManager(options, storage) {
            this.storage = storage;
            this.optionsBuilder = new HmrOptionBuilder(options);
        }
        Object.defineProperty(HmrManager.prototype, "applicationRef", {
            /**
             * @private
             * @return {?}
             */
            get: function () {
                return this.ngModule.injector.get(core.ApplicationRef);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HmrManager.prototype, "bootstrap", {
            /**
             * @private
             * @return {?}
             */
            get: function () {
                return this.ngModule.injector.get(internals.NgxsBootstrapper);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} bootstrapFn
         * @param {?} tick
         * @return {?}
         */
        HmrManager.prototype.hmrModule = function (bootstrapFn, tick) {
            return __awaiter(this, void 0, void 0, function () {
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            internals.InitialState.set(this.storage.snapshot);
                            _b = this;
                            return [4 /*yield*/, bootstrapFn()];
                        case 1:
                            _b.ngModule = _c.sent();
                            this.context = new HmrStateContextFactory(this.ngModule);
                            this.lifecycle = this.createLifecycle();
                            tick();
                            internals.InitialState.pop();
                            return [2 /*return*/, this.ngModule];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        HmrManager.prototype.beforeModuleBootstrap = function () {
            this.lifecycle.hmrNgxsStoreOnInit(( /**
             * @param {?} ctx
             * @param {?} state
             * @return {?}
             */function (ctx, state) {
                ctx.dispatch(new HmrInitAction(state));
            }));
        };
        /**
         * @return {?}
         */
        HmrManager.prototype.beforeModuleOnDestroy = function () {
            this.optionsBuilder.clearLogs();
            return this.lifecycle.hmrNgxsStoreBeforeOnDestroy();
        };
        /**
         * @return {?}
         */
        HmrManager.prototype.createNewModule = function () {
            /** @type {?} */
            var removeOldHosts = this.cloneHostsBeforeDestroy();
            this.removeNgStyles();
            this.ngModule.destroy();
            removeOldHosts();
        };
        /**
         * @private
         * @return {?}
         */
        HmrManager.prototype.createLifecycle = function () {
            return new HmrLifecycle(this.ngModule.instance, this.bootstrap, this.storage, this.context, this.optionsBuilder);
        };
        /**
         * @private
         * @return {?}
         */
        HmrManager.prototype.cloneHostsBeforeDestroy = function () {
            /** @type {?} */
            var elements = this.applicationRef.components.map(( /**
             * @param {?} component
             * @return {?}
             */function (component) { return component.location.nativeElement; }));
            /** @type {?} */
            var removableList = elements.map(( /**
             * @param {?} componentNode
             * @return {?}
             */function (componentNode) {
                /** @type {?} */
                var newNode = document.createElement(componentNode.tagName);
                /** @type {?} */
                var parentNode = ( /** @type {?} */(componentNode.parentNode));
                /** @type {?} */
                var currentDisplay = newNode.style.display;
                newNode.style.display = 'none';
                parentNode.insertBefore(newNode, componentNode);
                return ( /**
                 * @return {?}
                 */function () {
                    newNode.style.display = currentDisplay;
                    try {
                        parentNode.removeChild(componentNode);
                    }
                    catch (_a) { }
                });
            }));
            return ( /**
             * @return {?}
             */function removeOldHosts() {
                removableList.forEach(( /**
                 * @param {?} removeOldHost
                 * @return {?}
                 */function (removeOldHost) { return removeOldHost(); }));
            });
        };
        /**
         * @private
         * @return {?}
         */
        HmrManager.prototype.removeNgStyles = function () {
            /** @type {?} */
            var head = ( /** @type {?} */(document.head));
            /** @type {?} */
            var styles = Array.from(( /** @type {?} */(head)).querySelectorAll('style'));
            styles
                .filter(( /**
         * @param {?} style
         * @return {?}
         */function (style) { return style.innerText.includes('_ng'); }))
                .map(( /**
         * @param {?} style
         * @return {?}
         */function (style) { return ( /** @type {?} */(head)).removeChild(style); }));
        };
        return HmrManager;
    }());
    if (false) {
        /** @type {?} */
        HmrManager.prototype.storage;
        /** @type {?} */
        HmrManager.prototype.context;
        /** @type {?} */
        HmrManager.prototype.lifecycle;
        /** @type {?} */
        HmrManager.prototype.optionsBuilder;
        /**
         * @type {?}
         * @private
         */
        HmrManager.prototype.ngModule;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/internal/hmr-storage.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template S
     */
    var HmrStorage = /** @class */ (function () {
        /**
         * @param {?=} _snapshot
         */
        function HmrStorage(_snapshot) {
            if (_snapshot === void 0) { _snapshot = {}; }
            this._snapshot = _snapshot;
        }
        /**
         * @return {?}
         */
        HmrStorage.prototype.hasData = function () {
            return Object.keys(this._snapshot).length > 0;
        };
        Object.defineProperty(HmrStorage.prototype, "snapshot", {
            /**
             * @return {?}
             */
            get: function () {
                return this._snapshot;
            },
            enumerable: false,
            configurable: true
        });
        return HmrStorage;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        HmrStorage.prototype._snapshot;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/utils/internals.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @return {?}
     */
    function setHmrReloadedTo(value) {
        if (window["NGXS_HMR_LIFECYCLE_STATUS" /* Status */]) {
            window["NGXS_HMR_LIFECYCLE_STATUS" /* Status */].hmrReloaded = value;
        }
    }
    /**
     * @return {?}
     */
    function markApplicationAsHmrReloaded() {
        window["NGXS_HMR_LIFECYCLE_STATUS" /* Status */] = window["NGXS_HMR_LIFECYCLE_STATUS" /* Status */] || {
            hmrReloaded: false
        };
    }

    /**
     * Hot Module Replacement plugin for NGXS
     * @deprecated As of Angular v10, HMR is no longer supported and will be deprecated.
     * More information [here](https://www.ngxs.io/plugins/hmr).
     * @template T
     * @param {?} webpackModule
     * @param {?} bootstrapFn
     * @param {?=} options
     * @return {?}
     * @this {*}
     */
    function hmr(webpackModule, bootstrapFn, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            /**
             * @record
             */
            function HmrDataTransfer() { }
            var dataTransfer, storage, manager;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!webpackModule.hot) {
                            console.error('Are you using the --hmr flag for ng serve?');
                            throw new Error('HMR is not enabled for webpack-dev-server!');
                        }
                        markApplicationAsHmrReloaded();
                        webpackModule.hot.accept();
                        if (false) {
                            /** @type {?|undefined} */
                            HmrDataTransfer.prototype.snapshot;
                        }
                        dataTransfer = webpackModule.hot.data || {};
                        storage = new HmrStorage(dataTransfer.snapshot || {});
                        manager = new HmrManager(options, storage);
                        return [4 /*yield*/, manager.hmrModule(bootstrapFn, ( /**
                             * @return {?}
                             */function () {
                                manager.beforeModuleBootstrap();
                                ( /** @type {?} */(webpackModule.hot)).dispose(( /**
                                 * @param {?} data
                                 * @return {?}
                                 */function (data) {
                                    setHmrReloadedTo(true);
                                    data.snapshot = manager.beforeModuleOnDestroy();
                                    manager.createNewModule();
                                }));
                            }))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/utils/externals.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function hmrIsReloaded() {
        return !!(window["NGXS_HMR_LIFECYCLE_STATUS" /* Status */] && window["NGXS_HMR_LIFECYCLE_STATUS" /* Status */].hmrReloaded);
    }

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
     * Generated from: ngxs-hmr-plugin.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.HmrBeforeDestroyAction = HmrBeforeDestroyAction;
    exports.HmrInitAction = HmrInitAction;
    exports.hmr = hmr;
    exports.hmrIsReloaded = hmrIsReloaded;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngxs-hmr-plugin.umd.js.map
