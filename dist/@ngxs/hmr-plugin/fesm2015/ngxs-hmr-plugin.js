import { __awaiter } from 'tslib';
import { ApplicationRef } from '@angular/core';
import { NgxsBootstrapper, InitialState } from '@ngxs/store/internals';
import { Store } from '@ngxs/store';
import { isStateOperator } from '@ngxs/store/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: src/actions/hmr-init.action.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HmrInitAction {
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
        return '@@HMR_INIT';
    }
}
if (false) {
    /** @type {?} */
    HmrInitAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/actions/hmr-before-destroy.action.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HmrBeforeDestroyAction {
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
        return '@@HMR_BEFORE_DESTROY';
    }
}
if (false) {
    /** @type {?} */
    HmrBeforeDestroyAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/internal/hmr-state-context-factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, S
 */
class HmrStateContextFactory {
    /**
     * @param {?} module
     */
    constructor(module) {
        /** @type {?} */
        const store = module.injector.get(Store, undefined);
        if (!store) {
            throw new Error('Store not found, maybe you forgot to import the NgxsModule');
        }
        this.store = store;
    }
    /**
     * \@description
     * must be taken out into  \@ngxs/store/internals
     * @return {?}
     */
    createStateContext() {
        return {
            dispatch: (/**
             * @param {?} actions
             * @return {?}
             */
            actions => (/** @type {?} */ (this.store)).dispatch(actions)),
            getState: (/**
             * @return {?}
             */
            () => (/** @type {?} */ ((/** @type {?} */ (this.store)).snapshot()))),
            setState: (/**
             * @param {?} val
             * @return {?}
             */
            val => {
                if (isStateOperator(val)) {
                    /** @type {?} */
                    const currentState = (/** @type {?} */ (this.store)).snapshot();
                    val = val(currentState);
                }
                (/** @type {?} */ (this.store)).reset(val);
                return (/** @type {?} */ (val));
            }),
            patchState: (/**
             * @param {?} val
             * @return {?}
             */
            val => {
                /** @type {?} */
                const currentState = (/** @type {?} */ (this.store)).snapshot();
                /** @type {?} */
                const newState = Object.assign(Object.assign({}, currentState), ((/** @type {?} */ (val))));
                (/** @type {?} */ (this.store)).reset(newState);
                return newState;
            })
        };
    }
}
if (false) {
    /** @type {?} */
    HmrStateContextFactory.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/internal/hmr-options-builder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HmrOptionBuilder {
    /**
     * @param {?} __0
     */
    constructor({ deferTime, autoClearLogs }) {
        this.deferTime = deferTime || 100;
        this.autoClearLogs = autoClearLogs === undefined ? true : autoClearLogs;
    }
    /**
     * @return {?}
     */
    clearLogs() {
        if (this.autoClearLogs) {
            console.clear();
        }
    }
}
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
class HmrLifecycle {
    /**
     * @param {?} ngAppModule
     * @param {?} bootstrap
     * @param {?} storage
     * @param {?} context
     * @param {?} options
     */
    constructor(ngAppModule, bootstrap, storage, context, options) {
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
    hmrNgxsStoreOnInit(hmrAfterOnInit) {
        /** @type {?} */
        let moduleHmrInit = this.getModuleHmrInitCallback();
        moduleHmrInit = moduleHmrInit.bind(this.ngAppModule);
        this.detectIvyWithJIT();
        this.stateEventLoop((/**
         * @param {?} ctx
         * @param {?} state
         * @return {?}
         */
        (ctx, state) => {
            moduleHmrInit(ctx, state);
            hmrAfterOnInit(ctx, state);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getModuleHmrInitCallback() {
        if (typeof this.ngAppModule.hmrNgxsStoreOnInit === 'function') {
            return this.ngAppModule.hmrNgxsStoreOnInit;
        }
        return (/**
         * @param {?} ctx
         * @param {?} state
         * @return {?}
         */
        function defaultModuleHmrInit(ctx, state) {
            ctx.patchState(state);
        });
    }
    /**
     * @return {?}
     */
    hmrNgxsStoreBeforeOnDestroy() {
        /** @type {?} */
        let state = {};
        /** @type {?} */
        const ctx = this.context.createStateContext();
        if (typeof this.ngAppModule.hmrNgxsStoreBeforeOnDestroy === 'function') {
            state = this.ngAppModule.hmrNgxsStoreBeforeOnDestroy(ctx);
        }
        else {
            state = ctx.getState();
        }
        ctx.dispatch(new HmrBeforeDestroyAction(state));
        return state;
    }
    /**
     * @private
     * @param {?} callback
     * @return {?}
     */
    stateEventLoop(callback) {
        if (!this.storage.hasData())
            return;
        /** @type {?} */
        const appBootstrapped$ = this.bootstrap.appBootstrapped$;
        /** @type {?} */
        const state$ = this.context.store.select((/**
         * @param {?} state
         * @return {?}
         */
        state => state));
        appBootstrapped$.subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let eventId;
            /** @type {?} */
            const storeEventId = state$.subscribe((/**
             * @return {?}
             */
            () => {
                // setTimeout used for zone detection after set hmr state
                clearInterval(eventId);
                eventId = window.setTimeout((/**
                 * @return {?}
                 */
                () => {
                    // close check on the message queue
                    storeEventId.unsubscribe();
                    // if events are no longer running on the call stack,
                    // then we can update the state
                    callback(this.context.createStateContext(), (/** @type {?} */ (this.storage.snapshot)));
                }), this.options.deferTime);
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    detectIvyWithJIT() {
        /** @type {?} */
        const jit = this.ngAppModule.constructor.hasOwnProperty('__annotations__');
        /** @type {?} */
        const ivy = this.ngAppModule.constructor.hasOwnProperty('ɵmod');
        if (jit && ivy) {
            throw new Error(`@ngxs/hmr-plugin doesn't work with JIT mode in Angular Ivy. Please use AOT mode.`);
        }
    }
}
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
 * @fileoverview added by tsickle
 * Generated from: src/hmr-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, S
 */
class HmrManager {
    /**
     * @param {?} options
     * @param {?} storage
     */
    constructor(options, storage) {
        this.storage = storage;
        this.optionsBuilder = new HmrOptionBuilder(options);
    }
    /**
     * @private
     * @return {?}
     */
    get applicationRef() {
        return this.ngModule.injector.get(ApplicationRef);
    }
    /**
     * @private
     * @return {?}
     */
    get bootstrap() {
        return this.ngModule.injector.get(NgxsBootstrapper);
    }
    /**
     * @param {?} bootstrapFn
     * @param {?} tick
     * @return {?}
     */
    hmrModule(bootstrapFn, tick) {
        return __awaiter(this, void 0, void 0, function* () {
            InitialState.set(this.storage.snapshot);
            this.ngModule = yield bootstrapFn();
            this.context = new HmrStateContextFactory(this.ngModule);
            this.lifecycle = this.createLifecycle();
            tick();
            InitialState.pop();
            return this.ngModule;
        });
    }
    /**
     * @return {?}
     */
    beforeModuleBootstrap() {
        this.lifecycle.hmrNgxsStoreOnInit((/**
         * @param {?} ctx
         * @param {?} state
         * @return {?}
         */
        (ctx, state) => {
            ctx.dispatch(new HmrInitAction(state));
        }));
    }
    /**
     * @return {?}
     */
    beforeModuleOnDestroy() {
        this.optionsBuilder.clearLogs();
        return this.lifecycle.hmrNgxsStoreBeforeOnDestroy();
    }
    /**
     * @return {?}
     */
    createNewModule() {
        /** @type {?} */
        const removeOldHosts = this.cloneHostsBeforeDestroy();
        this.removeNgStyles();
        this.ngModule.destroy();
        removeOldHosts();
    }
    /**
     * @private
     * @return {?}
     */
    createLifecycle() {
        return new HmrLifecycle(this.ngModule.instance, this.bootstrap, this.storage, this.context, this.optionsBuilder);
    }
    /**
     * @private
     * @return {?}
     */
    cloneHostsBeforeDestroy() {
        /** @type {?} */
        const elements = this.applicationRef.components.map((/**
         * @param {?} component
         * @return {?}
         */
        (component) => component.location.nativeElement));
        /** @type {?} */
        const removableList = elements.map((/**
         * @param {?} componentNode
         * @return {?}
         */
        (componentNode) => {
            /** @type {?} */
            const newNode = document.createElement(componentNode.tagName);
            /** @type {?} */
            const parentNode = (/** @type {?} */ (componentNode.parentNode));
            /** @type {?} */
            const currentDisplay = newNode.style.display;
            newNode.style.display = 'none';
            parentNode.insertBefore(newNode, componentNode);
            return (/**
             * @return {?}
             */
            () => {
                newNode.style.display = currentDisplay;
                try {
                    parentNode.removeChild(componentNode);
                }
                catch (_a) { }
            });
        }));
        return (/**
         * @return {?}
         */
        function removeOldHosts() {
            removableList.forEach((/**
             * @param {?} removeOldHost
             * @return {?}
             */
            (removeOldHost) => removeOldHost()));
        });
    }
    /**
     * @private
     * @return {?}
     */
    removeNgStyles() {
        /** @type {?} */
        const head = (/** @type {?} */ (document.head));
        /** @type {?} */
        const styles = Array.from((/** @type {?} */ (head)).querySelectorAll('style'));
        styles
            .filter((/**
         * @param {?} style
         * @return {?}
         */
        (style) => style.innerText.includes('_ng')))
            .map((/**
         * @param {?} style
         * @return {?}
         */
        (style) => (/** @type {?} */ (head)).removeChild(style)));
    }
}
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
class HmrStorage {
    /**
     * @param {?=} _snapshot
     */
    constructor(_snapshot = {}) {
        this._snapshot = _snapshot;
    }
    /**
     * @return {?}
     */
    hasData() {
        return Object.keys(this._snapshot).length > 0;
    }
    /**
     * @return {?}
     */
    get snapshot() {
        return this._snapshot;
    }
}
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
 * @fileoverview added by tsickle
 * Generated from: src/hmr-bootstrap.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
function hmr(webpackModule, bootstrapFn, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!webpackModule.hot) {
            console.error('Are you using the --hmr flag for ng serve?');
            throw new Error('HMR is not enabled for webpack-dev-server!');
        }
        markApplicationAsHmrReloaded();
        webpackModule.hot.accept();
        /**
         * @record
         */
        function HmrDataTransfer() { }
        if (false) {
            /** @type {?|undefined} */
            HmrDataTransfer.prototype.snapshot;
        }
        /** @type {?} */
        const dataTransfer = webpackModule.hot.data || {};
        /** @type {?} */
        const storage = new HmrStorage(dataTransfer.snapshot || {});
        /** @type {?} */
        const manager = new HmrManager(options, storage);
        return yield manager.hmrModule(bootstrapFn, (/**
         * @return {?}
         */
        () => {
            manager.beforeModuleBootstrap();
            (/** @type {?} */ (webpackModule.hot)).dispose((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                setHmrReloadedTo(true);
                data.snapshot = manager.beforeModuleOnDestroy();
                manager.createNewModule();
            }));
        }));
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

export { HmrBeforeDestroyAction, HmrInitAction, hmr, hmrIsReloaded };
//# sourceMappingURL=ngxs-hmr-plugin.js.map