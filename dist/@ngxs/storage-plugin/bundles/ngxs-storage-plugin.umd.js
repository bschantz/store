(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngxs/store'), require('@angular/common'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ngxs/storage-plugin', ['exports', '@angular/core', '@ngxs/store', '@angular/common', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ngxs = global.ngxs || {}, global.ngxs['storage-plugin'] = {}), global.ng.core, global['ngxs-store'], global.ng.common, global.rxjs.operators));
}(this, (function (exports, core, store, common, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: src/symbols.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var StorageOption = {
        LocalStorage: 0,
        SessionStorage: 1,
    };
    /**
     * @record
     */
    function NgxsStoragePluginOptions() { }
    if (false) {
        /**
         * Key for the state slice to store in the storage engine.
         * @type {?|undefined}
         */
        NgxsStoragePluginOptions.prototype.key;
        /**
         * Storage engine to use. Deaults to localStorage but can provide
         *
         * sessionStorage or custom implementation of the StorageEngine interface
         * @type {?|undefined}
         */
        NgxsStoragePluginOptions.prototype.storage;
        /**
         * Migration strategies.
         * @type {?|undefined}
         */
        NgxsStoragePluginOptions.prototype.migrations;
        /**
         * Serailizer for the object before its pushed into the engine.
         * @param {?} obj
         * @return {?}
         */
        NgxsStoragePluginOptions.prototype.serialize = function (obj) { };
        /**
         * Deserializer for the object before its pulled out of the engine.
         * @param {?} obj
         * @return {?}
         */
        NgxsStoragePluginOptions.prototype.deserialize = function (obj) { };
        /**
         * Method to alter object before serialization.
         * @param {?} obj
         * @param {?} key
         * @return {?}
         */
        NgxsStoragePluginOptions.prototype.beforeSerialize = function (obj, key) { };
        /**
         * Method to alter object after deserialization.
         * @param {?} obj
         * @param {?} key
         * @return {?}
         */
        NgxsStoragePluginOptions.prototype.afterDeserialize = function (obj, key) { };
    }
    /** @type {?} */
    var NGXS_STORAGE_PLUGIN_OPTIONS = new core.InjectionToken('NGXS_STORAGE_PLUGIN_OPTION');
    /** @type {?} */
    var STORAGE_ENGINE = new core.InjectionToken('STORAGE_ENGINE');
    /**
     * @record
     */
    function StorageEngine() { }
    if (false) {
        /** @type {?} */
        StorageEngine.prototype.length;
        /**
         * @param {?} key
         * @return {?}
         */
        StorageEngine.prototype.getItem = function (key) { };
        /**
         * @param {?} key
         * @param {?} val
         * @return {?}
         */
        StorageEngine.prototype.setItem = function (key, val) { };
        /**
         * @param {?} key
         * @return {?}
         */
        StorageEngine.prototype.removeItem = function (key) { };
        /**
         * @return {?}
         */
        StorageEngine.prototype.clear = function () { };
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
     * Generated from: src/internals.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * If the `key` option is not provided then the below constant
     * will be used as a default key
     * @type {?}
     */
    var DEFAULT_STATE_KEY = '@@STATE';
    /**
     * This key is used to retrieve static metadatas on state classes.
     * This constant is taken from the core codebase
     * @type {?}
     */
    var META_OPTIONS_KEY = 'NGXS_OPTIONS_META';
    /**
     * @param {?} key
     * @return {?}
     */
    function transformKeyOption(key) {
        if (!Array.isArray(key)) {
            key = [key];
        }
        return key.map(( /**
         * @param {?} token
         * @return {?}
         */function (token) {
            if (typeof token === 'string') {
                return token;
            }
            else if (token instanceof store.StateToken) {
                return token.getName();
            }
            /** @type {?} */
            var options = (( /** @type {?} */(token)))[META_OPTIONS_KEY];
            return options.name;
        }));
    }
    /**
     * @param {?} options
     * @return {?}
     */
    function storageOptionsFactory(options) {
        if (options !== undefined && options.key) {
            options.key = transformKeyOption(options.key);
        }
        return Object.assign({ key: [DEFAULT_STATE_KEY], storage: 0 /* LocalStorage */, serialize: JSON.stringify, deserialize: JSON.parse, beforeSerialize: ( /**
                 * @param {?} obj
                 * @return {?}
                 */function (/**
                 * @param {?} obj
                 * @return {?}
                 */ obj) { return obj; }), afterDeserialize: ( /**
             * @param {?} obj
             * @return {?}
             */function (/**
             * @param {?} obj
             * @return {?}
             */ obj) { return obj; }) }, options);
    }
    /**
     * @param {?} options
     * @param {?} platformId
     * @return {?}
     */
    function engineFactory(options, platformId) {
        if (common.isPlatformServer(platformId)) {
            return null;
        }
        if (options.storage === 0 /* LocalStorage */) {
            return localStorage;
        }
        else if (options.storage === 1 /* SessionStorage */) {
            return sessionStorage;
        }
        return null;
    }

    var NgxsStoragePlugin = /** @class */ (function () {
        /**
         * @param {?} _options
         * @param {?} _engine
         * @param {?} _platformId
         */
        function NgxsStoragePlugin(_options, _engine, _platformId) {
            this._options = _options;
            this._engine = _engine;
            this._platformId = _platformId;
        }
        /**
         * @param {?} state
         * @param {?} event
         * @param {?} next
         * @return {?}
         */
        NgxsStoragePlugin.prototype.handle = function (state, event, next) {
            var e_1, _a;
            var _this = this;
            if (common.isPlatformServer(this._platformId) && this._engine === null) {
                return next(state, event);
            }
            // We cast to `string[]` here as we're sure that this option has been
            // transformed by the `storageOptionsFactory` function that provided token
            /** @type {?} */
            var keys = ( /** @type {?} */(this._options.key));
            /** @type {?} */
            var matches = store.actionMatcher(event);
            /** @type {?} */
            var isInitAction = matches(store.InitState) || matches(store.UpdateState);
            /** @type {?} */
            var hasMigration = false;
            if (isInitAction) {
                var _loop_1 = function (key) {
                    /** @type {?} */
                    var isMaster = key === DEFAULT_STATE_KEY;
                    /** @type {?} */
                    var val = this_1._engine.getItem(( /** @type {?} */(key)));
                    if (val !== 'undefined' && typeof val !== 'undefined' && val !== null) {
                        try {
                            /** @type {?} */
                            var newVal = ( /** @type {?} */(this_1._options.deserialize))(val);
                            val = ( /** @type {?} */(this_1._options.afterDeserialize))(newVal, key);
                        }
                        catch (e) {
                            console.error('Error ocurred while deserializing the store value, falling back to empty object.');
                            val = {};
                        }
                        if (this_1._options.migrations) {
                            this_1._options.migrations.forEach(( /**
                             * @param {?} strategy
                             * @return {?}
                             */function (/**
                             * @param {?} strategy
                             * @return {?}
                             */ strategy) {
                                /** @type {?} */
                                var versionMatch = strategy.version === store.getValue(val, strategy.versionKey || 'version');
                                /** @type {?} */
                                var keyMatch = (!strategy.key && isMaster) || strategy.key === key;
                                if (versionMatch && keyMatch) {
                                    val = strategy.migrate(val);
                                    hasMigration = true;
                                }
                            }));
                        }
                        if (!isMaster) {
                            state = store.setValue(state, ( /** @type {?} */(key)), val);
                        }
                        else {
                            state = Object.assign(Object.assign({}, state), val);
                        }
                    }
                };
                var this_1 = this;
                try {
                    for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                        var key = keys_1_1.value;
                        _loop_1(key);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return next(state, event).pipe(operators.tap(( /**
             * @param {?} nextState
             * @return {?}
             */function (/**
             * @param {?} nextState
             * @return {?}
             */ nextState) {
                var e_2, _a;
                if (!isInitAction || (isInitAction && hasMigration)) {
                    try {
                        for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                            var key = keys_2_1.value;
                            /** @type {?} */
                            var val = nextState;
                            if (key !== DEFAULT_STATE_KEY) {
                                val = store.getValue(nextState, ( /** @type {?} */(key)));
                            }
                            try {
                                /** @type {?} */
                                var newVal = ( /** @type {?} */(_this._options.beforeSerialize))(val, key);
                                _this._engine.setItem(( /** @type {?} */(key)), ( /** @type {?} */(_this._options.serialize))(newVal));
                            }
                            catch (e) {
                                console.error('Error ocurred while serializing the store value, value not updated.');
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (keys_2_1 && !keys_2_1.done && (_a = keys_2.return)) _a.call(keys_2);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            })));
        };
        return NgxsStoragePlugin;
    }());
    NgxsStoragePlugin.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    NgxsStoragePlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [NGXS_STORAGE_PLUGIN_OPTIONS,] }] },
        { type: undefined, decorators: [{ type: core.Inject, args: [STORAGE_ENGINE,] }] },
        { type: String, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NgxsStoragePlugin.prototype._options;
        /**
         * @type {?}
         * @private
         */
        NgxsStoragePlugin.prototype._engine;
        /**
         * @type {?}
         * @private
         */
        NgxsStoragePlugin.prototype._platformId;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/storage.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var USER_OPTIONS = new core.InjectionToken('USER_OPTIONS');
    var NgxsStoragePluginModule = /** @class */ (function () {
        function NgxsStoragePluginModule() {
        }
        /**
         * @param {?=} options
         * @return {?}
         */
        NgxsStoragePluginModule.forRoot = function (options) {
            return {
                ngModule: NgxsStoragePluginModule,
                providers: [
                    {
                        provide: store.NGXS_PLUGINS,
                        useClass: NgxsStoragePlugin,
                        multi: true
                    },
                    {
                        provide: USER_OPTIONS,
                        useValue: options
                    },
                    {
                        provide: NGXS_STORAGE_PLUGIN_OPTIONS,
                        useFactory: storageOptionsFactory,
                        deps: [USER_OPTIONS]
                    },
                    {
                        provide: STORAGE_ENGINE,
                        useFactory: engineFactory,
                        deps: [NGXS_STORAGE_PLUGIN_OPTIONS, core.PLATFORM_ID]
                    }
                ]
            };
        };
        return NgxsStoragePluginModule;
    }());
    NgxsStoragePluginModule.decorators = [
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
     * Generated from: ngxs-storage-plugin.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NGXS_STORAGE_PLUGIN_OPTIONS = NGXS_STORAGE_PLUGIN_OPTIONS;
    exports.NgxsStoragePlugin = NgxsStoragePlugin;
    exports.NgxsStoragePluginModule = NgxsStoragePluginModule;
    exports.STORAGE_ENGINE = STORAGE_ENGINE;
    exports.ɵa = USER_OPTIONS;
    exports.ɵb = storageOptionsFactory;
    exports.ɵc = engineFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngxs-storage-plugin.umd.js.map