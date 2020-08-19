/**
 * @fileoverview added by tsickle
 * Generated from: src/actions-stream.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { leaveNgxs } from './operators/leave-ngxs';
import { InternalNgxsExecutionStrategy } from './execution/internal-ngxs-execution-strategy';
/** @enum {string} */
const ActionStatus = {
    Dispatched: "DISPATCHED",
    Successful: "SUCCESSFUL",
    Canceled: "CANCELED",
    Errored: "ERRORED",
};
export { ActionStatus };
/**
 * @record
 * @template T
 */
export function ActionContext() { }
if (false) {
    /** @type {?} */
    ActionContext.prototype.status;
    /** @type {?} */
    ActionContext.prototype.action;
    /** @type {?|undefined} */
    ActionContext.prototype.error;
}
/**
 * Custom Subject that ensures that subscribers are notified of values in the order that they arrived.
 * A standard Subject does not have this guarantee.
 * For example, given the following code:
 * ```typescript
 *   const subject = new Subject<string>();
 * subject.subscribe(value => {
 * if (value === 'start') subject.next('end');
 * });
 * subject.subscribe(value => { });
 * subject.next('start');
 * ```
 * When `subject` is a standard `Subject<T>` the second subscriber would recieve `end` and then `start`.
 * When `subject` is a `OrderedSubject<T>` the second subscriber would recieve `start` and then `end`.
 * @template T
 */
