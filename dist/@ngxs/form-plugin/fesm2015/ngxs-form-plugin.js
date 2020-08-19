import { Injectable, Directive, ChangeDetectorRef, Input, NgModule } from '@angular/core';
import { getActionTypeFromInstance, setValue, getValue, ofActionDispatched, Actions, Store, NGXS_PLUGINS } from '@ngxs/store';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, takeUntil, distinctUntilChanged, debounceTime } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: src/actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdateFormStatus {
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
        return '[Forms] Update Form Status';
    }
}
if (false) {
    /** @type {?} */
    UpdateFormStatus.prototype.payload;
}
class UpdateFormValue {
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
        return '[Forms] Update Form Value';
    }
}
if (false) {
    /** @type {?} */
    UpdateFormValue.prototype.payload;
}
class UpdateForm {
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
        return '[Forms] Update Form';
    }
}
if (false) {
    /** @type {?} */
    UpdateForm.prototype.payload;
}
class UpdateFormDirty {
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
        return '[Forms] Update Form Dirty';
    }
}
if (false) {
    /** @type {?} */
    UpdateFormDirty.prototype.payload;
}
class SetFormDirty {
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
        return '[Forms] Set Form Dirty';
    }
}
if (false) {
    /** @type {?} */
    SetFormDirty.prototype.payload;
}
class SetFormPristine {
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
        return '[Forms] Set Form Pristine';
    }
}
if (false) {
    /** @type {?} */
    SetFormPristine.prototype.payload;
}
class UpdateFormErrors {
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
        return '[Forms] Update Form Errors';
    }
}
if (false) {
    /** @type {?} */
    UpdateFormErrors.prototype.payload;
}
class SetFormDisabled {
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
        return '[Forms] Set Form Disabled';
    }
}
if (false) {
    /** @type {?} */
    SetFormDisabled.prototype.payload;
}
class SetFormEnabled {
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
        return '[Forms] Set Form Enabled';
    }
}
if (false) {
    /** @type {?} */
    SetFormEnabled.prototype.payload;
}
class ResetForm {
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
        return '[Forms] Reset Form';
    }
}
if (false) {
    /** @type {?} */
    ResetForm.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/form.plugin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxsFormPlugin {
    /**
     * @param {?} state
     * @param {?} event
     * @param {?} next
     * @return {?}
     */
    handle(state, event, next) {
        /** @type {?} */
        const type = getActionTypeFromInstance(event);
        /** @type {?} */
        let nextState = state;
        if (type === UpdateFormValue.type || type === UpdateForm.type || type === ResetForm.type) {
            const { value } = event.payload;
            /** @type {?} */
            const payloadValue = Array.isArray(value) ? value.slice() : Object.assign({}, value);
            /** @type {?} */
            const path = this.joinPathWithPropertyPath(event);
            nextState = setValue(nextState, path, payloadValue);
        }
        if (type === ResetForm.type) {
            /** @type {?} */
            const model = getValue(nextState, `${event.payload.path}.model`);
            nextState = setValue(nextState, `${event.payload.path}`, { model: model });
        }
        if (type === UpdateFormStatus.type || type === UpdateForm.type) {
            nextState = setValue(nextState, `${event.payload.path}.status`, event.payload.status);
        }
        if (type === UpdateFormErrors.type || type === UpdateForm.type) {
            nextState = setValue(nextState, `${event.payload.path}.errors`, Object.assign({}, event.payload.errors));
        }
        if (type === UpdateFormDirty.type || type === UpdateForm.type) {
            nextState = setValue(nextState, `${event.payload.path}.dirty`, event.payload.dirty);
        }
        if (type === SetFormDirty.type) {
            nextState = setValue(nextState, `${event.payload}.dirty`, true);
        }
        if (type === SetFormPristine.type) {
            nextState = setValue(nextState, `${event.payload}.dirty`, false);
        }
        if (type === SetFormDisabled.type) {
            nextState = setValue(nextState, `${event.payload}.disabled`, true);
        }
        if (type === SetFormEnabled.type) {
            nextState = setValue(nextState, `${event.payload}.disabled`, false);
        }
        return next(nextState, event);
    }
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    joinPathWithPropertyPath({ payload }) {
        /** @type {?} */
        let path = `${payload.path}.model`;
        if (payload.propertyPath) {
            path += `.${payload.propertyPath}`;
        }
        return path;
    }
}
NgxsFormPlugin.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormDirective {
    /**
     * @param {?} _actions$
     * @param {?} _store
     * @param {?} _formGroupDirective
     * @param {?} _cd
     */
    constructor(_actions$, _store, _formGroupDirective, _cd) {
        this._actions$ = _actions$;
        this._store = _store;
        this._formGroupDirective = _formGroupDirective;
        this._cd = _cd;
        this.path = (/** @type {?} */ (null));
        this.debounce = 100;
        this.clearDestroy = false;
        this._destroy$ = new Subject();
        this._updating = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._actions$
            .pipe(ofActionDispatched(ResetForm), filter((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload.path === this.path)), takeUntil(this._destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ payload: { value } }) => {
            this.form.reset(value);
            this.updateFormStateWithRawValue(true);
            this._cd.markForCheck();
        }));
        this.getStateStream(`${this.path}.model`).subscribe((/**
         * @param {?} model
         * @return {?}
         */
        model => {
            if (this._updating || !model) {
                return;
            }
            this.form.patchValue(model);
            this._cd.markForCheck();
        }));
        this.getStateStream(`${this.path}.dirty`).subscribe((/**
         * @param {?} dirty
         * @return {?}
         */
        dirty => {
            if (this.form.dirty === dirty || typeof dirty !== 'boolean') {
                return;
            }
            if (dirty) {
                this.form.markAsDirty();
            }
            else {
                this.form.markAsPristine();
            }
            this._cd.markForCheck();
        }));
        // On first state change, sync form model, status and dirty with state
        this._store
            .selectOnce((/**
         * @param {?} state
         * @return {?}
         */
        state => getValue(state, this.path)))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._store.dispatch([
                new UpdateFormValue({
                    path: this.path,
                    value: this.form.getRawValue()
                }),
                new UpdateFormStatus({
                    path: this.path,
                    status: this.form.status
                }),
                new UpdateFormDirty({
                    path: this.path,
                    dirty: this.form.dirty
                })
            ]);
        }));
        this.getStateStream(`${this.path}.disabled`).subscribe((/**
         * @param {?} disabled
         * @return {?}
         */
        disabled => {
            if (this.form.disabled === disabled || typeof disabled !== 'boolean') {
                return;
            }
            if (disabled) {
                this.form.disable();
            }
            else {
                this.form.enable();
            }
            this._cd.markForCheck();
        }));
        (/** @type {?} */ (this._formGroupDirective.valueChanges)).pipe(this.debounceChange()).subscribe((/**
         * @return {?}
         */
        () => {
            this.updateFormStateWithRawValue();
        }));
        (/** @type {?} */ (this._formGroupDirective
            .statusChanges)).pipe(distinctUntilChanged(), this.debounceChange())
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        (status) => {
            this._store.dispatch(new UpdateFormStatus({
                status,
                path: this.path
            }));
        }));
    }
    /**
     * @param {?=} withFormStatus
     * @return {?}
     */
    updateFormStateWithRawValue(withFormStatus) {
        if (this._updating)
            return;
        /** @type {?} */
        const value = this._formGroupDirective.control.getRawValue();
        /** @type {?} */
        const actions = [
            new UpdateFormValue({
                path: this.path,
                value
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
            error: (/**
             * @return {?}
             */
            () => (this._updating = false)),
            complete: (/**
             * @return {?}
             */
            () => (this._updating = false))
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
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
    }
    /**
     * @private
     * @return {?}
     */
    debounceChange() {
        /** @type {?} */
        const skipDebounceTime = this._formGroupDirective.control.updateOn !== 'change' || this.debounce < 0;
        return skipDebounceTime
            ? (/**
             * @param {?} change
             * @return {?}
             */
            (change) => change.pipe(takeUntil(this._destroy$)))
            : (/**
             * @param {?} change
             * @return {?}
             */
            (change) => change.pipe(debounceTime(this.debounce), takeUntil(this._destroy$)));
    }
    /**
     * @private
     * @return {?}
     */
    get form() {
        return this._formGroupDirective.form;
    }
    /**
     * @private
     * @param {?} path
     * @return {?}
     */
    getStateStream(path) {
        return this._store.select((/**
         * @param {?} state
         * @return {?}
         */
        state => getValue(state, path))).pipe(takeUntil(this._destroy$));
    }
}
FormDirective.decorators = [
    { type: Directive, args: [{ selector: '[ngxsForm]' },] }
];
/** @nocollapse */
FormDirective.ctorParameters = () => [
    { type: Actions },
    { type: Store },
    { type: FormGroupDirective },
    { type: ChangeDetectorRef }
];
FormDirective.propDecorators = {
    path: [{ type: Input, args: ['ngxsForm',] }],
    debounce: [{ type: Input, args: ['ngxsFormDebounce',] }],
    clearDestroy: [{ type: Input, args: ['ngxsFormClearOnDestroy',] }]
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
class NgxsFormPluginModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgxsFormPluginModule,
            providers: [
                {
                    provide: NGXS_PLUGINS,
                    useClass: NgxsFormPlugin,
                    multi: true
                }
            ]
        };
    }
}
NgxsFormPluginModule.decorators = [
    { type: NgModule, args: [{
                imports: [ReactiveFormsModule],
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

export { NgxsFormPlugin, NgxsFormPluginModule, ResetForm, SetFormDirty, SetFormDisabled, SetFormEnabled, SetFormPristine, UpdateForm, UpdateFormDirty, UpdateFormErrors, UpdateFormStatus, UpdateFormValue, FormDirective as ɵa };
//# sourceMappingURL=ngxs-form-plugin.js.map
