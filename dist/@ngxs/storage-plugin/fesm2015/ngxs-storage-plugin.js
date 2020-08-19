import { InjectionToken, Injectable, Inject, PLATFORM_ID, NgModule } from '@angular/core';
import { StateToken, actionMatcher, InitState, UpdateState, getValue, setValue, NGXS_PLUGINS } from '@ngxs/store';
import { isPlatformServer } from '@angular/common';
import { tap } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: src/symbols.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const StorageOption = {
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
const NGXS_STORAGE_PLUGIN_OPTIONS = new InjectionToken('NGXS_STORAGE_PLUGIN_OPTION');
/** @type {?} */
const STORAGE_ENGINE = new InjectionToken('STORAGE_ENGINE');
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
const DEFAULT_STATE_KEY = '@@STATE';
/**
 * This key is used to retrieve static metadatas on state classes.
 * This constant is taken from the core codebase
 * @type {?}
 */
const META_OPTIONS_KEY = 'NGXS_OPTIONS_META';
/**
 * @param {?} key
 * @return {?}
 */
function transformKeyOption(key) {
    if (!Array.isArray(key)) {
        key = [key];
    }
    return key.map((/**
     * @param {?} token
     * @return {?}
     */
    (token) => {
        if (typeof token === 'string') {
            return token;
        }
        else if (token instanceof StateToken) {
            return token.getName();
        }
        /** @type {?} */
        const options = ((/** @type {?} */ (token)))[META_OPTIONS_KEY];
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
    return Object.assign({ key: [DEFAULT_STATE_KEY], storage: 0 /* LocalStorage */, serialize: JSON.stringify, deserialize: JSON.parse, beforeSerialize: (/**
         * @param {?} obj
         * @return {?}
         */
        obj => obj), afterDeserialize: (/**
         * @param {?} obj
         * @return {?}
         */
        obj => obj) }, options);
}
/**
 * @param {?} options
 * @param {?} platformId
 * @return {?}
 */
function engineFactory(options, platformId) {
    if (isPlatformServer(platformId)) {
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

/**
 * @fileoverview added by tsickle
 * Generated from: src/storage.plugin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxsStoragePlugin {
    /**
     * @param {?} _options
     * @param {?} _engine
     * @param {?} _platformId
     */
    constructor(_options, _engine, _platformId) {
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
    handle(state, event, next) {
        if (isPlatformServer(this._platformId) && this._engine === null) {
            return next(state, event);
        }
        // We cast to `string[]` here as we're sure that this option has been
        // transformed by the `storageOptionsFactory` function that provided token
        /** @type {?} */
        const keys = (/** @type {?} */ (this._options.key));
        /** @type {?} */
        const matches = actionMatcher(event);
        /** @type {?} */
        const isInitAction = matches(InitState) || matches(UpdateState);
        /** @type {?} */
        let hasMigration = false;
        if (isInitAction) {
            for (const key of keys) {
                /** @type {?} */
                const isMaster = key === DEFAULT_STATE_KEY;
                /** @type {?} */
                let val = this._engine.getItem((/** @type {?} */ (key)));
                if (val !== 'undefined' && typeof val !== 'undefined' && val !== null) {
                    try {
                        /** @type {?} */
                        const newVal = (/** @type {?} */ (this._options.deserialize))(val);
                        val = (/** @type {?} */ (this._options.afterDeserialize))(newVal, key);
                    }
                    catch (e) {
                        console.error('Error ocurred while deserializing the store value, falling back to empty object.');
                        val = {};
                    }
                    if (this._options.migrations) {
                        this._options.migrations.forEach((/**
                         * @param {?} strategy
                         * @return {?}
                         */
                        strategy => {
                            /** @type {?} */
                            const versionMatch = strategy.version === getValue(val, strategy.versionKey || 'version');
                            /** @type {?} */
                            const keyMatch = (!strategy.key && isMaster) || strategy.key === key;
                            if (versionMatch && keyMatch) {
                                val = strategy.migrate(val);
                                hasMigration = true;
                            }
                        }));
                    }
                    if (!isMaster) {
                        state = setValue(state, (/** @type {?} */ (key)), val);
                    }
                    else {
                        state = Object.assign(Object.assign({}, state), val);
                    }
                }
            }
        }
        return next(state, event).pipe(tap((/**
         * @param {?} nextState
         * @return {?}
         */
        nextState => {
            if (!isInitAction || (isInitAction && hasMigration)) {
                for (const key of keys) {
                    /** @type {?} */
                    let val = nextState;
                    if (key !== DEFAULT_STATE_KEY) {
                        val = getValue(nextState, (/** @type {?} */ (key)));
                    }
                    try {
                        /** @type {?} */
                        const newVal = (/** @type {?} */ (this._options.beforeSerialize))(val, key);
                        this._engine.setItem((/** @type {?} */ (key)), (/** @type {?} */ (this._options.serialize))(newVal));
                    }
                    catch (e) {
                        console.error('Error ocurred while serializing the store value, value not updated.');
                    }
                }
            }
        })));
    }
}
NgxsStoragePlugin.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxsStoragePlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NGXS_STORAGE_PLUGIN_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [STORAGE_ENGINE,] }] },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
const USER_OPTIONS = new InjectionToken('USER_OPTIONS');
class NgxsStoragePluginModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: NgxsStoragePluginModule,
            providers: [
                {
                    provide: NGXS_PLUGINS,
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
                    deps: [NGXS_STORAGE_PLUGIN_OPTIONS, PLATFORM_ID]
                }
            ]
        };
    }
}
NgxsStoragePluginModule.decorators = [
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
 * Generated from: ngxs-storage-plugin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NGXS_STORAGE_PLUGIN_OPTIONS, NgxsStoragePlugin, NgxsStoragePluginModule, STORAGE_ENGINE, USER_OPTIONS as ɵa, storageOptionsFactory as ɵb, engineFactory as ɵc };
//# sourceMappingURL=ngxs-storage-plugin.js.map
