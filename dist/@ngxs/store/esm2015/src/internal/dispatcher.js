/**
 * @fileoverview added by tsickle
 * Generated from: src/internal/dispatcher.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ErrorHandler, Injectable } from '@angular/core';
import { EMPTY, forkJoin, of, Subject, throwError } from 'rxjs';
import { exhaustMap, filter, shareReplay, take } from 'rxjs/operators';
import { compose } from '../utils/compose';
import { InternalActions } from '../actions-stream';
import { StateStream } from './state-stream';
import { PluginManager } from '../plugin-manager';
import { InternalNgxsExecutionStrategy } from '../execution/internal-ngxs-execution-strategy';
import { leaveNgxs } from '../operators/leave-ngxs';
import { getActionTypeFromInstance } from '../utils/utils';
/**
 * Internal Action result stream that is emitted when an action is completed.
 * This is used as a method of returning the action result to the dispatcher
 * for the observable returned by the dispatch(...) call.
 * The dispatcher then asynchronously pushes the result from this stream onto the main action stream as a result.
 */
export class InternalDispatchedActionResults extends Subject {
}
InternalDispatchedActionResults.decorators = [
    { type: Injectable }
];
export class InternalDispatcher {
    /**
     * @param {?} _errorHandler
     * @param {?} _actions
     * @param {?} _actionResults
     * @param {?} _pluginManager
     * @param {?} _stateStream
     * @param {?} _ngxsExecutionStrategy
     */
    constructor(_errorHandler, _actions, _actionResults, _pluginManager, _stateStream, _ngxsExecutionStrategy) {
        this._errorHandler = _errorHandler;
        this._actions = _actions;
        this._actionResults = _actionResults;
        this._pluginManager = _pluginManager;
        this._stateStream = _stateStream;
        this._ngxsExecutionStrategy = _ngxsExecutionStrategy;
    }
    /**
     * Dispatches event(s).
     * @param {?} actionOrActions
     * @return {?}
     */
    dispatch(actionOrActions) {
        /** @type {?} */
        const result = this._ngxsExecutionStrategy.enter((/**
         * @return {?}
         */
        () => this.dispatchByEvents(actionOrActions)));
        result.subscribe({
            error: (/**
             * @param {?} error
             * @return {?}
             */
            error => this._ngxsExecutionStrategy.leave((/**
             * @return {?}
             */
            () => {
                try {
                    this._errorHandler.handleError(error);
                }
                catch (_a) { }
            })))
        });
        return result.pipe(leaveNgxs(this._ngxsExecutionStrategy));
    }
    /**
     * @private
     * @param {?} actionOrActions
     * @return {?}
     */
    dispatchByEvents(actionOrActions) {
        if (Array.isArray(actionOrActions)) {
            if (actionOrActions.length === 0)
                return of(this._stateStream.getValue());
            return forkJoin(actionOrActions.map((/**
             * @param {?} action
             * @return {?}
             */
            action => this.dispatchSingle(action))));
        }
        else {
            return this.dispatchSingle(actionOrActions);
        }
    }
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    dispatchSingle(action) {
        /** @type {?} */
        const type = getActionTypeFromInstance(action);
        if (!type) {
            /** @type {?} */
            const error = new Error(`This action doesn't have a type property: ${action.constructor.name}`);
            return throwError(error);
        }
        /** @type {?} */
        const prevState = this._stateStream.getValue();
        /** @type {?} */
        const plugins = this._pluginManager.plugins;
        return ((/** @type {?} */ (compose([
            ...plugins,
            (/**
             * @param {?} nextState
             * @param {?} nextAction
             * @return {?}
             */
            (nextState, nextAction) => {
                if (nextState !== prevState) {
                    this._stateStream.next(nextState);
                }
                /** @type {?} */
                const actionResult$ = this.getActionResultStream(nextAction);
                actionResult$.subscribe((/**
                 * @param {?} ctx
                 * @return {?}
                 */
                ctx => this._actions.next(ctx)));
                this._actions.next({ action: nextAction, status: "DISPATCHED" /* Dispatched */ });
                return this.createDispatchObservable(actionResult$);
            })
        ])(prevState, action)))).pipe(shareReplay());
    }
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    getActionResultStream(action) {
        return this._actionResults.pipe(filter((/**
         * @param {?} ctx
         * @return {?}
         */
        (ctx) => ctx.action === action && ctx.status !== "DISPATCHED" /* Dispatched */)), take(1), shareReplay());
    }
    /**
     * @private
     * @param {?} actionResult$
     * @return {?}
     */
    createDispatchObservable(actionResult$) {
        return actionResult$
            .pipe(exhaustMap((/**
         * @param {?} ctx
         * @return {?}
         */
        (ctx) => {
            switch (ctx.status) {
                case "SUCCESSFUL" /* Successful */:
                    return of(this._stateStream.getValue());
                case "ERRORED" /* Errored */:
                    return throwError(ctx.error);
                default:
                    return EMPTY;
            }
        })))
            .pipe(shareReplay());
    }
}
InternalDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InternalDispatcher.ctorParameters = () => [
    { type: ErrorHandler },
    { type: InternalActions },
    { type: InternalDispatchedActionResults },
    { type: PluginManager },
    { type: StateStream },
    { type: InternalNgxsExecutionStrategy }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InternalDispatcher.prototype._errorHandler;
    /**
     * @type {?}
     * @private
     */
    InternalDispatcher.prototype._actions;
    /**
     * @type {?}
     * @private
     */
    InternalDispatcher.prototype._actionResults;
    /**
     * @type {?}
     * @private
     */
    InternalDispatcher.prototype._pluginManager;
    /**
     * @type {?}
     * @private
     */
    InternalDispatcher.prototype._stateStream;
    /**
     * @type {?}
     * @private
     */
    InternalDispatcher.prototype._ngxsExecutionStrategy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JlL3NyYy9pbnRlcm5hbC9kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzQyxPQUFPLEVBQStCLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBUzNELE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxPQUFzQjs7O1lBRDFFLFVBQVU7O0FBSVgsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7O0lBQzdCLFlBQ1UsYUFBMkIsRUFDM0IsUUFBeUIsRUFDekIsY0FBK0MsRUFDL0MsY0FBNkIsRUFDN0IsWUFBeUIsRUFDekIsc0JBQXFEO1FBTHJELGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLG1CQUFjLEdBQWQsY0FB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TyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDN0IsTUFBTTs7OztRQUNKLENBQUMsR0FBa0IsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sa0NBQTRCLEVBQ3hGLEVBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFdBQVcsRUFBRSxDQUNkLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyx3QkFBd0IsQ0FBQyxhQUF3QztRQUN2RSxPQUFPLGFBQWE7YUFDakIsSUFBSSxDQUNILFVBQVU7Ozs7UUFBQyxDQUFDLEdBQWtCLEVBQUUsRUFBRTtZQUNoQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xCO29CQUNFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDMUM7b0JBQ0UsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQjtvQkFDRSxPQUFPLEtBQUssQ0FBQzthQUNoQjtRQUNILENBQUMsRUFBQyxDQUNIO2FBQ0EsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBM0ZGLFVBQVU7Ozs7WUFyQkYsWUFBWTtZQUtpQixlQUFlO1lBcUJ6QiwrQkFBK0I7WUFuQmxELGFBQWE7WUFEYixXQUFXO1lBRVgsNkJBQTZCOzs7Ozs7O0lBZ0JsQywyQ0FBbUM7Ozs7O0lBQ25DLHNDQUFpQzs7Ozs7SUFDakMsNENBQXVEOzs7OztJQUN2RCw0Q0FBcUM7Ozs7O0lBQ3JDLDBDQUFpQzs7Ozs7SUFDakMsb0RBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFTVBUWSwgZm9ya0pvaW4sIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBleGhhdXN0TWFwLCBmaWx0ZXIsIHNoYXJlUmVwbGF5LCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAnLi4vdXRpbHMvY29tcG9zZSc7XG5pbXBvcnQgeyBBY3Rpb25Db250ZXh0LCBBY3Rpb25TdGF0dXMsIEludGVybmFsQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMtc3RyZWFtJztcbmltcG9ydCB7IFN0YXRlU3RyZWFtIH0gZnJvbSAnLi9zdGF0ZS1zdHJlYW0nO1xuaW1wb3J0IHsgUGx1Z2luTWFuYWdlciB9IGZyb20gJy4uL3BsdWdpbi1tYW5hZ2VyJztcbmltcG9ydCB7IEludGVybmFsTmd4c0V4ZWN1dGlvblN0cmF0ZWd5IH0gZnJvbSAnLi4vZXhlY3V0aW9uL2ludGVybmFsLW5neHMtZXhlY3V0aW9uLXN0cmF0ZWd5JztcbmltcG9ydCB7IGxlYXZlTmd4cyB9IGZyb20gJy4uL29wZXJhdG9ycy9sZWF2ZS1uZ3hzJztcbmltcG9ydCB7IGdldEFjdGlvblR5cGVGcm9tSW5zdGFuY2UgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbi8qKlxuICogSW50ZXJuYWwgQWN0aW9uIHJlc3VsdCBzdHJlYW0gdGhhdCBpcyBlbWl0dGVkIHdoZW4gYW4gYWN0aW9uIGlzIGNvbXBsZXRlZC5cbiAqIFRoaXMgaXMgdXNlZCBhcyBhIG1ldGhvZCBvZiByZXR1cm5pbmcgdGhlIGFjdGlvbiByZXN1bHQgdG8gdGhlIGRpc3BhdGNoZXJcbiAqIGZvciB0aGUgb2JzZXJ2YWJsZSByZXR1cm5lZCBieSB0aGUgZGlzcGF0Y2goLi4uKSBjYWxsLlxuICogVGhlIGRpc3BhdGNoZXIgdGhlbiBhc3luY2hyb25vdXNseSBwdXNoZXMgdGhlIHJlc3VsdCBmcm9tIHRoaXMgc3RyZWFtIG9udG8gdGhlIG1haW4gYWN0aW9uIHN0cmVhbSBhcyBhIHJlc3VsdC5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEludGVybmFsRGlzcGF0Y2hlZEFjdGlvblJlc3VsdHMgZXh0ZW5kcyBTdWJqZWN0PEFjdGlvbkNvbnRleHQ+IHt9XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnRlcm5hbERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcbiAgICBwcml2YXRlIF9hY3Rpb25zOiBJbnRlcm5hbEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBfYWN0aW9uUmVzdWx0czogSW50ZXJuYWxEaXNwYXRjaGVkQWN0aW9uUmVzdWx0cyxcbiAgICBwcml2YXRlIF9wbHVnaW5NYW5hZ2VyOiBQbHVnaW5NYW5hZ2VyLFxuICAgIHByaXZhdGUgX3N0YXRlU3RyZWFtOiBTdGF0ZVN0cmVhbSxcbiAgICBwcml2YXRlIF9uZ3hzRXhlY3V0aW9uU3RyYXRlZ3k6IEludGVybmFsTmd4c0V4ZWN1dGlvblN0cmF0ZWd5XG4gICkge31cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBldmVudChzKS5cbiAgICovXG4gIGRpc3BhdGNoKGFjdGlvbk9yQWN0aW9uczogYW55IHwgYW55W10pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX25neHNFeGVjdXRpb25TdHJhdGVneS5lbnRlcigoKSA9PlxuICAgICAgdGhpcy5kaXNwYXRjaEJ5RXZlbnRzKGFjdGlvbk9yQWN0aW9ucylcbiAgICApO1xuXG4gICAgcmVzdWx0LnN1YnNjcmliZSh7XG4gICAgICBlcnJvcjogZXJyb3IgPT5cbiAgICAgICAgdGhpcy5fbmd4c0V4ZWN1dGlvblN0cmF0ZWd5LmxlYXZlKCgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgICAgICB9IGNhdGNoIHt9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0LnBpcGUobGVhdmVOZ3hzKHRoaXMuX25neHNFeGVjdXRpb25TdHJhdGVneSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNwYXRjaEJ5RXZlbnRzKGFjdGlvbk9yQWN0aW9uczogYW55IHwgYW55W10pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFjdGlvbk9yQWN0aW9ucykpIHtcbiAgICAgIGlmIChhY3Rpb25PckFjdGlvbnMubGVuZ3RoID09PSAwKSByZXR1cm4gb2YodGhpcy5fc3RhdGVTdHJlYW0uZ2V0VmFsdWUoKSk7XG4gICAgICByZXR1cm4gZm9ya0pvaW4oYWN0aW9uT3JBY3Rpb25zLm1hcChhY3Rpb24gPT4gdGhpcy5kaXNwYXRjaFNpbmdsZShhY3Rpb24pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRpc3BhdGNoU2luZ2xlKGFjdGlvbk9yQWN0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkaXNwYXRjaFNpbmdsZShhY3Rpb246IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gZ2V0QWN0aW9uVHlwZUZyb21JbnN0YW5jZShhY3Rpb24pO1xuICAgIGlmICghdHlwZSkge1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBUaGlzIGFjdGlvbiBkb2Vzbid0IGhhdmUgYSB0eXBlIHByb3BlcnR5OiAke2FjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lfWBcbiAgICAgICk7XG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgfVxuXG4gICAgY29uc3QgcHJldlN0YXRlID0gdGhpcy5fc3RhdGVTdHJlYW0uZ2V0VmFsdWUoKTtcbiAgICBjb25zdCBwbHVnaW5zID0gdGhpcy5fcGx1Z2luTWFuYWdlci5wbHVnaW5zO1xuXG4gICAgcmV0dXJuIChjb21wb3NlKFtcbiAgICAgIC4uLnBsdWdpbnMsXG4gICAgICAobmV4dFN0YXRlOiBhbnksIG5leHRBY3Rpb246IGFueSkgPT4ge1xuICAgICAgICBpZiAobmV4dFN0YXRlICE9PSBwcmV2U3RhdGUpIHtcbiAgICAgICAgICB0aGlzLl9zdGF0ZVN0cmVhbS5uZXh0KG5leHRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWN0aW9uUmVzdWx0JCA9IHRoaXMuZ2V0QWN0aW9uUmVzdWx0U3RyZWFtKG5leHRBY3Rpb24pO1xuICAgICAgICBhY3Rpb25SZXN1bHQkLnN1YnNjcmliZShjdHggPT4gdGhpcy5fYWN0aW9ucy5uZXh0KGN0eCkpO1xuICAgICAgICB0aGlzLl9hY3Rpb25zLm5leHQoeyBhY3Rpb246IG5leHRBY3Rpb24sIHN0YXR1czogQWN0aW9uU3RhdHVzLkRpc3BhdGNoZWQgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZURpc3BhdGNoT2JzZXJ2YWJsZShhY3Rpb25SZXN1bHQkKTtcbiAgICAgIH1cbiAgICBdKShwcmV2U3RhdGUsIGFjdGlvbikgYXMgT2JzZXJ2YWJsZTxhbnk+KS5waXBlKHNoYXJlUmVwbGF5KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBY3Rpb25SZXN1bHRTdHJlYW0oYWN0aW9uOiBhbnkpOiBPYnNlcnZhYmxlPEFjdGlvbkNvbnRleHQ+IHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uUmVzdWx0cy5waXBlKFxuICAgICAgZmlsdGVyKFxuICAgICAgICAoY3R4OiBBY3Rpb25Db250ZXh0KSA9PiBjdHguYWN0aW9uID09PSBhY3Rpb24gJiYgY3R4LnN0YXR1cyAhPT0gQWN0aW9uU3RhdHVzLkRpc3BhdGNoZWRcbiAgICAgICksXG4gICAgICB0YWtlKDEpLFxuICAgICAgc2hhcmVSZXBsYXkoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZURpc3BhdGNoT2JzZXJ2YWJsZShhY3Rpb25SZXN1bHQkOiBPYnNlcnZhYmxlPEFjdGlvbkNvbnRleHQ+KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gYWN0aW9uUmVzdWx0JFxuICAgICAgLnBpcGUoXG4gICAgICAgIGV4aGF1c3RNYXAoKGN0eDogQWN0aW9uQ29udGV4dCkgPT4ge1xuICAgICAgICAgIHN3aXRjaCAoY3R4LnN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSBBY3Rpb25TdGF0dXMuU3VjY2Vzc2Z1bDpcbiAgICAgICAgICAgICAgcmV0dXJuIG9mKHRoaXMuX3N0YXRlU3RyZWFtLmdldFZhbHVlKCkpO1xuICAgICAgICAgICAgY2FzZSBBY3Rpb25TdGF0dXMuRXJyb3JlZDpcbiAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoY3R4LmVycm9yKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAucGlwZShzaGFyZVJlcGxheSgpKTtcbiAgfVxufVxuIl19