export class OrderedSubject extends Subject {
    constructor() {
        super(...arguments);
        this._itemQueue = [];
        this._busyPushingNext = false;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    next(value) {
        if (this._busyPushingNext) {
            this._itemQueue.unshift((/** @type {?} */ (value)));
            return;
        }
        this._busyPushingNext = true;
        super.next(value);
        while (this._itemQueue.length > 0) {
            /** @type {?} */
            const nextValue = this._itemQueue.pop();
            super.next(nextValue);
        }
        this._busyPushingNext = false;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    OrderedSubject.prototype._itemQueue;
    /**
     * @type {?}
     * @private
     */
    OrderedSubject.prototype._busyPushingNext;
}
/**
 * Internal Action stream that is emitted anytime an action is dispatched.
 */
export class InternalActions extends OrderedSubject {
}
InternalActions.decorators = [
    { type: Injectable }
];
/**
 * Action stream that is emitted anytime an action is dispatched.
 *
 * You can listen to this in services to react without stores.
 */
export class Actions extends Observable {
    // This has to be `Observable<ActionContext>` in the v4. Because `InternalActions`
    // is a `Subject<ActionContext>`. Leave it as `any` to avoid breaking changes
    /**
     * @param {?} internalActions$
     * @param {?} internalExecutionStrategy
     */
    constructor(internalActions$, internalExecutionStrategy) {
        super((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            const childSubscription = internalActions$
                .pipe(leaveNgxs(internalExecutionStrategy))
                .subscribe({
                next: (/**
                 * @param {?} ctx
                 * @return {?}
                 */
                ctx => observer.next(ctx)),
                error: (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => observer.error(error)),
                complete: (/**
                 * @return {?}
                 */
                () => observer.complete())
            });
            observer.add(childSubscription);
        }));
    }
}
Actions.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Actions.ctorParameters = () => [
    { type: InternalActions },
    { type: InternalNgxsExecutionStrategy }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy1zdHJlYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9zcmMvYWN0aW9ucy1zdHJlYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7QUFLN0YsTUFBa0IsWUFBWTtJQUM1QixVQUFVLGNBQWU7SUFDekIsVUFBVSxjQUFlO0lBQ3pCLFFBQVEsWUFBYTtJQUNyQixPQUFPLFdBQVk7RUFDcEI7Ozs7OztBQUVELG1DQUlDOzs7SUFIQywrQkFBcUI7O0lBQ3JCLCtCQUFVOztJQUNWLDhCQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmhCLE1BQU0sT0FBTyxjQUFrQixTQUFRLE9BQVU7SUFBakQ7O1FBQ1UsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUNyQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFlbkMsQ0FBQzs7Ozs7SUFiQyxJQUFJLENBQUMsS0FBUztRQUNaLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLG1CQUFBLEtBQUssRUFBQyxDQUFDLENBQUM7WUFDaEMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztrQkFDM0IsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ3ZDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdkI7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjs7Ozs7O0lBaEJDLG9DQUE2Qjs7Ozs7SUFDN0IsMENBQWlDOzs7OztBQXFCbkMsTUFBTSxPQUFPLGVBQWdCLFNBQVEsY0FBNkI7OztZQURqRSxVQUFVOzs7Ozs7O0FBU1gsTUFBTSxPQUFPLE9BQVEsU0FBUSxVQUFlOzs7Ozs7O0lBRzFDLFlBQ0UsZ0JBQWlDLEVBQ2pDLHlCQUF3RDtRQUV4RCxLQUFLOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUU7O2tCQUNULGlCQUFpQixHQUFHLGdCQUFnQjtpQkFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2lCQUMxQyxTQUFTLENBQUM7Z0JBQ1QsSUFBSTs7OztnQkFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQy9CLEtBQUs7Ozs7Z0JBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNyQyxRQUFROzs7Z0JBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO2FBQ3BDLENBQUM7WUFFSixRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFuQkYsVUFBVTs7OztZQUtXLGVBQWU7WUFwRTVCLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgbGVhdmVOZ3hzIH0gZnJvbSAnLi9vcGVyYXRvcnMvbGVhdmUtbmd4cyc7XG5pbXBvcnQgeyBJbnRlcm5hbE5neHNFeGVjdXRpb25TdHJhdGVneSB9IGZyb20gJy4vZXhlY3V0aW9uL2ludGVybmFsLW5neHMtZXhlY3V0aW9uLXN0cmF0ZWd5JztcblxuLyoqXG4gKiBTdGF0dXMgb2YgYSBkaXNwYXRjaGVkIGFjdGlvblxuICovXG5leHBvcnQgY29uc3QgZW51bSBBY3Rpb25TdGF0dXMge1xuICBEaXNwYXRjaGVkID0gJ0RJU1BBVENIRUQnLFxuICBTdWNjZXNzZnVsID0gJ1NVQ0NFU1NGVUwnLFxuICBDYW5jZWxlZCA9ICdDQU5DRUxFRCcsXG4gIEVycm9yZWQgPSAnRVJST1JFRCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25Db250ZXh0PFQgPSBhbnk+IHtcbiAgc3RhdHVzOiBBY3Rpb25TdGF0dXM7XG4gIGFjdGlvbjogVDtcbiAgZXJyb3I/OiBFcnJvcjtcbn1cblxuLyoqXG4gKiBDdXN0b20gU3ViamVjdCB0aGF0IGVuc3VyZXMgdGhhdCBzdWJzY3JpYmVycyBhcmUgbm90aWZpZWQgb2YgdmFsdWVzIGluIHRoZSBvcmRlciB0aGF0IHRoZXkgYXJyaXZlZC5cbiAqIEEgc3RhbmRhcmQgU3ViamVjdCBkb2VzIG5vdCBoYXZlIHRoaXMgZ3VhcmFudGVlLlxuICogRm9yIGV4YW1wbGUsIGdpdmVuIHRoZSBmb2xsb3dpbmcgY29kZTpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICAgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgICAgc3ViamVjdC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgIGlmICh2YWx1ZSA9PT0gJ3N0YXJ0Jykgc3ViamVjdC5uZXh0KCdlbmQnKTtcbiAgICAgfSk7XG4gICAgIHN1YmplY3Quc3Vic2NyaWJlKHZhbHVlID0+IHsgfSk7XG4gICAgIHN1YmplY3QubmV4dCgnc3RhcnQnKTtcbiAqIGBgYFxuICogV2hlbiBgc3ViamVjdGAgaXMgYSBzdGFuZGFyZCBgU3ViamVjdDxUPmAgdGhlIHNlY29uZCBzdWJzY3JpYmVyIHdvdWxkIHJlY2lldmUgYGVuZGAgYW5kIHRoZW4gYHN0YXJ0YC5cbiAqIFdoZW4gYHN1YmplY3RgIGlzIGEgYE9yZGVyZWRTdWJqZWN0PFQ+YCB0aGUgc2Vjb25kIHN1YnNjcmliZXIgd291bGQgcmVjaWV2ZSBgc3RhcnRgIGFuZCB0aGVuIGBlbmRgLlxuICovXG5leHBvcnQgY2xhc3MgT3JkZXJlZFN1YmplY3Q8VD4gZXh0ZW5kcyBTdWJqZWN0PFQ+IHtcbiAgcHJpdmF0ZSBfaXRlbVF1ZXVlOiBUW10gPSBbXTtcbiAgcHJpdmF0ZSBfYnVzeVB1c2hpbmdOZXh0ID0gZmFsc2U7XG5cbiAgbmV4dCh2YWx1ZT86IFQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYnVzeVB1c2hpbmdOZXh0KSB7XG4gICAgICB0aGlzLl9pdGVtUXVldWUudW5zaGlmdCh2YWx1ZSEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9idXN5UHVzaGluZ05leHQgPSB0cnVlO1xuICAgIHN1cGVyLm5leHQodmFsdWUpO1xuICAgIHdoaWxlICh0aGlzLl9pdGVtUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbmV4dFZhbHVlID0gdGhpcy5faXRlbVF1ZXVlLnBvcCgpO1xuICAgICAgc3VwZXIubmV4dChuZXh0VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLl9idXN5UHVzaGluZ05leHQgPSBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIEludGVybmFsIEFjdGlvbiBzdHJlYW0gdGhhdCBpcyBlbWl0dGVkIGFueXRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnRlcm5hbEFjdGlvbnMgZXh0ZW5kcyBPcmRlcmVkU3ViamVjdDxBY3Rpb25Db250ZXh0PiB7fVxuXG4vKipcbiAqIEFjdGlvbiBzdHJlYW0gdGhhdCBpcyBlbWl0dGVkIGFueXRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQuXG4gKlxuICogWW91IGNhbiBsaXN0ZW4gdG8gdGhpcyBpbiBzZXJ2aWNlcyB0byByZWFjdCB3aXRob3V0IHN0b3Jlcy5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGlvbnMgZXh0ZW5kcyBPYnNlcnZhYmxlPGFueT4ge1xuICAvLyBUaGlzIGhhcyB0byBiZSBgT2JzZXJ2YWJsZTxBY3Rpb25Db250ZXh0PmAgaW4gdGhlIHY0LiBCZWNhdXNlIGBJbnRlcm5hbEFjdGlvbnNgXG4gIC8vIGlzIGEgYFN1YmplY3Q8QWN0aW9uQ29udGV4dD5gLiBMZWF2ZSBpdCBhcyBgYW55YCB0byBhdm9pZCBicmVha2luZyBjaGFuZ2VzXG4gIGNvbnN0cnVjdG9yKFxuICAgIGludGVybmFsQWN0aW9ucyQ6IEludGVybmFsQWN0aW9ucyxcbiAgICBpbnRlcm5hbEV4ZWN1dGlvblN0cmF0ZWd5OiBJbnRlcm5hbE5neHNFeGVjdXRpb25TdHJhdGVneVxuICApIHtcbiAgICBzdXBlcihvYnNlcnZlciA9PiB7XG4gICAgICBjb25zdCBjaGlsZFN1YnNjcmlwdGlvbiA9IGludGVybmFsQWN0aW9ucyRcbiAgICAgICAgLnBpcGUobGVhdmVOZ3hzKGludGVybmFsRXhlY3V0aW9uU3RyYXRlZ3kpKVxuICAgICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiBjdHggPT4gb2JzZXJ2ZXIubmV4dChjdHgpLFxuICAgICAgICAgIGVycm9yOiBlcnJvciA9PiBvYnNlcnZlci5lcnJvcihlcnJvciksXG4gICAgICAgICAgY29tcGxldGU6ICgpID0+IG9ic2VydmVyLmNvbXBsZXRlKClcbiAgICAgICAgfSk7XG5cbiAgICAgIG9ic2VydmVyLmFkZChjaGlsZFN1YnNjcmlwdGlvbik7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==