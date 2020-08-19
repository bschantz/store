/**
 * @fileoverview added by tsickle
 * Generated from: src/execution/internal-ngxs-execution-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { NGXS_EXECUTION_STRATEGY } from './symbols';
export class InternalNgxsExecutionStrategy {
    /**
     * @param {?} _executionStrategy
     */
    constructor(_executionStrategy) {
        this._executionStrategy = _executionStrategy;
    }
    /**
     * @template T
     * @param {?} func
     * @return {?}
     */
    enter(func) {
        return this._executionStrategy.enter(func);
    }
    /**
     * @template T
     * @param {?} func
     * @return {?}
     */
    leave(func) {
        return this._executionStrategy.leave(func);
    }
}
InternalNgxsExecutionStrategy.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InternalNgxsExecutionStrategy.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NGXS_EXECUTION_STRATEGY,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InternalNgxsExecutionStrategy.prototype._executionStrategy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWwtbmd4cy1leGVjdXRpb24tc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zdG9yZS9zcmMvZXhlY3V0aW9uL2ludGVybmFsLW5neHMtZXhlY3V0aW9uLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUF5Qix1QkFBdUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUczRSxNQUFNLE9BQU8sNkJBQTZCOzs7O0lBQ3hDLFlBQzJDLGtCQUF5QztRQUF6Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO0lBQ2pGLENBQUM7Ozs7OztJQUVKLEtBQUssQ0FBSSxJQUFhO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUksSUFBYTtRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7O1lBWkYsVUFBVTs7Ozs0Q0FHTixNQUFNLFNBQUMsdUJBQXVCOzs7Ozs7O0lBQS9CLDJEQUFrRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hzRXhlY3V0aW9uU3RyYXRlZ3ksIE5HWFNfRVhFQ1VUSU9OX1NUUkFURUdZIH0gZnJvbSAnLi9zeW1ib2xzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEludGVybmFsTmd4c0V4ZWN1dGlvblN0cmF0ZWd5IGltcGxlbWVudHMgTmd4c0V4ZWN1dGlvblN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChOR1hTX0VYRUNVVElPTl9TVFJBVEVHWSkgcHJpdmF0ZSBfZXhlY3V0aW9uU3RyYXRlZ3k6IE5neHNFeGVjdXRpb25TdHJhdGVneVxuICApIHt9XG5cbiAgZW50ZXI8VD4oZnVuYzogKCkgPT4gVCk6IFQge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25TdHJhdGVneS5lbnRlcihmdW5jKTtcbiAgfVxuXG4gIGxlYXZlPFQ+KGZ1bmM6ICgpID0+IFQpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5fZXhlY3V0aW9uU3RyYXRlZ3kubGVhdmUoZnVuYyk7XG4gIH1cbn1cbiJdfQ==