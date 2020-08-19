(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngxs/store'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ngxs/devtools-plugin', ['exports', '@angular/core', '@ngxs/store', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ngxs = global.ngxs || {}, global.ngxs['devtools-plugin'] = {}), global.ng.core, global['ngxs-store'], global.rxjs.operators));
}(this, (function (exports, core, store, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: src/symbols.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Interface for the redux-devtools-extension API.
     * @record
     */
    function NgxsDevtoolsExtension() { }
    if (false) {
        /**
         * @param {?} state
         * @return {?}
         */
        NgxsDevtoolsExtension.prototype.init = function (state) { };
        /**
         * @param {?} action
         * @param {?=} state
         * @return {?}
         */
        NgxsDevtoolsExtension.prototype.send = function (action, state) { };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgxsDevtoolsExtension.prototype.subscribe = function (fn) { };
    }
    /**
     * @record
     */
    function NgxsDevtoolsAction() { }
    if (false) {
        /** @type {?} */
        NgxsDevtoolsAction.prototype.type;
        /** @type {?} */
        NgxsDevtoolsAction.prototype.payload;
        /** @type {?} */
        NgxsDevtoolsAction.prototype.state;
        /** @type {?} */
        NgxsDevtoolsAction.prototype.id;
        /** @type {?} */
        NgxsDevtoolsAction.prototype.source;
    }
    /**
     * @record
     */
    function NgxsDevtoolsOptions() { }
    if (false) {
        /**
         * The name of the extension
         * @type {?|undefined}
         */
        NgxsDevtoolsOptions.prototype.name;
        /**
         * Whether the dev tools is enabled or note. Useful for setting during production.
         * @type {?|undefined}
         */
        NgxsDevtoolsOptions.prototype.disabled;
        /**
         * Max number of entiries to keep.
         * @type {?|undefined}
         */
        NgxsDevtoolsOptions.prototype.maxAge;
        /**
         * Reformat actions before sending to dev tools
         * @type {?|undefined}
         */
        NgxsDevtoolsOptions.prototype.actionSanitizer;
        /**
         * Reformat state before sending to devtools
         * @type {?|undefined}
         */
        NgxsDevtoolsOptions.prototype.stateSanitizer;
    }
    /** @type {?} */
    var NGXS_DEVTOOLS_OPTIONS = new core.InjectionToken('NGXS_DEVTOOLS_OPTIONS');

    /**
     * @fileoverview added by tsickle
     * Generated from: src/devtools.plugin.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Adds support for the Redux Devtools extension:
     * http://extension.remotedev.io/
     */
    var NgxsReduxDevtoolsPlugin = /** @class */ (function () {
        /**
         * @param {?} _options
         * @param {?} _injector
         */
        function NgxsReduxDevtoolsPlugin(_options, _injector) {
            var _this = this;
            this._options = _options;
            this._injector = _injector;
            this.devtoolsExtension = null;
            this.windowObj = typeof window !== 'undefined' ? window : {};
            /** @type {?} */
            var globalDevtools = this.windowObj['__REDUX_DEVTOOLS_EXTENSION__'] || this.windowObj['devToolsExtension'];
            if (globalDevtools) {
                this.devtoolsExtension = ( /** @type {?} */(globalDevtools.connect(_options)));
                this.devtoolsExtension.subscribe(( /**
                 * @param {?} a
                 * @return {?}
                 */function (/**
                 * @param {?} a
                 * @return {?}
                 */ a) { return _this.dispatched(a); }));
            }
        }
        Object.defineProperty(NgxsReduxDevtoolsPlugin.prototype, "store", {
            /**
             * Lazy get the store for circular dependency issues
             * @private
             * @return {?}
             */
            get: function () {
                return this._injector.get(store.Store);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Middleware handle function
         * @param {?} state
         * @param {?} action
         * @param {?} next
         * @return {?}
         */
        NgxsReduxDevtoolsPlugin.prototype.handle = function (state, action, next) {
            var _this = this;
            /** @type {?} */
            var isDisabled = this._options && this._options.disabled;
            if (!this.devtoolsExtension || isDisabled) {
                return next(state, action);
            }
            return next(state, action).pipe(operators.catchError(( /**
             * @param {?} error
             * @return {?}
             */function (/**
             * @param {?} error
             * @return {?}
             */ error) {
                /** @type {?} */
                var newState = _this.store.snapshot();
                _this.sendToDevTools(state, action, newState);
                throw error;
            })), operators.tap(( /**
             * @param {?} newState
             * @return {?}
             */function (/**
             * @param {?} newState
             * @return {?}
             */ newState) {
                _this.sendToDevTools(state, action, newState);
            })));
        };
        /**
         * @private
         * @param {?} state
         * @param {?} action
         * @param {?} newState
         * @return {?}
         */
        NgxsReduxDevtoolsPlugin.prototype.sendToDevTools = function (state, action, newState) {
            /** @type {?} */
            var type = store.getActionTypeFromInstance(action);
            // if init action, send initial state to dev tools
            /** @type {?} */
            var isInitAction = type === '@@INIT';
            if (isInitAction) {
                ( /** @type {?} */(this.devtoolsExtension)).init(state);
            }
            else {
                ( /** @type {?} */(this.devtoolsExtension)).send(Object.assign(Object.assign({}, action), { action: null, type: type }), newState);
            }
        };
        /**
         * Handle the action from the dev tools subscription
         * @param {?} action
         * @return {?}
         */
        NgxsReduxDevtoolsPlugin.prototype.dispatched = function (action) {
            var _this = this;
            if (action.type === 'DISPATCH') {
                if (action.payload.type === 'JUMP_TO_ACTION' ||
                    action.payload.type === 'JUMP_TO_STATE') {
                    /** @type {?} */
                    var prevState = JSON.parse(action.state);
                    this.store.reset(prevState);
                }
                else if (action.payload.type === 'TOGGLE_ACTION') {
                    console.warn('Skip is not supported at this time.');
                }
                else if (action.payload.type === 'IMPORT_STATE') {
                    var _a = action.payload.nextLiftedState, actionsById_1 = _a.actionsById, computedStates_1 = _a.computedStates, currentStateIndex = _a.currentStateIndex;
                    ( /** @type {?} */(this.devtoolsExtension)).init(computedStates_1[0].state);
                    Object.keys(actionsById_1)
                        .filter(( /**
                 * @param {?} actionId
                 * @return {?}
                 */function (/**
                 * @param {?} actionId
                 * @return {?}
                 */ actionId) { return actionId !== '0'; }))
                        .forEach(( /**
                 * @param {?} actionId
                 * @return {?}
                 */function (/**
                 * @param {?} actionId
                 * @return {?}
                 */ actionId) { return ( /** @type {?} */(_this.devtoolsExtension)).send(actionsById_1[actionId], computedStates_1[actionId].state); }));
                    this.store.reset(computedStates_1[currentStateIndex].state);
                }
            }
            else if (action.type === 'ACTION') {
                /** @type {?} */
                var actionPayload = JSON.parse(action.payload);
                this.store.dispatch(actionPayload);
            }
        };
        return NgxsReduxDevtoolsPlugin;
    }());
    NgxsReduxDevtoolsPlugin.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    NgxsReduxDevtoolsPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [NGXS_DEVTOOLS_OPTIONS,] }] },
        { type: core.Injector }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NgxsReduxDevtoolsPlugin.prototype.devtoolsExtension;
        /**
         * @type {?}
         * @private
         */
        NgxsReduxDevtoolsPlugin.prototype.windowObj;
        /**
         * @type {?}
         * @private
         */
        NgxsReduxDevtoolsPlugin.prototype._options;
        /**
         * @type {?}
         * @private
         */
        NgxsReduxDevtoolsPlugin.prototype._injector;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/devtools.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} options
     * @return {?}
     */
    function devtoolsOptionsFactory(options) {
        return Object.assign({ name: 'NGXS' }, options);
    }
    /** @type {?} */
    var USER_OPTIONS = new core.InjectionToken('USER_OPTIONS');
    var NgxsReduxDevtoolsPluginModule = /** @class */ (function () {
        function NgxsReduxDevtoolsPluginModule() {
        }
        /**
         * @param {?=} options
         * @return {?}
         */
        NgxsReduxDevtoolsPluginModule.forRoot = function (options) {
            return {
                ngModule: NgxsReduxDevtoolsPluginModule,
                providers: [
                    {
                        provide: store.NGXS_PLUGINS,
                        useClass: NgxsReduxDevtoolsPlugin,
                        multi: true
                    },
                    {
                        provide: USER_OPTIONS,
                        useValue: options
                    },
                    {
                        provide: NGXS_DEVTOOLS_OPTIONS,
                        useFactory: devtoolsOptionsFactory,
                        deps: [USER_OPTIONS]
                    }
                ]
            };
        };
        return NgxsReduxDevtoolsPluginModule;
    }());
    NgxsReduxDevtoolsPluginModule.decorators = [
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
     * Generated from: ngxs-devtools-plugin.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NGXS_DEVTOOLS_OPTIONS = NGXS_DEVTOOLS_OPTIONS;
    exports.NgxsReduxDevtoolsPlugin = NgxsReduxDevtoolsPlugin;
    exports.NgxsReduxDevtoolsPluginModule = NgxsReduxDevtoolsPluginModule;
    exports.ɵa = devtoolsOptionsFactory;
    exports.ɵb = USER_OPTIONS;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngxs-devtools-plugin.umd.js.map
