/**
 * @fileoverview added by tsickle
 * Generated from: src/store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:unified-signatures
import { Inject, Injectable, Optional } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, distinctUntilChanged, map, take } from 'rxjs/operators';
import { INITIAL_STATE_TOKEN } from '@ngxs/store/internals';
import { InternalNgxsExecutionStrategy } from './execution/internal-ngxs-execution-strategy';
import { InternalStateOperations } from './internal/state-operations';
import { getRootSelectorFactory } from './utils/selector-utils';
import { StateStream } from './internal/state-stream';
import { leaveNgxs } from './operators/leave-ngxs';
import { NgxsConfig } from './symbols';
import { StateFactory } from './internal/state-factory';
export class Store {
    /**
     * @param {?} _stateStream
     * @param {?} _internalStateOperations
     * @param {?} _config
     * @param {?} _internalExecutionStrategy
     * @param {?} _stateFactory
     * @param {?} initialStateValue
     */
    constructor(_stateStream, _internalStateOperations, _config, _internalExecutionStrategy, _stateFactory, initialStateValue) {
        this._stateStream = _stateStream;
        this._internalStateOperations = _internalStateOperations;
        this._config = _config;
        this._internalExecutionStrategy = _internalExecutionStrategy;
        this._stateFactory = _stateFactory;
        this.initStateStream(initialStateValue);
    }
    /**
     * Dispatches event(s).
     * @param {?} actionOrActions
     * @return {?}
     */
    dispatch(actionOrActions) {
        return this._internalStateOperations.getRootStateOperations().dispatch(actionOrActions);
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    select(selector) {
        /** @type {?} */
        const selectorFn = this.getStoreBoundSelectorFn(selector);
        return this._stateStream.pipe(map(selectorFn), catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            // if error is TypeError we swallow it to prevent usual errors with property access
            const { suppressErrors } = this._config.selectorOptions;
            if (err instanceof TypeError && suppressErrors) {
                return of(undefined);
            }
            // rethrow other errors
            return throwError(err);
        })), distinctUntilChanged(), leaveNgxs(this._internalExecutionStrategy));
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    selectOnce(selector) {
        return this.select(selector).pipe(take(1));
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    selectSnapshot(selector) {
        /** @type {?} */
        const selectorFn = this.getStoreBoundSelectorFn(selector);
        return selectorFn(this._stateStream.getValue());
    }
    /**
     * Allow the user to subscribe to the root of the state
     * @param {?=} fn
     * @return {?}
     */
    subscribe(fn) {
        return this._stateStream.pipe(leaveNgxs(this._internalExecutionStrategy)).subscribe(fn);
    }
    /**
     * Return the raw value of the state.
     * @return {?}
     */
    snapshot() {
        return this._internalStateOperations.getRootStateOperations().getState();
    }
    /**
     * Reset the state to a specific point in time. This method is useful
     * for plugin's who need to modify the state directly or unit testing.
     * @param {?} state
     * @return {?}
     */
    reset(state) {
        return this._internalStateOperations.getRootStateOperations().setState(state);
    }
    /**
     * @private
     * @param {?} selector
     * @return {?}
     */
    getStoreBoundSelectorFn(selector) {
        /** @type {?} */
        const makeSelectorFn = getRootSelectorFactory(selector);
        /** @type {?} */
        const runtimeContext = this._stateFactory.getRuntimeSelectorContext();
        return makeSelectorFn(runtimeContext);
    }
    /**
     * @private
     * @param {?} initialStateValue
     * @return {?}
     */
    initStateStream(initialStateValue) {
        /** @type {?} */
        const value = this._stateStream.value;
        /** @type {?} */
        const storeIsEmpty = !value || Object.keys(value).length === 0;
        if (storeIsEmpty) {
            /** @type {?} */
            const defaultStateNotEmpty = Object.keys(this._config.defaultsState).length > 0;
            /** @type {?} */
            const storeValues = defaultStateNotEmpty
                ? Object.assign(Object.assign({}, this._config.defaultsState), initialStateValue) : initialStateValue;
            this._stateStream.next(storeValues);
        }
    }
}
Store.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Store.ctorParameters = () => [
    { type: StateStream },
    { type: InternalStateOperations },
    { type: NgxsConfig },
    { type: InternalNgxsExecutionStrategy },
    { type: StateFactory },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [INITIAL_STATE_TOKEN,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    Store.prototype._stateStream;
    /**
     * @type {?}
     * @private
     */
    Store.prototype._internalStateOperations;
    /**
     * @type {?}
     * @private
     */
    Store.prototype._config;
    /**
     * @type {?}
     * @private
     */
    Store.prototype._internalExecutionStrategy;
    /**
     * @type {?}
     * @private
     */
    Store.prototype._stateFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9zcmMvc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBYyxFQUFFLEVBQWdCLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM3RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3hELE1BQU0sT0FBTyxLQUFLOzs7Ozs7Ozs7SUFDaEIsWUFDVSxZQUF5QixFQUN6Qix3QkFBaUQsRUFDakQsT0FBbUIsRUFDbkIsMEJBQXlELEVBQ3pELGFBQTJCLEVBR25DLGlCQUFzQjtRQVBkLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFDakQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQStCO1FBQ3pE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QUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7O1lBN0dGLFVBQVU7Ozs7WUFORixXQUFXO1lBRlgsdUJBQXVCO1lBSXZCLFVBQVU7WUFMViw2QkFBNkI7WUFPN0IsWUFBWTs0Q0FVaEIsUUFBUSxZQUNSLE1BQU0sU0FBQyxtQkFBbUI7Ozs7Ozs7SUFOM0IsNkJBQWlDOzs7OztJQUNqQyx5Q0FBeUQ7Ozs7O0lBQ3pELHdCQUEyQjs7Ozs7SUFDM0IsMkNBQWlFOzs7OztJQUNqRSw4QkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTp1bmlmaWVkLXNpZ25hdHVyZXNcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb24sIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJTklUSUFMX1NUQVRFX1RPS0VOLCBQbGFpbk9iamVjdCB9IGZyb20gJ0BuZ3hzL3N0b3JlL2ludGVybmFscyc7XG5cbmltcG9ydCB7IEludGVybmFsTmd4c0V4ZWN1dGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9leGVjdXRpb24vaW50ZXJuYWwtbmd4cy1leGVjdXRpb24tc3RyYXRlZ3knO1xuaW1wb3J0IHsgSW50ZXJuYWxTdGF0ZU9wZXJhdGlvbnMgfSBmcm9tICcuL2ludGVybmFsL3N0YXRlLW9wZXJhdGlvbnMnO1xuaW1wb3J0IHsgZ2V0Um9vdFNlbGVjdG9yRmFjdG9yeSB9IGZyb20gJy4vdXRpbHMvc2VsZWN0b3ItdXRpbHMnO1xuaW1wb3J0IHsgU3RhdGVTdHJlYW0gfSBmcm9tICcuL2ludGVybmFsL3N0YXRlLXN0cmVhbSc7XG5pbXBvcnQgeyBsZWF2ZU5neHMgfSBmcm9tICcuL29wZXJhdG9ycy9sZWF2ZS1uZ3hzJztcbmltcG9ydCB7IE5neHNDb25maWcgfSBmcm9tICcuL3N5bWJvbHMnO1xuaW1wb3J0IHsgU3RhdGVUb2tlbiB9IGZyb20gJy4vc3RhdGUtdG9rZW4vc3RhdGUtdG9rZW4nO1xuaW1wb3J0IHsgU3RhdGVGYWN0b3J5IH0gZnJvbSAnLi9pbnRlcm5hbC9zdGF0ZS1mYWN0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0b3JlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfc3RhdGVTdHJlYW06IFN0YXRlU3RyZWFtLFxuICAgIHByaXZhdGUgX2ludGVybmFsU3RhdGVPcGVyYXRpb25zOiBJbnRlcm5hbFN0YXRlT3BlcmF0aW9ucyxcbiAgICBwcml2YXRlIF9jb25maWc6IE5neHNDb25maWcsXG4gICAgcHJpdmF0ZSBfaW50ZXJuYWxFeGVjdXRpb25TdHJhdGVneTogSW50ZXJuYWxOZ3hzRXhlY3V0aW9uU3RyYXRlZ3ksXG4gICAgcHJpdmF0ZSBfc3RhdGVGYWN0b3J5OiBTdGF0ZUZhY3RvcnksXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KElOSVRJQUxfU1RBVEVfVE9LRU4pXG4gICAgaW5pdGlhbFN0YXRlVmFsdWU6IGFueVxuICApIHtcbiAgICB0aGlzLmluaXRTdGF0ZVN0cmVhbShpbml0aWFsU3RhdGVWYWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBldmVudChzKS5cbiAgICovXG4gIGRpc3BhdGNoKGFjdGlvbk9yQWN0aW9uczogYW55IHwgYW55W10pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcm5hbFN0YXRlT3BlcmF0aW9ucy5nZXRSb290U3RhdGVPcGVyYXRpb25zKCkuZGlzcGF0Y2goYWN0aW9uT3JBY3Rpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIGEgc2xpY2Ugb2YgZGF0YSBmcm9tIHRoZSBzdG9yZS5cbiAgICovXG4gIHNlbGVjdDxUPihzZWxlY3RvcjogKHN0YXRlOiBhbnksIC4uLnN0YXRlczogYW55W10pID0+IFQpOiBPYnNlcnZhYmxlPFQ+O1xuICBzZWxlY3Q8VCA9IGFueT4oc2VsZWN0b3I6IHN0cmluZyB8IFR5cGU8YW55Pik6IE9ic2VydmFibGU8VD47XG4gIHNlbGVjdDxUPihzZWxlY3RvcjogU3RhdGVUb2tlbjxUPik6IE9ic2VydmFibGU8VD47XG4gIHNlbGVjdChzZWxlY3RvcjogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBzZWxlY3RvckZuID0gdGhpcy5nZXRTdG9yZUJvdW5kU2VsZWN0b3JGbihzZWxlY3Rvcik7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlU3RyZWFtLnBpcGUoXG4gICAgICBtYXAoc2VsZWN0b3JGbiksXG4gICAgICBjYXRjaEVycm9yKChlcnI6IEVycm9yKTogT2JzZXJ2YWJsZTxuZXZlcj4gfCBPYnNlcnZhYmxlPHVuZGVmaW5lZD4gPT4ge1xuICAgICAgICAvLyBpZiBlcnJvciBpcyBUeXBlRXJyb3Igd2Ugc3dhbGxvdyBpdCB0byBwcmV2ZW50IHVzdWFsIGVycm9ycyB3aXRoIHByb3BlcnR5IGFjY2Vzc1xuICAgICAgICBjb25zdCB7IHN1cHByZXNzRXJyb3JzIH0gPSB0aGlzLl9jb25maWcuc2VsZWN0b3JPcHRpb25zO1xuXG4gICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBUeXBlRXJyb3IgJiYgc3VwcHJlc3NFcnJvcnMpIHtcbiAgICAgICAgICByZXR1cm4gb2YodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldGhyb3cgb3RoZXIgZXJyb3JzXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBsZWF2ZU5neHModGhpcy5faW50ZXJuYWxFeGVjdXRpb25TdHJhdGVneSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBvbmUgc2xpY2Ugb2YgZGF0YSBmcm9tIHRoZSBzdG9yZS5cbiAgICovXG5cbiAgc2VsZWN0T25jZTxUPihzZWxlY3RvcjogKHN0YXRlOiBhbnksIC4uLnN0YXRlczogYW55W10pID0+IFQpOiBPYnNlcnZhYmxlPFQ+O1xuICBzZWxlY3RPbmNlPFQgPSBhbnk+KHNlbGVjdG9yOiBzdHJpbmcgfCBUeXBlPGFueT4pOiBPYnNlcnZhYmxlPFQ+O1xuICBzZWxlY3RPbmNlPFQ+KHNlbGVjdG9yOiBTdGF0ZVRva2VuPFQ+KTogT2JzZXJ2YWJsZTxUPjtcbiAgc2VsZWN0T25jZShzZWxlY3RvcjogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Qoc2VsZWN0b3IpLnBpcGUodGFrZSgxKSk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IGEgc25hcHNob3QgZnJvbSB0aGUgc3RhdGUuXG4gICAqL1xuICBzZWxlY3RTbmFwc2hvdDxUPihzZWxlY3RvcjogKHN0YXRlOiBhbnksIC4uLnN0YXRlczogYW55W10pID0+IFQpOiBUO1xuICBzZWxlY3RTbmFwc2hvdDxUID0gYW55PihzZWxlY3Rvcjogc3RyaW5nIHwgVHlwZTxhbnk+KTogVDtcbiAgc2VsZWN0U25hcHNob3Q8VD4oc2VsZWN0b3I6IFN0YXRlVG9rZW48VD4pOiBUO1xuICBzZWxlY3RTbmFwc2hvdChzZWxlY3RvcjogYW55KTogYW55IHtcbiAgICBjb25zdCBzZWxlY3RvckZuID0gdGhpcy5nZXRTdG9yZUJvdW5kU2VsZWN0b3JGbihzZWxlY3Rvcik7XG4gICAgcmV0dXJuIHNlbGVjdG9yRm4odGhpcy5fc3RhdGVTdHJlYW0uZ2V0VmFsdWUoKSk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgdGhlIHVzZXIgdG8gc3Vic2NyaWJlIHRvIHRoZSByb290IG9mIHRoZSBzdGF0ZVxuICAgKi9cbiAgc3Vic2NyaWJlKGZuPzogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVN0cmVhbS5waXBlKGxlYXZlTmd4cyh0aGlzLl9pbnRlcm5hbEV4ZWN1dGlvblN0cmF0ZWd5KSkuc3Vic2NyaWJlKGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHJhdyB2YWx1ZSBvZiB0aGUgc3RhdGUuXG4gICAqL1xuICBzbmFwc2hvdCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcm5hbFN0YXRlT3BlcmF0aW9ucy5nZXRSb290U3RhdGVPcGVyYXRpb25zKCkuZ2V0U3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgc3RhdGUgdG8gYSBzcGVjaWZpYyBwb2ludCBpbiB0aW1lLiBUaGlzIG1ldGhvZCBpcyB1c2VmdWxcbiAgICogZm9yIHBsdWdpbidzIHdobyBuZWVkIHRvIG1vZGlmeSB0aGUgc3RhdGUgZGlyZWN0bHkgb3IgdW5pdCB0ZXN0aW5nLlxuICAgKi9cbiAgcmVzZXQoc3RhdGU6IGFueSkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcm5hbFN0YXRlT3BlcmF0aW9ucy5nZXRSb290U3RhdGVPcGVyYXRpb25zKCkuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdG9yZUJvdW5kU2VsZWN0b3JGbihzZWxlY3RvcjogYW55KSB7XG4gICAgY29uc3QgbWFrZVNlbGVjdG9yRm4gPSBnZXRSb290U2VsZWN0b3JGYWN0b3J5KHNlbGVjdG9yKTtcbiAgICBjb25zdCBydW50aW1lQ29udGV4dCA9IHRoaXMuX3N0YXRlRmFjdG9yeS5nZXRSdW50aW1lU2VsZWN0b3JDb250ZXh0KCk7XG4gICAgcmV0dXJuIG1ha2VTZWxlY3RvckZuKHJ1bnRpbWVDb250ZXh0KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFN0YXRlU3RyZWFtKGluaXRpYWxTdGF0ZVZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZTogUGxhaW5PYmplY3QgPSB0aGlzLl9zdGF0ZVN0cmVhbS52YWx1ZTtcbiAgICBjb25zdCBzdG9yZUlzRW1wdHk6IGJvb2xlYW4gPSAhdmFsdWUgfHwgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICBpZiAoc3RvcmVJc0VtcHR5KSB7XG4gICAgICBjb25zdCBkZWZhdWx0U3RhdGVOb3RFbXB0eTogYm9vbGVhbiA9IE9iamVjdC5rZXlzKHRoaXMuX2NvbmZpZy5kZWZhdWx0c1N0YXRlKS5sZW5ndGggPiAwO1xuICAgICAgY29uc3Qgc3RvcmVWYWx1ZXM6IFBsYWluT2JqZWN0ID0gZGVmYXVsdFN0YXRlTm90RW1wdHlcbiAgICAgICAgPyB7IC4uLnRoaXMuX2NvbmZpZy5kZWZhdWx0c1N0YXRlLCAuLi5pbml0aWFsU3RhdGVWYWx1ZSB9XG4gICAgICAgIDogaW5pdGlhbFN0YXRlVmFsdWU7XG5cbiAgICAgIHRoaXMuX3N0YXRlU3RyZWFtLm5leHQoc3RvcmVWYWx1ZXMpO1xuICAgIH1cbiAgfVxufVxuIl19