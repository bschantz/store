(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngxs/store'), require('@angular/forms'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ngxs/form-plugin', ['exports', '@angular/core', '@ngxs/store', '@angular/forms', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ngxs = global.ngxs || {}, global.ngxs['form-plugin'] = {}), global.ng.core, global['ngxs-store'], global.ng.forms, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, store, forms, rxjs, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: src/actions.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdateFormStatus = /** @class */ (function () {
        /**
         * @param {?} payload
         */
        function UpdateFormStatus(payload) {
            this.payload = payload;
        }
        Object.defineProperty(UpdateFormStatus, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[Forms] Update Form Status';
            },
            enumerable: false,
            configurable: true
        });
        return UpdateFormStatus;
    }());
    if (false) {
        /** @type {?} */
        UpdateFormStatus.prototype.payload;
    }
    var UpdateFormValue = /** @class */ (function () {
        /**
         * @param {?} payload
         */
        function UpdateFormValue(payload) {
            this.payload = payload;
        }
        Object.defineProperty(UpdateFormValue, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[Forms] Update Form Value';
            },
            enumerable: false,
            configurable: true
        });
        return UpdateFormValue;
    }());
    if (false) {
        /** @type {?} */
        UpdateFormValue.prototype.payload;
    }
    var UpdateForm = /** @class */ (function () {
        /**
         * @param {?} payload
         */
        function UpdateForm(payload) {
            this.payload = payload;
        }
        Object.defineProperty(UpdateForm, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[Forms] Update Form';
            },
            enumerable: false,
            configurable: true
        });
        return UpdateForm;
    }());
    if (false) {
        /** @type {?} */
        UpdateForm.prototype.payload;
    }
    var UpdateFormDirty = /** @class */ (function () {
        /**
         * @param {?} payload
         */
        function UpdateFormDirty(payload) {
            this.payload = payload;
        }
        Object.defineProperty(UpdateFormDirty, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[Forms] Update Form Dirty';
            },
            enumerable: false,
            configurable: true
        });
        return UpdateFormDirty;
    }());
    if (false) {
        /** @type {?} */
        UpdateFormDirty.prototype.payload;
    }
    var SetFormDirty = /** @class */ (function () {
        /**
         * @param {?} payload
         */
        function SetFormDirty(payload) {
            this.payload = payload;
        }
        Object.defineProperty(SetFormDirty, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[Forms] Set Form Dirty';
            },
            enumerable: false,
            configurable: true
        });
        return SetFormDirty;
    }());
    if (false) {
        /** @type {?} */
        SetFormDirty.prototype.payload;
    }
    var SetFormPristine = /** @class */ (function () {
        /**
         * @param {?} payload
         */
        function SetFormPristine(payload) {
            this.payload = payload;
        }
        Object.defineProperty(SetFormPristine, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[Forms] Set Form Pristine';
            },
            enumerable: false,
            configurable: true
        });
        return SetFormPristine;
    }());
    if (false) {
        /** @type {?} */
        SetFormPristine.prototype.payload;
    }
    var UpdateFormErrors = /** @class */ (function () {
        /**
         * @param {?} payload
         */
        function UpdateFormErrors(payload) {
            this.payload = payload;
        }
        Object.defineProperty(UpdateFormErrors, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[Forms] Update Form Errors';
            },
            enumerable: false,
            configurable: true
        });
        return UpdateFormErrors;
    }());
    if (false) {
        /** @type {?} */
        UpdateFormErrors.prototype.payload;
    }
    var SetFormDisabled = /** @class */ (function () {
        /**
         * @param {?} payload
         */
        function SetFormDisabled(payload) {
            this.payload = payload;
        }
        Object.defineProperty(SetFormDisabled, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[Forms] Set Form Disabled';
            },
            enumerable: false,
            configurable: true
        });
        return SetFormDisabled;
    }());
    if (false) {
        /** @type {?} */
        SetFormDisabled.prototype.payload;
    }
    var SetFormEnabled = /** @class */ (function () {
        /**
         * @param {?} payload
         */
        function SetFormEnabled(payload) {
            this.payload = payload;
        }
        Object.defineProperty(SetFormEnabled, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[Forms] Set Form Enabled';
            },
            enumerable: false,
            configurable: true
        });
        return SetFormEnabled;
    }());
    if (false) {
        /** @type {?} */
        SetFormEnabled.prototype.payload;
    }
    var ResetForm = /** @class */ (function () {
        /**
         * @param {?} payload
         */
        function ResetForm(payload) {
            this.payload = payload;
        }
        Object.defineProperty(ResetForm, "type", {
            /**
             * @return {?}
             */
            get: function () {
                // NOTE: Not necessary to declare the type in this way in your code. See https://github.com/ngxs/store/pull/644#issuecomment-436003138
                return '[Forms] Reset Form';
            },
            enumerable: false,
            configurable: true
        });
        return ResetForm;
    }());
    if (false) {
        /** @type {?} */
        ResetForm.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/form.plugin.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxsFormPlugin = /** @class */ (function () {
        function NgxsFormPlugin() {
        }
        /**
         * @param {?} state
         * @param {?} event
         * @param {?} next
         * @return {?}
         */
        NgxsFormPlugin.prototype.handle = function (state, event, next) {
            /** @type {?} */
            var type = store.getActionTypeFromInstance(event);
            /** @type {?} */
            var nextState = state;
            if (type === UpdateFormValue.type || type === UpdateForm.type || type === ResetForm.type) {
                var value = event.payload.value;
                /** @type {?} */
                var payloadValue = Array.isArray(value) ? value.slice() : Object.assign({}, value);
                /** @type {?} */
                var path = this.joinPathWithPropertyPath(event);
                nextState = store.setValue(nextState, path, payloadValue);
            }
            if (type === ResetForm.type) {
                /** @type {?} */
                var model = store.getValue(nextState, event.payload.path + ".model");
                nextState = store.setValue(nextState, "" + event.payload.path, { model: model });
            }
            if (type === UpdateFormStatus.type || type === UpdateForm.type) {
                nextState = store.setValue(nextState, event.payload.path + ".status", event.payload.status);
            }
            if (type === UpdateFormErrors.type || type === UpdateForm.type) {
                nextState = store.setValue(nextState, event.payload.path + ".errors", Object.assign({}, event.payload.errors));
            }
            if (type === UpdateFormDirty.type || type === UpdateForm.type) {
                nextState = store.setValue(nextState, event.payload.path + ".dirty", event.payload.dirty);
            }
            if (type === SetFormDirty.type) {
                nextState = store.setValue(nextState, event.payload + ".dirty", true);
            }
            if (type === SetFormPristine.type) {
                nextState = store.setValue(nextState, event.payload + ".dirty", false);
            }
            if (type === SetFormDisabled.type) {
                nextState = store.setValue(nextState, event.payload + ".disabled", true);
            }
            if (type === SetFormEnabled.type) {
                nextState = store.setValue(nextState, event.payload + ".disabled", false);
            }
            return next(nextState, event);
        };
        /**
         * @private
         * @param {?} __0
         * @return {?}
         */
        NgxsFormPlugin.prototype.joinPathWithPropertyPath = function (_a) {
            var payload = _a.payload;
            /** @type {?} */
            var path = payload.path + ".model";
            if (payload.propertyPath) {
                path += "." + payload.propertyPath;
            }
            return path;
        };
        return NgxsFormPlugin;
    }());
    NgxsFormPlugin.decorators = [
        { type: core.Injectable }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: src/directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormDirective = /** @class */ (function () {
        /**
         * @param {?} _actions$
         * @param {?} _store
         * @param {?} _formGroupDirective
         * @param {?} _cd
         */
        function FormDirective(_actions$, _store, _formGroupDirective, _cd) {
            this._actions$ = _actions$;
            this._store = _store;
            this._formGroupDirective = _formGroupDirective;
            this._cd = _cd;
            this.path = ( /** @type {?} */(null));
            this.debounce = 100;
            this.clearDestroy = false;
            this._destroy$ = new rxjs.Subject();
            this._updating = false;
        }
        /**
         * @return {?}
         */
        FormDirective.prototype.ngOnInit = function () {
            var _this = this;
            this._actions$
                .pipe(store.ofActionDispatched(ResetForm), operators.filter(( /**
         * @param {?} action
         * @return {?}
         */function (action) { return action.payload.path === _this.path; })), operators.takeUntil(this._destroy$))
                .subscribe(( /**
         * @param {?} __0
         * @return {?}
         */function (_a) {
                var value = _a.payload.value;
                _this.form.reset(value);
                _this.updateFormStateWithRawValue(true);
                _this._cd.markForCheck();
            }));
            this.getStateStream(this.path + ".model").subscribe(( /**
             * @param {?} model
             * @return {?}
             */function (/**
             * @param {?} model
             * @return {?}
             */ model) {
                if (_this._updating || !model) {
                    return;
                }
                _this.form.patchValue(model);
                _this._cd.markForCheck();
            }));
            this.getStateStream(this.path + ".dirty").subscribe(( /**
             * @param {?} dirty
             * @return {?}
             */function (/**
             * @param {?} dirty
             * @return {?}
             */ dirty) {
                if (_this.form.dirty === dirty || typeof dirty !== 'boolean') {
                    return;
                }
                if (dirty) {
                    _this.form.markAsDirty();
                }
                else {
                    _this.form.markAsPristine();
                }
                _this._cd.markForCheck();
            }));
            // On first state change, sync form model, status and dirty with state
            this._store
                .selectOnce(( /**
         * @param {?} state
         * @return {?}
         */function (/**
         * @param {?} state
         * @return {?}
         */ state) { return store.getValue(state, _this.path); }))
                .subscribe(( /**
         * @return {?}
         */function () {
                _this._store.dispatch([
                    new UpdateFormValue({
                        path: _this.path,
                        value: _this.form.getRawValue()
                    }),
                    new UpdateFormStatus({
                        path: _this.path,
                        status: _this.form.status
                    }),
                    new UpdateFormDirty({
                        path: _this.path,
                        dirty: _this.form.dirty
                    })
                ]);
            }));
            this.getStateStream(this.path + ".disabled").subscribe(( /**
             * @param {?} disabled
             * @return {?}
             */function (/**
             * @param {?} disabled
             * @return {?}
             */ disabled) {
                if (_this.form.disabled === disabled || typeof disabled !== 'boolean') {
                    return;
                }
                if (disabled) {
                    _this.form.disable();
                }
                else {
                    _this.form.enable();
                }
                _this._cd.markForCheck();
            }));
            ( /** @type {?} */(this._formGroupDirective.valueChanges)).pipe(this.debounceChange()).subscribe(( /**
             * @return {?}
             */function () {
                _this.updateFormStateWithRawValue();
            }));
            ( /** @type {?} */(this._formGroupDirective
                .statusChanges)).pipe(operators.distinctUntilChanged(), this.debounceChange())
                .subscribe(( /**
         * @param {?} status
         * @return {?}
         */function (status) {
                _this._store.dispatch(new UpdateFormStatus({
                    status: status,
                    path: _this.path
                }));
            }));
        };
        /**
         * @param {?=} withFormStatus
         * @return {?}
         */
        FormDirective.prototype.updateFormStateWithRawValue = function (withFormStatus) {
            var _this = this;
            if (this._updating)
                return;
            /** @type {?} */
            var value = this._formGroupDirective.control.getRawValue();
            /** @type {?} */
            var actions = [
                new UpdateFormValue({
                    path: this.path,
                    value: value
                }),
                new UpdateFormDirty({
                    path: this.path,
                    dirty: this._formGroupDirective.dirty
                }),
                new UpdateFormErrors({
                    path: this.path,
                    errors: this._formGroupDirective.errors
                })
            ];
            if (withFormStatus) {
                actions.push(new UpdateFormStatus({
                    path: this.path,
                    status: this._formGroupDirective.status
                }));
            }
            this._updating = true;
            this._store.dispatch(actions).subscribe({
                error: ( /**
                 * @return {?}
                 */function () { return (_this._updating = false); }),
                complete: ( /**
                 * @return {?}
                 */function () { return (_this._updating = false); })
            });
        };
        /**
         * @return {?}
         */
        FormDirective.prototype.ngOnDestroy = function () {
            this._destroy$.next();
            this._destroy$.complete();
            if (this.clearDestroy) {
                this._store.dispatch(new UpdateForm({
                    path: this.path,
                    value: null,
                    dirty: null,
                    status: null,
                    errors: null
                }));
            }
        };
        /**
         * @private
         * @return {?}
         */
        FormDirective.prototype.debounceChange = function () {
            var _this = this;
            /** @type {?} */
            var skipDebounceTime = this._formGroupDirective.control.updateOn !== 'change' || this.debounce < 0;
            return skipDebounceTime
                ? ( /**
                 * @param {?} change
                 * @return {?}
                 */function (change) { return change.pipe(operators.takeUntil(_this._destroy$)); })
                : ( /**
                 * @param {?} change
                 * @return {?}
                 */function (change) { return change.pipe(operators.debounceTime(_this.debounce), operators.takeUntil(_this._destroy$)); });
        };
        Object.defineProperty(FormDirective.prototype, "form", {
            /**
             * @private
             * @return {?}
             */
            get: function () {
                return this._formGroupDirective.form;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @param {?} path
         * @return {?}
         */
        FormDirective.prototype.getStateStream = function (path) {
            return this._store.select(( /**
             * @param {?} state
             * @return {?}
             */function (/**
             * @param {?} state
             * @return {?}
             */ state) { return store.getValue(state, path); })).pipe(operators.takeUntil(this._destroy$));
        };
        return FormDirective;
    }());
    FormDirective.decorators = [
        { type: core.Directive, args: [{ selector: '[ngxsForm]' },] }
    ];
    /** @nocollapse */
    FormDirective.ctorParameters = function () { return [
        { type: store.Actions },
        { type: store.Store },
        { type: forms.FormGroupDirective },
        { type: core.ChangeDetectorRef }
    ]; };
    FormDirective.propDecorators = {
        path: [{ type: core.Input, args: ['ngxsForm',] }],
        debounce: [{ type: core.Input, args: ['ngxsFormDebounce',] }],
        clearDestroy: [{ type: core.Input, args: ['ngxsFormClearOnDestroy',] }]
    };
    if (false) {
        /** @type {?} */
        FormDirective.prototype.path;
        /** @type {?} */
        FormDirective.prototype.debounce;
        /** @type {?} */
        FormDirective.prototype.clearDestroy;
        /**
         * @type {?}
         * @private
         */
        FormDirective.prototype._destroy$;
        /**
         * @type {?}
         * @private
         */
        FormDirective.prototype._updating;
        /**
         * @type {?}
         * @private
         */
        FormDirective.prototype._actions$;
        /**
         * @type {?}
         * @private
         */
        FormDirective.prototype._store;
        /**
         * @type {?}
         * @private
         */
        FormDirective.prototype._formGroupDirective;
        /**
         * @type {?}
         * @private
         */
        FormDirective.prototype._cd;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/form.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxsFormPluginModule = /** @class */ (function () {
        function NgxsFormPluginModule() {
        }
        /**
         * @return {?}
         */
        NgxsFormPluginModule.forRoot = function () {
            return {
                ngModule: NgxsFormPluginModule,
                providers: [
                    {
                        provide: store.NGXS_PLUGINS,
                        useClass: NgxsFormPlugin,
                        multi: true
                    }
                ]
            };
        };
        return NgxsFormPluginModule;
    }());
    NgxsFormPluginModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [forms.ReactiveFormsModule],
                    declarations: [FormDirective],
                    exports: [FormDirective]
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
     * Generated from: ngxs-form-plugin.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxsFormPlugin = NgxsFormPlugin;
    exports.NgxsFormPluginModule = NgxsFormPluginModule;
    exports.ResetForm = ResetForm;
    exports.SetFormDirty = SetFormDirty;
    exports.SetFormDisabled = SetFormDisabled;
    exports.SetFormEnabled = SetFormEnabled;
    exports.SetFormPristine = SetFormPristine;
    exports.UpdateForm = UpdateForm;
    exports.UpdateFormDirty = UpdateFormDirty;
    exports.UpdateFormErrors = UpdateFormErrors;
    exports.UpdateFormStatus = UpdateFormStatus;
    exports.UpdateFormValue = UpdateFormValue;
    exports.ɵa = FormDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngxs-form-plugin.umd.js.map
