(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngxs/store'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ngxs/logger-plugin', ['exports', '@angular/core', '@ngxs/store', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ngxs = global.ngxs || {}, global.ngxs['logger-plugin'] = {}), global.ng.core, global['ngxs-store'], global.rxjs.operators));
}(this, (function (exports, core, store, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: src/internals.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var repeat = ( /**
     * @param {?} str
     * @param {?} times
     * @return {?}
     */function (str, times) { return new Array(times + 1).join(str); });
    /** @type {?} */
    var pad = ( /**
     * @param {?} num
     * @param {?} maxLength
     * @return {?}
     */function (num, maxLength) { return repeat('0', maxLength - num.toString().length) + num; });
    /**
     * @param {?} time
     * @return {?}
     */
    function formatTime(time) {
        return (pad(time.getHours(), 2) +
            ":" +
            pad(time.getMinutes(), 2) +
            ":" +
            pad(time.getSeconds(), 2) +
            "." +
            pad(time.getMilliseconds(), 3));
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/action-logger.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ActionLogger = /** @class */ (function () {
        /**
         * @param {?} action
         * @param {?} store
         * @param {?} logWriter
         */
        function ActionLogger(action, store, logWriter) {
            this.action = action;
            this.store = store;
            this.logWriter = logWriter;
        }
        /**
         * @param {?} state
         * @return {?}
         */
        ActionLogger.prototype.dispatched = function (state) {
            /** @type {?} */
            var actionName = store.getActionTypeFromInstance(this.action);
            /** @type {?} */
            var formattedTime = formatTime(new Date());
            /** @type {?} */
            var message = "action " + actionName + " @ " + formattedTime;
            this.logWriter.startGroup(message);
            // print payload only if at least one property is supplied
            if (this._hasPayload(this.action)) {
                this.logWriter.logGrey('payload', Object.assign({}, this.action));
            }
            this.logWriter.logGrey('prev state', state);
        };
        /**
         * @param {?} nextState
         * @return {?}
         */
        ActionLogger.prototype.completed = function (nextState) {
            this.logWriter.logGreen('next state', nextState);
            this.logWriter.endGroup();
        };
        /**
         * @param {?} error
         * @return {?}
         */
        ActionLogger.prototype.errored = function (error) {
            this.logWriter.logRedish('next state after error', this.store.snapshot());
            this.logWriter.logRedish('error', error);
            this.logWriter.endGroup();
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        ActionLogger.prototype._hasPayload = function (event) {
            /** @type {?} */
            var nonEmptyProperties = this._getNonEmptyProperties(event);
            return nonEmptyProperties.length > 0;
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        ActionLogger.prototype._getNonEmptyProperties = function (event) {
            /** @type {?} */
            var keys = Object.keys(event);
            /** @type {?} */
            var values = keys.map(( /**
             * @param {?} key
             * @return {?}
             */function (/**
             * @param {?} key
             * @return {?}
             */ key) { return event[key]; }));
            return values.filter(( /**
             * @param {?} value
             * @return {?}
             */function (/**
             * @param {?} value
             * @return {?}
             */ value) { return value !== undefined; }));
        };
        return ActionLogger;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ActionLogger.prototype.action;
        /**
         * @type {?}
         * @private
         */
        ActionLogger.prototype.store;
        /**
         * @type {?}
         * @private
         */
        ActionLogger.prototype.logWriter;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/log-writer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LogWriter = /** @class */ (function () {
        /**
         * @param {?} options
         */
        function LogWriter(options) {
            this.options = options;
            this.options = this.options || ( /** @type {?} */({}));
            this.logger = options.logger || console;
        }
        /**
         * @param {?} message
         * @return {?}
         */
        LogWriter.prototype.startGroup = function (message) {
            /** @type {?} */
            var startGroupFn = this.options.collapsed
                ? this.logger.groupCollapsed
                : this.logger.group;
            try {
                startGroupFn.call(this.logger, message);
            }
            catch (e) {
                console.log(message);
            }
        };
        /**
         * @return {?}
         */
        LogWriter.prototype.endGroup = function () {
            try {
                this.logger.groupEnd();
            }
            catch (e) {
                this.logger.log('—— log end ——');
            }
        };
        /**
         * @param {?} title
         * @param {?} payload
         * @return {?}
         */
        LogWriter.prototype.logGrey = function (title, payload) {
            /** @type {?} */
            var greyStyle = 'color: #9E9E9E; font-weight: bold';
            this.log(title, greyStyle, payload);
        };
        /**
         * @param {?} title
         * @param {?} payload
         * @return {?}
         */
        LogWriter.prototype.logGreen = function (title, payload) {
            /** @type {?} */
            var greenStyle = 'color: #4CAF50; font-weight: bold';
            this.log(title, greenStyle, payload);
        };
        /**
         * @param {?} title
         * @param {?} payload
         * @return {?}
         */
        LogWriter.prototype.logRedish = function (title, payload) {
            /** @type {?} */
            var redishStyle = 'color: #FD8182; font-weight: bold';
            this.log(title, redishStyle, payload);
        };
        /**
         * @param {?} title
         * @param {?} color
         * @param {?} payload
         * @return {?}
         */
        LogWriter.prototype.log = function (title, color, payload) {
            if (this.isIE()) {
                this.logger.log(title, payload);
            }
            else {
                this.logger.log('%c ' + title, color, payload);
            }
        };
        /**
         * @return {?}
         */
        LogWriter.prototype.isIE = function () {
            /** @type {?} */
            var ua = typeof window !== 'undefined' && window.navigator.userAgent
                ? window.navigator.userAgent
                : '';
            /** @type {?} */
            var msIE = false;
            /** @type {?} */
            var oldIE = ua.indexOf('MSIE ');
            /** @type {?} */
            var newIE = ua.indexOf('Trident/');
            if (oldIE > -1 || newIE > -1) {
                msIE = true;
            }
            return msIE;
        };
        return LogWriter;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        LogWriter.prototype.logger;
        /**
         * @type {?}
         * @private
         */
        LogWriter.prototype.options;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/symbols.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function NgxsLoggerPluginOptions() { }
    if (false) {
        /**
         * Auto expand logged actions
         * @type {?|undefined}
         */
        NgxsLoggerPluginOptions.prototype.collapsed;
        /**
         * Provide alternate console.log implementation
         * @type {?|undefined}
         */
        NgxsLoggerPluginOptions.prototype.logger;
        /**
         * Disable the logger. Useful for prod mode.
         * @type {?|undefined}
         */
        NgxsLoggerPluginOptions.prototype.disabled;
        /**
         * Predicate for actions to be the logged. Takes action and state snapshot as parameters
         * @type {?|undefined}
         */
        NgxsLoggerPluginOptions.prototype.filter;
    }
    /** @type {?} */
    var NGXS_LOGGER_PLUGIN_OPTIONS = new core.InjectionToken('NGXS_LOGGER_PLUGIN_OPTIONS');

    /**
     * @fileoverview added by tsickle
     * Generated from: src/logger.plugin.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxsLoggerPlugin = /** @class */ (function () {
        /**
         * @param {?} _options
         * @param {?} _injector
         */
        function NgxsLoggerPlugin(_options, _injector) {
            this._options = _options;
            this._injector = _injector;
        }
        /**
         * @param {?} state
         * @param {?} event
         * @param {?} next
         * @return {?}
         */
        NgxsLoggerPlugin.prototype.handle = function (state, event, next) {
            if (this._options.disabled || !( /** @type {?} */(this._options.filter))(event, state)) {
                return next(state, event);
            }
            this._logWriter = this._logWriter || new LogWriter(this._options);
            // Retrieve lazily to avoid cyclic dependency exception
            this._store = this._store || this._injector.get(store.Store);
            /** @type {?} */
            var actionLogger = new ActionLogger(event, this._store, this._logWriter);
            actionLogger.dispatched(state);
            return next(state, event).pipe(operators.tap(( /**
             * @param {?} nextState
             * @return {?}
             */function (/**
             * @param {?} nextState
             * @return {?}
             */ nextState) {
                actionLogger.completed(nextState);
            })), operators.catchError(( /**
             * @param {?} error
             * @return {?}
             */function (/**
             * @param {?} error
             * @return {?}
             */ error) {
                actionLogger.errored(error);
                throw error;
            })));
        };
        return NgxsLoggerPlugin;
    }());
    NgxsLoggerPlugin.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    NgxsLoggerPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [NGXS_LOGGER_PLUGIN_OPTIONS,] }] },
        { type: core.Injector }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NgxsLoggerPlugin.prototype._store;
        /**
         * @type {?}
         * @private
         */
        NgxsLoggerPlugin.prototype._logWriter;
        /**
         * @type {?}
         * @private
         */
        NgxsLoggerPlugin.prototype._options;
        /**
         * @type {?}
         * @private
         */
        NgxsLoggerPlugin.prototype._injector;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/logger.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var USER_OPTIONS = new core.InjectionToken('LOGGER_USER_OPTIONS');
    /**
     * @param {?} options
     * @return {?}
     */
    function loggerOptionsFactory(options) {
        /** @type {?} */
        var defaultLoggerOptions = {
            logger: console,
            collapsed: false,
            disabled: false,
            filter: ( /**
             * @return {?}
             */function () { return true; })
        };
        return Object.assign(Object.assign({}, defaultLoggerOptions), options);
    }
    var NgxsLoggerPluginModule = /** @class */ (function () {
        function NgxsLoggerPluginModule() {
        }
        /**
         * @param {?=} options
         * @return {?}
         */
        NgxsLoggerPluginModule.forRoot = function (options) {
            return {
                ngModule: NgxsLoggerPluginModule,
                providers: [
                    {
                        provide: store.NGXS_PLUGINS,
                        useClass: NgxsLoggerPlugin,
                        multi: true
                    },
                    {
                        provide: USER_OPTIONS,
                        useValue: options
                    },
                    {
                        provide: NGXS_LOGGER_PLUGIN_OPTIONS,
                        useFactory: loggerOptionsFactory,
                        deps: [USER_OPTIONS]
                    }
                ]
            };
        };
        return NgxsLoggerPluginModule;
    }());
    NgxsLoggerPluginModule.decorators = [
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
     * Generated from: ngxs-logger-plugin.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NGXS_LOGGER_PLUGIN_OPTIONS = NGXS_LOGGER_PLUGIN_OPTIONS;
    exports.NgxsLoggerPlugin = NgxsLoggerPlugin;
    exports.NgxsLoggerPluginModule = NgxsLoggerPluginModule;
    exports.ɵa = USER_OPTIONS;
    exports.ɵb = loggerOptionsFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngxs-logger-plugin.umd.js.map
