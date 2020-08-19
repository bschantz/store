/**
 * @fileoverview added by tsickle
 * Generated from: src/directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Actions, getValue, ofActionDispatched, Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { ResetForm, UpdateForm, UpdateFormDirty, UpdateFormErrors, UpdateFormStatus, UpdateFormValue } from './actions';
export class FormDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS1wbHVnaW4vc3JjL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQWEsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0UsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RixPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixlQUFlLEVBQ2hCLE1BQU0sV0FBVyxDQUFDO0FBR25CLE1BQU0sT0FBTyxhQUFhOzs7Ozs7O0lBYXhCLFlBQ1UsU0FBa0IsRUFDbEIsTUFBYSxFQUNiLG1CQUF1QyxFQUN2QyxHQUFzQjtRQUh0QixjQUFTLEdBQVQsU0FBUyxDQUFTO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQU87UUFDYix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBZmhDLFNBQUksR0FBVyxtQkFBQSxJQUFJLEVBQUMsQ0FBQztRQUdyQixhQUFRLEdBQUcsR0FBRyxDQUFDO1FBR2YsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFSixjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUN6QyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBT3ZCLENBQUM7Ozs7SUFFSixR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Ozs7SUFDMUIsK0JBQXFCOzs7OztJQUNyQiw0Q0FBK0M7Ozs7O0lBQy9DLDRCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3Rpb25zLCBnZXRWYWx1ZSwgb2ZBY3Rpb25EaXNwYXRjaGVkLCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgUmVzZXRGb3JtLFxuICBVcGRhdGVGb3JtLFxuICBVcGRhdGVGb3JtRGlydHksXG4gIFVwZGF0ZUZvcm1FcnJvcnMsXG4gIFVwZGF0ZUZvcm1TdGF0dXMsXG4gIFVwZGF0ZUZvcm1WYWx1ZVxufSBmcm9tICcuL2FjdGlvbnMnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmd4c0Zvcm1dJyB9KVxuZXhwb3J0IGNsYXNzIEZvcm1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgnbmd4c0Zvcm0nKVxuICBwYXRoOiBzdHJpbmcgPSBudWxsITtcblxuICBASW5wdXQoJ25neHNGb3JtRGVib3VuY2UnKVxuICBkZWJvdW5jZSA9IDEwMDtcblxuICBASW5wdXQoJ25neHNGb3JtQ2xlYXJPbkRlc3Ryb3knKVxuICBjbGVhckRlc3Ryb3kgPSBmYWxzZTtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX3VwZGF0aW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlLFxuICAgIHByaXZhdGUgX2Zvcm1Hcm91cERpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZkFjdGlvbkRpc3BhdGNoZWQoUmVzZXRGb3JtKSxcbiAgICAgICAgZmlsdGVyKChhY3Rpb246IFJlc2V0Rm9ybSkgPT4gYWN0aW9uLnBheWxvYWQucGF0aCA9PT0gdGhpcy5wYXRoKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoeyBwYXlsb2FkOiB7IHZhbHVlIH0gfTogUmVzZXRGb3JtKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5yZXNldCh2YWx1ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlRm9ybVN0YXRlV2l0aFJhd1ZhbHVlKHRydWUpO1xuICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5nZXRTdGF0ZVN0cmVhbShgJHt0aGlzLnBhdGh9Lm1vZGVsYCkuc3Vic2NyaWJlKG1vZGVsID0+IHtcbiAgICAgIGlmICh0aGlzLl91cGRhdGluZyB8fCAhbW9kZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZShtb2RlbCk7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZ2V0U3RhdGVTdHJlYW0oYCR7dGhpcy5wYXRofS5kaXJ0eWApLnN1YnNjcmliZShkaXJ0eSA9PiB7XG4gICAgICBpZiAodGhpcy5mb3JtLmRpcnR5ID09PSBkaXJ0eSB8fCB0eXBlb2YgZGlydHkgIT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJ0eSkge1xuICAgICAgICB0aGlzLmZvcm0ubWFya0FzRGlydHkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9ybS5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIC8vIE9uIGZpcnN0IHN0YXRlIGNoYW5nZSwgc3luYyBmb3JtIG1vZGVsLCBzdGF0dXMgYW5kIGRpcnR5IHdpdGggc3RhdGVcbiAgICB0aGlzLl9zdG9yZVxuICAgICAgLnNlbGVjdE9uY2Uoc3RhdGUgPT4gZ2V0VmFsdWUoc3RhdGUsIHRoaXMucGF0aCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goW1xuICAgICAgICAgIG5ldyBVcGRhdGVGb3JtVmFsdWUoe1xuICAgICAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuZm9ybS5nZXRSYXdWYWx1ZSgpXG4gICAgICAgICAgfSksXG4gICAgICAgICAgbmV3IFVwZGF0ZUZvcm1TdGF0dXMoe1xuICAgICAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICAgICAgc3RhdHVzOiB0aGlzLmZvcm0uc3RhdHVzXG4gICAgICAgICAgfSksXG4gICAgICAgICAgbmV3IFVwZGF0ZUZvcm1EaXJ0eSh7XG4gICAgICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgICAgICBkaXJ0eTogdGhpcy5mb3JtLmRpcnR5XG4gICAgICAgICAgfSlcbiAgICAgICAgXSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZ2V0U3RhdGVTdHJlYW0oYCR7dGhpcy5wYXRofS5kaXNhYmxlZGApLnN1YnNjcmliZShkaXNhYmxlZCA9PiB7XG4gICAgICBpZiAodGhpcy5mb3JtLmRpc2FibGVkID09PSBkaXNhYmxlZCB8fCB0eXBlb2YgZGlzYWJsZWQgIT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmZvcm0uZGlzYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3JtLmVuYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2Zvcm1Hcm91cERpcmVjdGl2ZS52YWx1ZUNoYW5nZXMhLnBpcGUodGhpcy5kZWJvdW5jZUNoYW5nZSgpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVGb3JtU3RhdGVXaXRoUmF3VmFsdWUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2Zvcm1Hcm91cERpcmVjdGl2ZVxuICAgICAgLnN0YXR1c0NoYW5nZXMhLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSwgdGhpcy5kZWJvdW5jZUNoYW5nZSgpKVxuICAgICAgLnN1YnNjcmliZSgoc3RhdHVzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IFVwZGF0ZUZvcm1TdGF0dXMoe1xuICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgcGF0aDogdGhpcy5wYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlRm9ybVN0YXRlV2l0aFJhd1ZhbHVlKHdpdGhGb3JtU3RhdHVzPzogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl91cGRhdGluZykgcmV0dXJuO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9mb3JtR3JvdXBEaXJlY3RpdmUuY29udHJvbC5nZXRSYXdWYWx1ZSgpO1xuXG4gICAgY29uc3QgYWN0aW9uczogYW55W10gPSBbXG4gICAgICBuZXcgVXBkYXRlRm9ybVZhbHVlKHtcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSksXG4gICAgICBuZXcgVXBkYXRlRm9ybURpcnR5KHtcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBkaXJ0eTogdGhpcy5fZm9ybUdyb3VwRGlyZWN0aXZlLmRpcnR5XG4gICAgICB9KSxcbiAgICAgIG5ldyBVcGRhdGVGb3JtRXJyb3JzKHtcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBlcnJvcnM6IHRoaXMuX2Zvcm1Hcm91cERpcmVjdGl2ZS5lcnJvcnNcbiAgICAgIH0pXG4gICAgXTtcblxuICAgIGlmICh3aXRoRm9ybVN0YXR1cykge1xuICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICBuZXcgVXBkYXRlRm9ybVN0YXR1cyh7XG4gICAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICAgIHN0YXR1czogdGhpcy5fZm9ybUdyb3VwRGlyZWN0aXZlLnN0YXR1c1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLl91cGRhdGluZyA9IHRydWU7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goYWN0aW9ucykuc3Vic2NyaWJlKHtcbiAgICAgIGVycm9yOiAoKSA9PiAodGhpcy5fdXBkYXRpbmcgPSBmYWxzZSksXG4gICAgICBjb21wbGV0ZTogKCkgPT4gKHRoaXMuX3VwZGF0aW5nID0gZmFsc2UpXG4gICAgfSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XG5cbiAgICBpZiAodGhpcy5jbGVhckRlc3Ryb3kpIHtcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXBkYXRlRm9ybSh7XG4gICAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGRpcnR5OiBudWxsLFxuICAgICAgICAgIHN0YXR1czogbnVsbCxcbiAgICAgICAgICBlcnJvcnM6IG51bGxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWJvdW5jZUNoYW5nZSgpIHtcbiAgICBjb25zdCBza2lwRGVib3VuY2VUaW1lID1cbiAgICAgIHRoaXMuX2Zvcm1Hcm91cERpcmVjdGl2ZS5jb250cm9sLnVwZGF0ZU9uICE9PSAnY2hhbmdlJyB8fCB0aGlzLmRlYm91bmNlIDwgMDtcblxuICAgIHJldHVybiBza2lwRGVib3VuY2VUaW1lXG4gICAgICA/IChjaGFuZ2U6IE9ic2VydmFibGU8YW55PikgPT4gY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSlcbiAgICAgIDogKGNoYW5nZTogT2JzZXJ2YWJsZTxhbnk+KSA9PlxuICAgICAgICAgIGNoYW5nZS5waXBlKGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlKSwgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBmb3JtKCk6IEZvcm1Hcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1Hcm91cERpcmVjdGl2ZS5mb3JtO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGF0ZVN0cmVhbShwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmUuc2VsZWN0KHN0YXRlID0+IGdldFZhbHVlKHN0YXRlLCBwYXRoKSkucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKTtcbiAgfVxufVxuIl19